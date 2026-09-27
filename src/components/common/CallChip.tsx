import React, { useEffect, useRef, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    CommandLineIcon,
    File02Icon,
    PencilEdit01Icon,
    RefreshIcon,
    Search01Icon,
    Tick02Icon,
} from '@hugeicons/core-free-icons';

export type CallChipStatus = 'running' | 'done' | 'error' | 'idle';
export type CallChipIcon = 'terminal' | 'file' | 'search' | 'edit';

interface CallChipProps {
    icon?: CallChipIcon;
    name?: string;
    argument?: string;
    status?: CallChipStatus;
    expectedMs?: number;
    size?: number;
    radius?: number;
    color?: string;
    surfaceColor?: string;
    progressColor?: string;
    progressOpacity?: number;
    doneColor?: string;
    errorColor?: string;
    washOpacity?: number;
    shake?: number;
    showTimer?: boolean;
    onRetry?: () => void;
    className?: string;
    style?: React.CSSProperties;
}

const HOLD_AT = 0.9;
const SHAKE = [0, -1, 1, -0.66, 0.66, -0.33, 0];
const ICONS = {
    terminal: CommandLineIcon,
    file: File02Icon,
    search: Search01Icon,
    edit: PencilEdit01Icon,
};
const WORDS: Record<CallChipStatus, string> = {
    running: 'running',
    done: 'done',
    error: 'failed',
    idle: 'queued',
};

const formatTime = (milliseconds: number) =>
    milliseconds < 10000
        ? `${Math.round(milliseconds)} ms`
        : `${(milliseconds / 1000).toFixed(1)} s`;

const prefersReducedMotion = () =>
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const glyphFor = (status: CallChipStatus) =>
    status === 'done' ? 'check' : status === 'error' ? 'retry' : 'tool';

export const CallChip: React.FC<CallChipProps> = ({
    icon: iconName = 'terminal',
    name = 'bash',
    argument = 'npm test',
    status = 'running',
    expectedMs = 2500,
    size = 34,
    radius = 10,
    color = 'currentColor',
    surfaceColor = '#27272a',
    progressColor = 'currentColor',
    progressOpacity = 0.08,
    doneColor = '#22c55e',
    errorColor = '#ef4444',
    washOpacity = 0.14,
    shake = 6,
    showTimer = true,
    onRetry,
    className = '',
    style,
}) => {
    const rootRef = useRef<HTMLSpanElement>(null);
    const fillRef = useRef<HTMLSpanElement>(null);
    const timerRef = useRef<HTMLSpanElement>(null);
    const fraction = useRef(0);
    const clock = useRef(0);
    const shakeAnimation = useRef<Animation | null>(null);
    const [pressed, setPressed] = useState(false);
    const [announce, setAnnounce] = useState('');
    const currentGlyph = glyphFor(status);

    const setFraction = (value: number, instant = false) => {
        const fill = fillRef.current;
        if (!fill) return;
        fraction.current = value;
        if (instant) fill.style.transition = 'none';
        fill.style.transform = `scaleX(${value})`;
        if (instant) {
            void fill.getBoundingClientRect();
            fill.style.transition = '';
        }
    };

    useEffect(() => {
        return () => shakeAnimation.current?.cancel();
    }, []);

    useEffect(() => {
        const fill = fillRef.current;
        if (!fill) return;

        if (status === 'running') {
            shakeAnimation.current?.cancel();
            setFraction(0, true);
            setFraction(HOLD_AT);
        } else if (status === 'done') {
            setFraction(1, true);
        } else if (status === 'error') {
            const live = fill ? new DOMMatrix(getComputedStyle(fill).transform).a : fraction.current;
            setFraction(Math.min(1, Math.max(0, live)), true);
            if (shake > 0 && !prefersReducedMotion() && rootRef.current) {
                shakeAnimation.current = rootRef.current.animate(
                    SHAKE.map((value) => ({
                        transform: `translateX(${value * shake}px)`,
                        easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
                    })),
                    { duration: 450, composite: 'add' }
                );
            }
        } else {
            setFraction(0, true);
        }

    }, [currentGlyph, shake, status]);

    useEffect(() => {
        if (status !== 'running') {
            if (timerRef.current) timerRef.current.textContent = clock.current ? formatTime(clock.current) : '—';
            return undefined;
        }

        const startedAt = performance.now();
        const write = (milliseconds: number) => {
            clock.current = milliseconds;
            if (timerRef.current) timerRef.current.textContent = formatTime(milliseconds);
        };

        write(0);
        if (prefersReducedMotion()) {
            const interval = window.setInterval(() => write(performance.now() - startedAt), 100);
            return () => window.clearInterval(interval);
        }

        let frame = 0;
        const tick = () => {
            write(performance.now() - startedAt);
            frame = requestAnimationFrame(tick);
        };
        tick();
        return () => cancelAnimationFrame(frame);
    }, [status]);

    useEffect(() => {
        const elapsed = showTimer && clock.current ? ` in ${Math.round(clock.current)} ms` : '';
        setAnnounce(`${name} ${argument}, ${WORDS[status]}${status === 'done' ? elapsed : ''}`);
    }, [argument, name, showTimer, status]);

    const fontSize = Math.max(11, Math.round(size * 0.38));
    const iconSize = fontSize + 2;
    const toolIcon = ICONS[iconName];
    const cssVariables = {
        '--cc-size': `${size}px`,
        '--cc-font': `${fontSize}px`,
        '--cc-pad': `${Math.round(size * 0.35)}px`,
        '--cc-gap': `${Math.round(fontSize * 0.55)}px`,
        '--cc-radius': `${radius}px`,
        '--cc-color': color,
        '--cc-surface': surfaceColor,
        '--cc-progress': progressColor,
        '--cc-progress-pct': `${progressOpacity * 100}%`,
        '--cc-done': doneColor,
        '--cc-error': errorColor,
        '--cc-wash-pct': `${washOpacity * 100}%`,
        '--cc-expected': `${expectedMs}ms`,
        ...style,
    } as React.CSSProperties;

    const glyphState = (glyph: string) => (glyph === currentGlyph ? 'in' : undefined);

    return (
        <span
            ref={rootRef}
            role="status"
            aria-busy={status === 'running' || undefined}
            data-status={status}
            data-pressed={pressed ? '' : undefined}
            className={`group relative box-border inline-flex items-center overflow-hidden leading-none whitespace-nowrap select-none [height:var(--cc-size)] [padding:0_var(--cc-pad)] [gap:var(--cc-gap)] [border-radius:var(--cc-radius)] [background:var(--cc-surface)] [color:var(--cc-color)] [font-size:var(--cc-font)] [transition:transform_160ms_cubic-bezier(0.23,1,0.32,1)] data-[status=error]:cursor-pointer data-[pressed]:scale-[0.97] motion-reduce:data-[pressed]:scale-100${className ? ` ${className}` : ''}`}
            style={cssVariables}
        >
            <span
                ref={fillRef}
                className="pointer-events-none absolute inset-0 origin-left scale-x-0 [background:color-mix(in_srgb,var(--cc-progress)_var(--cc-progress-pct),transparent)] group-data-[status=running]:[transition:transform_var(--cc-expected)_linear] group-data-[status=done]:[background:color-mix(in_srgb,var(--cc-done)_var(--cc-wash-pct),transparent)] group-data-[status=error]:[background:color-mix(in_srgb,var(--cc-error)_var(--cc-wash-pct),transparent)] motion-reduce:transition-none!"
                aria-hidden="true"
            />
            <span className="relative flex-none overflow-hidden [width:calc(var(--cc-font)+2px)] [height:calc(var(--cc-font)+2px)]" aria-hidden="true">
                <span className="absolute inset-0 grid place-items-center opacity-0 blur-[3px] [transform:translateY(70%)] data-[state=in]:opacity-100 data-[state=in]:blur-0 data-[state=in]:[transform:none] data-[state=in]:[transition:opacity_240ms_cubic-bezier(0.23,1,0.32,1),transform_240ms_cubic-bezier(0.23,1,0.32,1)] data-[state=out]:[transform:translateY(-70%)] group-data-[status=done]:data-[state=in]:[color:var(--cc-done)] group-data-[status=error]:data-[state=in]:[color:var(--cc-error)]" data-state={glyphState('tool')}>
                    <HugeiconsIcon icon={toolIcon} size={iconSize} strokeWidth={1.8} />
                </span>
                <span className="absolute inset-0 grid place-items-center opacity-0 blur-[3px] [transform:translateY(70%)] data-[state=in]:opacity-100 data-[state=in]:blur-0 data-[state=in]:[transform:none] data-[state=in]:[transition:opacity_240ms_cubic-bezier(0.23,1,0.32,1),transform_240ms_cubic-bezier(0.23,1,0.32,1)] data-[state=out]:[transform:translateY(-70%)] group-data-[status=done]:data-[state=in]:[color:var(--cc-done)] group-data-[status=error]:data-[state=in]:[color:var(--cc-error)]" data-state={glyphState('check')}>
                    <HugeiconsIcon icon={Tick02Icon} size={iconSize} strokeWidth={2.2} />
                </span>
                <span className="absolute inset-0 grid place-items-center opacity-0 blur-[3px] [transform:translateY(70%)] data-[state=in]:opacity-100 data-[state=in]:blur-0 data-[state=in]:[transform:none] data-[state=in]:[transition:opacity_240ms_cubic-bezier(0.23,1,0.32,1),transform_240ms_ cubic-bezier(0.23,1,0.32,1)] data-[state=out]:[transform:translateY(-70%)] group-data-[status=error]:data-[state=in]:[color:var(--cc-error)]" data-state={glyphState('retry')}>
                    <HugeiconsIcon icon={RefreshIcon} size={iconSize} strokeWidth={2} />
                </span>
            </span>
            <span className="relative font-medium" aria-hidden="true">{name}</span>
            <span className="relative opacity-[0.72]" aria-hidden="true">{argument}</span>
            {showTimer && <span ref={timerRef} className="relative min-w-[6ch] text-right tabular-nums opacity-50" aria-hidden="true">0 ms</span>}
            {status === 'error' && onRetry && (
                <button
                    type="button"
                    className="absolute -inset-[5px] m-0 cursor-pointer touch-manipulation appearance-none border-0 bg-transparent p-0 outline-none"
                    aria-label={`Retry ${name} ${argument}`}
                    onClick={onRetry}
                    onPointerDown={() => setPressed(true)}
                    onPointerUp={() => setPressed(false)}
                    onPointerCancel={() => setPressed(false)}
                />
            )}
            <span className="sr-only">{announce}</span>
        </span>
    );
};

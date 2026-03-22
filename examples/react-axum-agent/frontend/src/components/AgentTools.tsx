import { Cpu, Wrench, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ChatMessageText({ text }: { text: string }) {
  return (
    <div className="prose prose-invert prose-p:leading-relaxed max-w-none text-zinc-200 wrap-break-word">
      <span className="whitespace-pre-wrap">{text}</span>
    </div>
  );
}

export function ToolHeader({
  toolName,
  state,
  isComplete,
  hasError,
}: {
  toolName: string;
  state: string;
  isComplete: boolean;
  hasError: boolean;
}) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2 w-fit">
      {isComplete ? (
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70" />
      ) : hasError ? (
        <AlertCircle className="w-3.5 h-3.5 text-rose-500/70" />
      ) : (
        <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-500" />
      )}
      <span className="font-medium text-zinc-300">{toolName}</span>
      <span className="text-zinc-600 text-xs">{state.replace("-", " ")}</span>
    </div>
  );
}

export function ToolInput({ input }: { input: unknown }) {
  return (
    <div className="flex gap-2 text-zinc-500 pl-4 border-l-2 border-zinc-800/50 py-1">
      <Cpu className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-50" />
      <pre className="whitespace-pre-wrap break-all overflow-x-auto">
        {JSON.stringify(input, null, 2)}
      </pre>
    </div>
  );
}

export function ToolResult({ output }: { output: unknown }) {
  return (
    <div className="flex gap-2 text-zinc-500 pl-4 border-l-2 border-emerald-900/30 py-1">
      <Wrench className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-50" />
      <pre className="whitespace-pre-wrap break-all overflow-x-auto text-zinc-400">
        {typeof output === "string" ? output : JSON.stringify(output, null, 2)}
      </pre>
    </div>
  );
}

export function ToolError({ errorText }: { errorText: string }) {
  return (
    <div className="flex gap-2 text-rose-500 pl-4 border-l-2 border-rose-900/30 py-1">
      <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-50" />
      <pre className="whitespace-pre-wrap break-all overflow-x-auto text-rose-400">
        {errorText}
      </pre>
    </div>
  );
}

'use client';

import {
    Code,
    CodeBlock,
    CodeHeader,
} from '@/components/animate-ui/components/animate/code';
import { FileCode } from 'lucide-react';
import { colors } from '@/Constants/Color';

const theme = colors.dark;

const UI = {
    fileName: "middleware.ts",
    language: "typescript",
    containerSize: "w-full h-[400px]",
    codeSnippet: `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Check if user is authenticated
  const token = request.cookies.get('token')
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  // Forward to edge compute
  return NextResponse.next()
}`
};

export const CodeDemo = ({
    duration = 2,
    delay = 0.5,
    writing = true,
    cursor = true,
}) => {
    return (
        <div style={{ borderColor: theme.border.default, backgroundColor: theme.surface.default }} className="rounded-xl overflow-hidden shadow-2xl border">
            <Code
                key={`${duration}-${delay}-${writing}-${cursor}`}
                className={UI.containerSize}
                code={UI.codeSnippet}
            >
                <CodeHeader icon={FileCode} copyButton style={{ backgroundColor: theme.surface.alt, borderBottom: `1px solid ${theme.border.default}`, color: theme.text.primary }}>
                    {UI.fileName}
                </CodeHeader>

                <div className="p-4 bg-gray-950 text-gray-200">
                    <CodeBlock
                        cursor={cursor}
                        lang={UI.language}
                        writing={writing}
                        duration={duration}
                        delay={delay}
                    />
                </div>
            </Code>
        </div>
    );
};
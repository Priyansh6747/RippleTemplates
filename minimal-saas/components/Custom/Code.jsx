'use client';

import {
    Code,
    CodeBlock,
    CodeHeader,
} from '@/components/animate-ui/components/animate/code';
import { FileCode } from 'lucide-react';

export const CodeDemo = ({
    duration,
    delay,
    writing,
    cursor,
}) => {
    return (
        <Code
            key={`${duration}-${delay}-${writing}-${cursor}`}
            className="w-[420px] h-[372px]" // UI:CONTAINER_SIZE (line ~17)
            code={`'use client';
 
import * as React from 'react';
  
function MyComponent(props) {
  return (
    <div {...props}>
      {/* UI:INNER_TEXT (My Component) */}
      <p>My Component</p>
    </div>
  );
}

export { MyComponent };`}
        >
            {/* UI:HEADER (file name display) */}
            <CodeHeader icon={FileCode} copyButton>
                my-component.tsx
            </CodeHeader>

            <CodeBlock
                cursor={cursor} // UI:CURSOR_TOGGLE
                lang="tsx" // UI:LANGUAGE_LABEL
                writing={writing} // UI:TYPING_ANIMATION
                duration={duration} // UI:ANIMATION_DURATION
                delay={delay} // UI:ANIMATION_DELAY
            />
        </Code>
    );
};
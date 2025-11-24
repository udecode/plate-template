import type { SlateLeafProps } from 'platejs';
import { SlateLeaf } from 'platejs';
import * as React from 'react';

export function HighlightLeafStatic(props: SlateLeafProps) {
  return (
    <SlateLeaf {...props} as="mark" className="bg-highlight/30 text-inherit">
      {props.children}
    </SlateLeaf>
  );
}

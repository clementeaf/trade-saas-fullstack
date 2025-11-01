import type { RowSelectionState } from '@tanstack/react-table';

export function hasSelectionChanged(
  prevSelection: RowSelectionState,
  currentSelection: RowSelectionState
): boolean {
  const prevKeys = Object.keys(prevSelection).filter((id) => prevSelection[id]).sort().join(',');
  const currentKeys = Object.keys(currentSelection).filter((id) => currentSelection[id]).sort().join(',');
  return prevKeys !== currentKeys;
}


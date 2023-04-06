export function mapToEntities<T extends { id?: number }>(
  itemsArray: T[],
  initialValue: { [id: string]: T } = {}
): { [id: string]: T } {
  return itemsArray.reduce((entities, item) => {
    return {
      ...entities,
      [item.id || 0]: item,
    };
  }, initialValue);
}

export const cached = fn => {
  const cache = Object.create(null);
  return id => {
    const hit = cache[id];
    return hit || (cache[id] = fn(id));
  };
};

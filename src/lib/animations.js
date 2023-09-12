export const slideUp = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.5 * i,
      y: { stiffness: 1000, velocity: -100 },
    },
  }),
  closed: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.5, y: { stiffness: 1000 } },
  },
};

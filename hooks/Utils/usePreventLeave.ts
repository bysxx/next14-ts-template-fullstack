const usePreventLeave = () => {
  const listener = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;

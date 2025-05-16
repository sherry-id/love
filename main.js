
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("container");
      clearTimeout(c);
    }, 1000);
  };

const applySEO = (data) => {
  document.querySelector('title').innerHTML = `Deni Carmo | ${data.title}`;
  document.querySelector('meta[property="og:title"]').content = `Deni Carmo | ${data.title}`;
  document.querySelector('meta[name="description"').content = data.description;
};

export default applySEO;

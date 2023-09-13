window.onload = async (ev) => {
  const textfile = await fetch('./notes_list.txt');
  const text = await textfile.text();
  const list = document.querySelector('#notelist');
  for (const line of text.split('\n')) {
    if (line === "") continue;
    const link = document.createElement("li");
    link.innerHTML = `<a href='${line}.pdf'>${line.replace(/\([\d\_]*\)/g).toUpperCase()}</a>`;
    list.appendChild(link);
  }
};

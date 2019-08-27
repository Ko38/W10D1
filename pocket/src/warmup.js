
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let pTag = document.createElement('p');
  while (htmlElement.firstChild) {
    htmlElement.removeChild(htmlElement.firstChild);
  }
  pTag.innerHTML += string;
  htmlElement.append(pTag);
};

htmlGenerator('Party Time.', partyHeader);
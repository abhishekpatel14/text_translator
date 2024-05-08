const translateButton = document.getElementById("translateButton");
const fromLanguage = document.getElementById("fromLanguage");
const toLanguage = document.getElementById("toLanguage");
const textInput = document.getElementById("textInput");
const TranslatedTextForm = document.getElementById("translatedText");

const toLanguageSelect = document.getElementById("toLanguage");
const fromLanguageSelect = document.getElementById("fromLanguage");

for (const code in languages) {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = languages[code];
  fromLanguageSelect.appendChild(option);
}

for (const code in languages) {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = languages[code];
  toLanguageSelect.appendChild(option);
}

translateButton.addEventListener("click", async () => {
  const sourceLang = fromLanguage.value;
  const targetLang = toLanguage.value;
  const text = textInput.value ? textInput.value : "Good morning";

  const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "7919748d92mshb295fb0d6188d7ap180da6jsn0e42f198eb84",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: text,
      target: `${targetLang}`,
      source: `${sourceLang}`,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    res = JSON.parse(result).data.translations[0].translatedText;
    let TranslatedText = res;
    TranslatedTextForm.innerText = TranslatedText;
  } catch (error) {
    console.error(error);
  }
});

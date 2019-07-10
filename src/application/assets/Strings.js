import LocalizedStrings from 'react-native-localization'
import englishStrings from './strings/en.json'
import portugueseStrings from './strings/pt-br.json'

const Strings = new LocalizedStrings({
  en: englishStrings,
  pt: portugueseStrings,
})

export default Strings

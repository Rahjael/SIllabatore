

const f = require('./sillabatore');

test('isConsonant', () => {
  expect(f.isConsonant('b')).toBe(true);
  expect(f.isConsonant('a')).toBe(false);
})

test('isVowel', () => {
  expect(f.isVowel('a')).toBe(true);
  expect(f.isVowel('j')).toBe(false);
})

test('abituai', () => {
  expect(f.divideWord('abituai')).toBe('a-bi-tuai');
})

test('accentuai', () => {
  expect(f.divideWord('accentuai')).toBe('ac-cen-tuai');
})

test('acqua', () => {
  expect(f.divideWord('acqua')).toBe('ac-qua');
})

test('adamantino', () => {
  expect(f.divideWord('adamantino')).toBe('a-da-man-ti-no');
})

test('adeguai', () => {
  expect(f.divideWord('adeguai')).toBe('a-de-guai');
})

test('afroamericano', () => {
  expect(f.divideWord('afroamericano')).toBe('a-fro-a-me-ri-ca-no');
})

test('aggeggiare', () => {
  expect(f.divideWord('aggeggiare')).toBe('ag-geg-gia-re');
})

test('aglio', () => {
  expect(f.divideWord('aglio')).toBe('a-glio');
})

test('aia', () => {
  expect(f.divideWord('aia')).toBe('a-ia');
})

test('alice', () => {
  expect(f.divideWord('alice')).toBe('a-li-ce');
})

test('aiuola', () => {
  expect(f.divideWord('aiuola')).toBe('a-iuo-la');
})

test('aiuto', () => {
  expect(f.divideWord('aiuto')).toBe('a-iu-to');
})

test('aliante', () => {
  expect(f.divideWord('aliante')).toBe('a-lian-te');
})

test('allucinante', () => {
  expect(f.divideWord('allucinante')).toBe('al-lu-ci-nan-te');
})

test('angoscia', () => {
  expect(f.divideWord('angoscia')).toBe('an-go-scia');
})

test('anguria', () => {
  expect(f.divideWord('anguria')).toBe('an-gu-ria');
})

test('aosta', () => {
  expect(f.divideWord('aosta')).toBe('a-o-sta');
})

test('arcuai', () => {
  expect(f.divideWord('arcuai')).toBe('ar-cuai');
})

test('asciugamano', () => {
  expect(f.divideWord('asciugamano')).toBe('a-sciu-ga-ma-no');
})

test('asfalto', () => {
  expect(f.divideWord('asfalto')).toBe('a-sfal-to');
})

test('asino', () => {
  expect(f.divideWord('asino')).toBe('a-si-no');
})

test('assemblea', () => {
  expect(f.divideWord('assemblea')).toBe('as-sem-ble-a');
})

test('astronauta', () => {
  expect(f.divideWord('astronauta')).toBe('a-stro-nau-ta');
})

test('astronomia', () => {
  expect(f.divideWord('astronomia')).toBe('a-stro-no-mi-a');
})

test('astruso', () => {
  expect(f.divideWord('astruso')).toBe('a-stru-so');
})

test('ateniese', () => {
  expect(f.divideWord('ateniese')).toBe('a-te-nie-se');
})

test('atletico', () => {
  expect(f.divideWord('atletico')).toBe('a-tle-ti-co');
})

test('atollo', () => {
  expect(f.divideWord('atollo')).toBe('a-tol-lo');
})

test('atto', () => {
  expect(f.divideWord('atto')).toBe('at-to');
})

test('attuai', () => {
  expect(f.divideWord('attuai')).toBe('at-tuai');
})

test('avallare', () => {
  expect(f.divideWord('avallare')).toBe('a-val-la-re');
})

test('ballo', () => {
  expect(f.divideWord('ballo')).toBe('bal-lo');
})

test('barbiturici', () => {
  expect(f.divideWord('barbiturici')).toBe('bar-bi-tu-ri-ci');
})

test('basico', () => {
  expect(f.divideWord('basico')).toBe('ba-si-co');
})

test('blando', () => {
  expect(f.divideWord('blando')).toBe('blan-do');
})

test('bottiglia', () => {
  expect(f.divideWord('bottiglia')).toBe('bot-ti-glia');
})


test('buoi', () => {
  expect(f.divideWord('buoi')).toBe('buoi');
})

test('cane', () => {
  expect(f.divideWord('cane')).toBe('ca-ne');
})

test('cassa', () => {
  expect(f.divideWord('cassa')).toBe('cas-sa');
})

test('ciotola', () => {
  expect(f.divideWord('ciotola')).toBe('cio-to-la');
})

test('cloruro', () => {
  expect(f.divideWord('cloruro')).toBe('clo-ru-ro');
})

test('completare', () => {
  expect(f.divideWord('completare')).toBe('com-ple-ta-re');
})

test('contropropongono', () => {
  expect(f.divideWord('contropropongono')).toBe('con-tro-pro-pon-go-no');
})

test('convoluzione', () => {
  expect(f.divideWord('convoluzione')).toBe('con-vo-lu-zio-ne');
})

test('cooptazione', () => {
  expect(f.divideWord('cooptazione')).toBe('co-op-ta-zio-ne');
})

test('cuoiaio', () => {
  expect(f.divideWord('cuoiaio')).toBe('cuo-ia-io');
})

test('cuore', () => {
  expect(f.divideWord('cuore')).toBe('cuo-re');
})

test('dado', () => {
  expect(f.divideWord('dado')).toBe('da-do');
})

test('Diana', () => {
  expect(f.divideWord('Diana')).toBe('Dia-na');
})

test('dromedario', () => {
  expect(f.divideWord('dromedario')).toBe('dro-me-da-rio');
})

test('eco', () => {
  expect(f.divideWord('eco')).toBe('e-co');
})

test('eliocentrico', () => {
  expect(f.divideWord('eliocentrico')).toBe('e-lio-cen-tri-co');
})

test('escursione', () => {
  expect(f.divideWord('escursione')).toBe('e-scur-sio-ne');
})

test('europeo', () => {
  expect(f.divideWord('europeo')).toBe('eu-ro-pe-o');
})


test('finestra', () => {
  expect(f.divideWord('finestra')).toBe('fi-ne-stra');
})

test('fiore', () => {
  expect(f.divideWord('fiore')).toBe('fio-re');
})

test('fluttuai', () => {
  expect(f.divideWord('fluttuai')).toBe('flut-tuai');
})


test('foglia', () => {
  expect(f.divideWord('foglia')).toBe('fo-glia');
})


test('frustrato', () => {
  expect(f.divideWord('frustrato')).toBe('fru-stra-to');
})

test('galilea', () => {
  expect(f.divideWord('galilea')).toBe('ga-li-le-a');
})

test('gaudente', () => {
  expect(f.divideWord('gaudente')).toBe('gau-den-te');
})

test('gaudio', () => {
  expect(f.divideWord('gaudio')).toBe('gau-dio');
})

test('genuflesso', () => {
  expect(f.divideWord('genuflesso')).toBe('ge-nu-fles-so');
})

test('geoide', () => {
  expect(f.divideWord('geoide')).toBe('ge-oi-de');
})

test('giro', () => {
  expect(f.divideWord('giro')).toBe('gi-ro');
})

test('glorioso', () => {
  expect(f.divideWord('glorioso')).toBe('glo-rio-so');
})

test('gnomo', () => {
  expect(f.divideWord('gnomo')).toBe('gno-mo');
})

test('granchio', () => {
  expect(f.divideWord('granchio')).toBe('gran-chio');
})

test('grandissimo', () => {
  expect(f.divideWord('grandissimo')).toBe('gran-dis-si-mo');
})

test('guai', () => {
  expect(f.divideWord('guai')).toBe('guai');
})

test('idilliaco', () => {
  expect(f.divideWord('idilliaco')).toBe('i-dil-lia-co');
})

test('imperscrutabile', () => {
  expect(f.divideWord('imperscrutabile')).toBe('im-per-scru-ta-bi-le');
})

test('infiltrato', () => {
  expect(f.divideWord('infiltrato')).toBe('in-fil-tra-to');
})

test('intransigente', () => {
  expect(f.divideWord('intransigente')).toBe('in-tran-si-gen-te');
})

test('ittico', () => {
  expect(f.divideWord('ittico')).toBe('it-ti-co');
})

test('lana', () => {
  expect(f.divideWord('lana')).toBe('la-na');
})

test('leone', () => {
  expect(f.divideWord('leone')).toBe('le-o-ne');
})

test('listino', () => {
  expect(f.divideWord('listino')).toBe('li-sti-no');
})

test('luglio', () => {
  expect(f.divideWord('luglio')).toBe('lu-glio');
})

test('maestro', () => {
  expect(f.divideWord('maestro')).toBe('ma-e-stro');
})

test('mano', () => {
  expect(f.divideWord('mano')).toBe('ma-no');
})

test('meandro', () => {
  expect(f.divideWord('meandro')).toBe('me-an-dro');
})

test('meriggio', () => {
  expect(f.divideWord('meriggio')).toBe('me-rig-gio');
})

test('miasma', () => {
  expect(f.divideWord('miasma')).toBe('mi-a-sma');
})


test('mosaico', () => {
  expect(f.divideWord('mosaico')).toBe('mo-sai-co');
})

test('mostruoso', () => {
  expect(f.divideWord('mostruoso')).toBe('mo-struo-so');
})


test('mutuai', () => {
  expect(f.divideWord('mutuai')).toBe('mu-tuai');
})

test('niente', () => {
  expect(f.divideWord('niente')).toBe('nien-te');
})

test('ninnananna', () => {
  expect(f.divideWord('ninnananna')).toBe('nin-na-nan-na');
})

test('oltranzista', () => {
  expect(f.divideWord('oltranzista')).toBe('ol-tran-zi-sta');
})

test('ombrellone', () => {
  expect(f.divideWord('ombrellone')).toBe('om-brel-lo-ne');
})

test('ora', () => {
  expect(f.divideWord('ora')).toBe('o-ra');
})

test('paese', () => {
  expect(f.divideWord('paese')).toBe('pa-e-se');
})

test('palmare', () => {
  expect(f.divideWord('palmare')).toBe('pal-ma-re');
})

test('perifrastico', () => {
  expect(f.divideWord('perifrastico')).toBe('pe-ri-fra-sti-co');
})

test('pianura', () => {
  expect(f.divideWord('pianura')).toBe('pia-nu-ra');
})

test('piove', () => {
  expect(f.divideWord('piove')).toBe('pio-ve');
})

test('pleonasmo', () => {
  expect(f.divideWord('pleonasmo')).toBe('ple-o-na-smo');
})

test('poliedrico', () => {
  expect(f.divideWord('poliedrico')).toBe('po-lie-dri-co');
})

test('sanscrito', () => {
  expect(f.divideWord('sanscrito')).toBe('san-scri-to');
})

test('scienza', () => {
  expect(f.divideWord('scienza')).toBe('scien-za');
})

test('schiocchio', () => {
  expect(f.divideWord('schiocchio')).toBe('schioc-chio');
})

test('schiocchiare', () => {
  expect(f.divideWord('schiocchiare')).toBe('schioc-chia-re');
})

test('scia', () => {
  expect(f.divideWord('scia')).toBe('scia');
})

test('sciame', () => {
  expect(f.divideWord('sciame')).toBe('scia-me');
})

test('sciare', () => {
  expect(f.divideWord('sciare')).toBe('sci-a-re');
})

test('sciatore', () => {
  expect(f.divideWord('sciatore')).toBe('sci-a-to-re');
})

test('scroto', () => {
  expect(f.divideWord('scroto')).toBe('scro-to');
})

test('sdrumato', () => {
  expect(f.divideWord('sdrumato')).toBe('sdru-ma-to');
})

test('sempre', () => {
  expect(f.divideWord('sempre')).toBe('sem-pre');
})

test('sequoia', () => {
  expect(f.divideWord('sequoia')).toBe('se-quo-ia');
})

test('sincrotrasformatori', () => {
  expect(f.divideWord('sincrotrasformatori')).toBe('sin-cro-tra-sfor-ma-to-ri');
})

test('soavemente', () => {
  expect(f.divideWord('soavemente')).toBe('so-a-ve-men-te');
})

test('soppressata', () => {
  expect(f.divideWord('soppressata')).toBe('sop-pres-sa-ta');
})

test('sorpresa', () => {
  expect(f.divideWord('sorpresa')).toBe('sor-pre-sa');
})

test('spiaggia', () => {
  expect(f.divideWord('spiaggia')).toBe('spiag-gia');
})

test('strozzare', () => {
  expect(f.divideWord('strozzare')).toBe('stroz-za-re');
})

test('stuoiaio', () => {
  expect(f.divideWord('stuoiaio')).toBe('stuo-ia-io');
})

test('subacqueo', () => {
  expect(f.divideWord('subacqueo')).toBe('su-bac-que-o');
})

test('substrato', () => {
  expect(f.divideWord('substrato')).toBe('sub-stra-to');
})

test('superstrada', () => {
  expect(f.divideWord('superstrada')).toBe('su-per-stra-da');
})

test('teologo', () => {
  expect(f.divideWord('teologo')).toBe('te-o-lo-go');
})

test('tranquillo', () => {
  expect(f.divideWord('tranquillo')).toBe('tran-quil-lo');
})

test('transatlantico', () => {
  expect(f.divideWord('transatlantico')).toBe('tran-sa-tlan-ti-co');
})

test('troiaio', () => {
  expect(f.divideWord('troiaio')).toBe('tro-ia-io');
})

test('tungsteno', () => {
  expect(f.divideWord('tungsteno')).toBe('tung-ste-no');
})

test('tuoi', () => {
  expect(f.divideWord('tuoi')).toBe('tuoi');
})

test('zona', () => {
  expect(f.divideWord('zona')).toBe('zo-na');
})

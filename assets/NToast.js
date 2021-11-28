 /*
 *
 * NToast
 * by nodo-shanidze [nodo-shanidze@mail.ru & shanidzenodo0@gmail.com]
 * ceated at 11/26/2021
 * version (v0.1.5) 11/26/2021 Created
 * version (v0.1.6) 11/28/2021 Updated (optimized code, add functions: costum autoclose time, add blur effect, fix bugs safari browser)
 *
*/
var _0x448810 = _0x5704;
(function(_0x245c9a, _0x325cb2) {
        var _0x4451a9 = _0x5704,
                _0x2e52c0 = _0x245c9a();
        while (!![]) {
                try {
                        var _0x36913c = -parseInt(_0x4451a9(0x1d3)) / 0x1 + -parseInt(_0x4451a9(0x1c9)) / 0x2 + -parseInt(_0x4451a9(0x1e7)) / 0x3 * (
                                        parseInt(_0x4451a9(0x1ec)) / 0x4) + parseInt(_0x4451a9(0x1ce)) / 0x5 * (parseInt(_0x4451a9(0x1c7)) / 0x6) + -
                                parseInt(_0x4451a9(0x1e3)) / 0x7 + -parseInt(_0x4451a9(0x1c2)) / 0x8 + parseInt(_0x4451a9(0x1b7)) / 0x9;
                        if (_0x36913c === _0x325cb2) break;
                        else _0x2e52c0['push'](_0x2e52c0['shift']());
                }
                catch (_0x50ab47) {
                        _0x2e52c0['push'](_0x2e52c0['shift']());
                }
        }
}(_0x4d53, 0xe6164));
let id = 0x0,
        closeTime = 0x64,
        c = 0x0;
var NToastLoaded = document[_0x448810(0x1d5)](_0x448810(0x1e8));

function _0x5704(_0x4630af, _0x2a54b1) {
        var _0x4d53cc = _0x4d53();
        return _0x5704 = function(_0x5704ed, _0x3dfc29) {
                _0x5704ed = _0x5704ed - 0x1b6;
                var _0x41470c = _0x4d53cc[_0x5704ed];
                return _0x41470c;
        }, _0x5704(_0x4630af, _0x2a54b1);
}

function _0x4d53() {
        var _0x20a6b6 = ['createElement', '#Not-1', '\x27>\x20x\x20</span>\x20\x20\x20\x20', 'fa\x20fa-check', 'filter', 'replace', 'webkitFilter', 'topright',
                '.NToastJs-loaded', 'Not-', 'withouticon', 'getElementsByClassName', 'click', 'BottomRight', '4269419YQCpOx', 'NToastJs', 'classList',
                'length', '3ZvcSYW', 'div', 'NToastJs-loaded', 'innerWidth', 'TopRight', '2678968bBkBTd', '#Not-', '44149869vmKNhZ', 'BottomLeft',
                '</span>\x20</div>\x20\x20\x20\x20<span\x20class=\x27NToastJs-close\x27\x20id=\x27n-', 'appendChild', 'bottomright', 'NToastJs-text',
                '.NToastJs-progress', 'innerHTML', 'body', 'remove', 'attr', '10200352oXgNRM', 'log', 'setAttribute',
                'drop-shadow(0.5px\x200px\x202px\x20', 'setInterval', '6pmoqFV', 'clearInterval', '372944fnDKxI', 'add', 'css', 'blur',
                '\x20\x20\x20\x20', '3245930txVCli', 'style',
                '\x20\x20\x20\x20<div\x20class=\x27NToastJs-container\x27>\x20<span\x20class=\x27NToastJs-text\x27>', 'auto',
                'drop-shadow(0px\x200px\x200px\x20', '1871116Iwfnhb', '<div\x20class=\x27NToastJs-progress\x27\x20id=\x27progress-'
        ];
        _0x4d53 = function() {
                return _0x20a6b6;
        };
        return _0x4d53();
}
NToastLoaded[_0x448810(0x1e5)][_0x448810(0x1ca)]('NToastJs-loaded'), document[_0x448810(0x1bf)][_0x448810(0x1ba)](NToastLoaded);

function NToast(_0x5e750b, _0xc16f6a, _0x3a4eda, _0x4ed38c, _0x42ff86, _0x847073, _0x152815) {
        var _0x5b3bf5 = _0x448810;
        !_0x152815 && (_0x152815 = 0x7d);
        window[_0x5b3bf5(0x1ea)] >= 0x1f4 && (_0x5b3bf5(0x1dc) != _0xc16f6a && _0x5b3bf5(0x1eb) != _0xc16f6a && 'tr' != _0xc16f6a && 'TR' != _0xc16f6a || $(
                _0x5b3bf5(0x1dd))[_0x5b3bf5(0x1cb)]({
                'left': 'auto',
                'top': '0',
                'right': '0',
                'bottom': _0x5b3bf5(0x1d1)
        }), 'topleft' != _0xc16f6a && 'TopLeft' != _0xc16f6a && 'tl' != _0xc16f6a && 'TL' != _0xc16f6a || $(_0x5b3bf5(0x1dd))[_0x5b3bf5(0x1cb)]
({
                'left': '0',
                'top': '0',
                'right': 'auto',
                'bottom': 'auto'
        }), _0x5b3bf5(0x1bb) != _0xc16f6a && _0x5b3bf5(0x1e2) != _0xc16f6a && 'br' != _0xc16f6a && 'BR' != _0xc16f6a || $('.NToastJs-loaded')[
                _0x5b3bf5(0x1cb)]({
                'left': _0x5b3bf5(0x1d1),
                'top': _0x5b3bf5(0x1d1),
                'right': '0',
                'bottom': '0'
        }), 'bottomleft' != _0xc16f6a && _0x5b3bf5(0x1b8) != _0xc16f6a && 'bl' != _0xc16f6a && 'BL' != _0xc16f6a || $(_0x5b3bf5(0x1dd))['css']({
                'left': '0',
                'top': _0x5b3bf5(0x1d1),
                'right': _0x5b3bf5(0x1d1),
                'bottom': '0'
        }));
        if (_0x3a4eda[_0x5b3bf5(0x1e6)] >= 0x2e) return console[_0x5b3bf5(0x1c3)](
                'NToastJS\x20-\x20error!\x20the\x20description\x20should\x20not\x20exceed\x2045\x20characters'), ![];
        if (_0x3a4eda[_0x5b3bf5(0x1e6)] >= 0x1) {
                var _0x194a24;
                if (_0x4ed38c == !![]) var _0x194a24 = '<span\x20class=\x27NToastJs-icon\x27><i\x20class=\x27fa\x20fa-check\x27></i></span>';
                else _0x194a24 = '';
                _0x42ff86[_0x5b3bf5(0x1e6)] >= 0x2 && (_0x194a24 = _0x194a24[_0x5b3bf5(0x1da)](_0x5b3bf5(0x1d8), _0x42ff86)), _0x847073 ? progress = _0x5b3bf5(
                        0x1d4) + id + '\x27></div>' : progress = '', id++;
                var _0x355e83 = document['createElement'](_0x5b3bf5(0x1e8));
                _0x355e83[_0x5b3bf5(0x1e5)][_0x5b3bf5(0x1ca)](_0x5b3bf5(0x1e4)), _0x355e83[_0x5b3bf5(0x1c4)]('id', _0x5b3bf5(0x1de) + id), _0x355e83[_0x5b3bf5(
                        0x1cf)]['backgroundImage'] = 'linear-gradient(' + _0x5e750b + ',' + _0x5e750b + ')';
                _0x5e750b['indexOf'](_0x5b3bf5(0x1cc)) != -0x1 ? (_0x355e83['style'][_0x5b3bf5(0x1d9)] = _0x5b3bf5(0x1c5) + _0x5e750b[_0x5b3bf5(0x1da)](
                                _0x5b3bf5(0x1cc), '') + ')\x20', _0x355e83['style'][_0x5b3bf5(0x1db)] = 'drop-shadow(0.5px\x200px\x202px\x20' +
                        _0x5e750b[_0x5b3bf5(0x1da)](_0x5b3bf5(0x1cc), '') + ')\x20') : (_0x355e83[_0x5b3bf5(0x1cf)][_0x5b3bf5(0x1d9)] =
                        'drop-shadow(0px\x200px\x200px\x20' + _0x5e750b + ')\x20', _0x355e83['style'][_0x5b3bf5(0x1db)] = _0x5b3bf5(0x1d2) + _0x5e750b +
                        ')\x20');
                _0x355e83[_0x5b3bf5(0x1be)] = _0x5b3bf5(0x1cd) + _0x194a24 + _0x5b3bf5(0x1d0) + _0x3a4eda + _0x5b3bf5(0x1b9) + id + _0x5b3bf5(0x1d7) +
                        progress + '', document[_0x5b3bf5(0x1e0)](_0x5b3bf5(0x1e9))[0x0]['appendChild'](_0x355e83), closeTime = 0x64;
                _0x194a24 == '' && document[_0x5b3bf5(0x1e0)](_0x5b3bf5(0x1bc))[0x0][_0x5b3bf5(0x1e5)][_0x5b3bf5(0x1ca)](_0x5b3bf5(0x1df));
                $('.NToastJs-close')[_0x5b3bf5(0x1e1)](function() {
                        var _0x130ec8 = _0x5b3bf5;
                        $(_0x130ec8(0x1b6) + $(this)[_0x130ec8(0x1c1)]('id')[_0x130ec8(0x1da)]('n-', ''))[_0x130ec8(0x1c0)]();
                }), c = _0x5fc696();
                _0x847073 ? setInterval(function() {
                        var _0x4a4d95 = _0x5b3bf5;
                        closeTime > 0x0 && (closeTime--, $(_0x4a4d95(0x1bd))[_0x4a4d95(0x1cb)]({
                                'width': closeTime + '%'
                        })), closeTime == 0x0 && ($(_0x4a4d95(0x1b6) + c)[_0x4a4d95(0x1c0)](), c--, c <= 0x1 && (c = _0x5fc696(), id =
                                0x0, _0x35b501(), $(_0x4a4d95(0x1d6)) && $(_0x4a4d95(0x1d6))[_0x4a4d95(0x1c0)]()));
                }, id * _0x152815) : setInterval(function() {
                        var _0x100c9b = _0x5b3bf5;
                        $(_0x100c9b(0x1b6) + c)[_0x100c9b(0x1c0)](), c--, c == 0x0 && _0x35b501();
                }, c * _0x152815);
                _0x5fc696();

                function _0x5fc696() {
                        return x = id - -0x4, x;
                }

                function _0x35b501() {
                        var _0x80715f = _0x5b3bf5,
                                _0x3a2d4a = window[_0x80715f(0x1c6)](() => {}, 0x1869f);
                        for (var _0x1e9a76 = 0x0; _0x1e9a76 < _0x3a2d4a; _0x1e9a76++) window[_0x80715f(0x1c8)](_0x1e9a76);
                }
        }
}

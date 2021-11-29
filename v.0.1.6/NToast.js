/*
*
* NToast
* version (v0.1.6)  
*
*/ 
var _0x4c55cb = _0x47a2;
(function(_0x4a7b3b, _0x13f051) {
        var _0x3ed177 = _0x47a2,
                _0xc17734 = _0x4a7b3b();
        while (!![]) {
                try {
                        var _0x1c6f10 = -parseInt(_0x3ed177(0x1c2)) / 0x1 * (parseInt(_0x3ed177(0x18d)) / 0x2) + -parseInt(_0x3ed177(0x1a4)) / 0x3 + -
                                parseInt(_0x3ed177(0x1a3)) / 0x4 + parseInt(_0x3ed177(0x1ad)) / 0x5 * (-parseInt(_0x3ed177(0x194)) / 0x6) + -parseInt(
                                        _0x3ed177(0x19b)) / 0x7 * (parseInt(_0x3ed177(0x19f)) / 0x8) + -parseInt(_0x3ed177(0x1b5)) / 0x9 * (-parseInt(
                                        _0x3ed177(0x1a1)) / 0xa) + -parseInt(_0x3ed177(0x1bc)) / 0xb * (-parseInt(_0x3ed177(0x19c)) / 0xc);
                        if (_0x1c6f10 === _0x13f051) break;
                        else _0xc17734['push'](_0xc17734['shift']());
                }
                catch (_0x3770d8) {
                        _0xc17734['push'](_0xc17734['shift']());
                }
        }
}(_0x4d97, 0xc4122));

function _0x47a2(_0x599be1, _0x376350) {
        var _0x4d97a7 = _0x4d97();
        return _0x47a2 = function(_0x47a21e, _0x101375) {
                _0x47a21e = _0x47a21e - 0x18d;
                var _0x28f1aa = _0x4d97a7[_0x47a21e];
                return _0x28f1aa;
        }, _0x47a2(_0x599be1, _0x376350);
}
let id = 0x0,
        closeTime = 0x64,
        c = 0x0;
var NToastLoaded = document[_0x4c55cb(0x19e)]('div');
NToastLoaded[_0x4c55cb(0x1af)][_0x4c55cb(0x1c1)](_0x4c55cb(0x1c5)), document[_0x4c55cb(0x1b2)][_0x4c55cb(0x1ab)](NToastLoaded);

function NToast(_0x6eb62a, _0x50e617, _0x26d465, _0xf58edf, _0x177635, _0x29d3fd, _0x534867) {
        var _0x547afa = _0x4c55cb;
        !_0x534867 && (_0x534867 = 0x7d);
        window[_0x547afa(0x1c6)] >= 0x1f4 && (_0x547afa(0x1b7) != _0x50e617 && _0x547afa(0x1bd) != _0x50e617 && 'tr' != _0x50e617 && 'TR' != _0x50e617 || $(
                _0x547afa(0x1a7))['css']({
                'left': _0x547afa(0x1c4),
                'top': '0',
                'right': '0',
                'bottom': 'auto'
        }), _0x547afa(0x199) != _0x50e617 && _0x547afa(0x1bb) != _0x50e617 && 'tl' != _0x50e617 && 'TL' != _0x50e617 || $(_0x547afa(0x1a7))[
                _0x547afa(0x190)]({
                'left': '0',
                'top': '0',
                'right': 'auto',
                'bottom': _0x547afa(0x1c4)
        }), _0x547afa(0x1ae) != _0x50e617 && _0x547afa(0x1b0) != _0x50e617 && 'br' != _0x50e617 && 'BR' != _0x50e617 || $(_0x547afa(0x1a7))[
                _0x547afa(0x190)]({
                'left': 'auto',
                'top': _0x547afa(0x1c4),
                'right': '0',
                'bottom': '0'
        }), _0x547afa(0x1bf) != _0x50e617 && _0x547afa(0x1b4) != _0x50e617 && 'bl' != _0x50e617 && 'BL' != _0x50e617 || $(_0x547afa(0x1a7))[
                _0x547afa(0x190)]({
                'left': '0',
                'top': _0x547afa(0x1c4),
                'right': 'auto',
                'bottom': '0'
        }));
        if (_0x26d465[_0x547afa(0x1ac)] >= 0x2e) return console[_0x547afa(0x191)](_0x547afa(0x193)), ![];
        if (_0x26d465['length'] >= 0x1) {
                var _0x4254c4;
                _0xf58edf == !![] ? _0x4254c4 = _0x547afa(0x1a0) : _0x4254c4 = '';
                (_0x29d3fd !== ![] || _0x29d3fd !== !![]) && (_0x29d3fd = !![]);
                _0x177635['length'] >= 0x2 && (_0x4254c4 = _0x4254c4[_0x547afa(0x1be)]('fa\x20fa-check', _0x177635)), _0x29d3fd ? progress = _0x547afa(0x18f) +
                        id + '\x27></div>' : progress = '', id++;
                var _0x351b0d = document['createElement']('div');
                _0x351b0d['classList'][_0x547afa(0x1c1)]('NToastJs'), _0x351b0d[_0x547afa(0x196)]('id', _0x547afa(0x19d) + id), _0x351b0d[_0x547afa(0x1b1)][
                        'backgroundImage'
                ] = _0x547afa(0x198) + _0x6eb62a + ',' + _0x6eb62a + ')';
                _0x6eb62a[_0x547afa(0x195)]('blur') != -0x1 ? (_0x351b0d[_0x547afa(0x1b1)][_0x547afa(0x19a)] = _0x547afa(0x1a5) + _0x6eb62a['replace']('blur',
                        '') + ')\x20', _0x351b0d[_0x547afa(0x1b1)]['webkitFilter'] = 'drop-shadow(0.5px\x200px\x202px\x20' + _0x6eb62a[
                        _0x547afa(0x1be)]('blur', '') + ')\x20') : (_0x351b0d[_0x547afa(0x1b1)][_0x547afa(0x19a)] =
                        'drop-shadow(0px\x200px\x200px\x20' + _0x6eb62a + ')\x20', _0x351b0d[_0x547afa(0x1b1)][_0x547afa(0x1b3)] = _0x547afa(0x1c0) +
                        _0x6eb62a + ')\x20');
                _0x351b0d['innerHTML'] = _0x547afa(0x1c3) + _0x4254c4 +
                        '\x20\x20\x20\x20<div\x20class=\x27NToastJs-container\x27>\x20<span\x20class=\x27NToastJs-text\x27>' + _0x26d465 + _0x547afa(0x1aa) +
                        id + _0x547afa(0x1ba) + progress + '', document['getElementsByClassName'](_0x547afa(0x1c5))[0x0][_0x547afa(0x1ab)](_0x351b0d),
                        closeTime = 0x64;
                _0x4254c4 == '' && document[_0x547afa(0x18e)](_0x547afa(0x197))[0x0]['classList']['add'](_0x547afa(0x192));
                $(_0x547afa(0x1b6))[_0x547afa(0x1a8)](function() {
                        var _0x94f805 = _0x547afa;
                        $(_0x94f805(0x1a2) + $(this)['attr']('id')[_0x94f805(0x1be)]('n-', ''))[_0x94f805(0x1a6)]();
                }), c = _0xe4fa4a();
                _0x29d3fd ? setInterval(function() {
                        var _0x29547c = _0x547afa;
                        closeTime > 0x0 && (closeTime--, $(_0x29547c(0x1b8))[_0x29547c(0x190)]({
                                'width': closeTime + '%'
                        })), closeTime == 0x0 && ($(_0x29547c(0x1a2) + c)[_0x29547c(0x1a6)](), c--, c <= 0x1 && (c = _0xe4fa4a(), id =
                                0x0, _0x4f286b(), $('#Not-1') && $('#Not-1')['remove']()));
                }, id * _0x534867) : setInterval(function() {
                        var _0x128feb = _0x547afa;
                        $(_0x128feb(0x1a2) + c)['remove'](), c--, c == 0x0 && _0x4f286b();
                }, c * _0x534867);
                _0xe4fa4a();

                function _0xe4fa4a() {
                        return x = id - -0x4, x;
                }

                function _0x4f286b() {
                        var _0x41bf59 = _0x547afa,
                                _0x40166c = window[_0x41bf59(0x1b9)](() => {}, 0x1869f);
                        for (var _0x1ad692 = 0x0; _0x1ad692 < _0x40166c; _0x1ad692++) window[_0x41bf59(0x1a9)](_0x1ad692);
                }
        }
}

function _0x4d97() {
        var _0x222f0b = ['.NToastJs-progress', 'setInterval', '\x27>\x20x\x20</span>\x20\x20\x20\x20', 'TopLeft', '1415601KPfnEC', 'TopRight', 'replace',
                'bottomleft', 'drop-shadow(0px\x200px\x200px\x20', 'add', '329561WhVFil', '\x20\x20\x20\x20', 'auto', 'NToastJs-loaded', 'innerWidth',
                '2TZZrfh', 'getElementsByClassName', '<div\x20class=\x27NToastJs-progress\x27\x20id=\x27progress-', 'css', 'log', 'withouticon',
                'NToastJS\x20-\x20error!\x20the\x20description\x20should\x20not\x20exceed\x2045\x20characters', '4866pfAOFf', 'indexOf', 'setAttribute',
                'NToastJs-text', 'linear-gradient(', 'topleft', 'filter', '3510304TNlbNc', '528TFYyzF', 'Not-', 'createElement', '8mHkIcO',
                '<span\x20class=\x27NToastJs-icon\x27><i\x20class=\x27fa\x20fa-check\x27></i></span>', '125280BTITHO', '#Not-', '4671772DmrOPs',
                '4706865chKAFZ', 'drop-shadow(0.5px\x200px\x202px\x20', 'remove', '.NToastJs-loaded', 'click', 'clearInterval',
                '</span>\x20</div>\x20\x20\x20\x20<span\x20class=\x27NToastJs-close\x27\x20id=\x27n-', 'appendChild', 'length', '8425XIaLzb',
                'bottomright', 'classList', 'BottomRight', 'style', 'body', 'webkitFilter', 'BottomLeft', '54DEFrXy', '.NToastJs-close', 'topright'
        ];
        _0x4d97 = function() {
                return _0x222f0b;
        };
        return _0x4d97();
}
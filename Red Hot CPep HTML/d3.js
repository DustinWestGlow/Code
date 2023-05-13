// https://d3js.org v7.8.4 Copyright 2010-2023 Mike Bostock
!function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = "undefined" != typeof globalThis ? globalThis : t || self).d3 = t.d3 || {})
}(this, (function(t) {
    "use strict";
    function n(t, n) {
        return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function e(t, n) {
        return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }
    function r(t) {
        let r, o, a;
        function u(t, n, e=0, i=t.length) {
            if (e < i) {
                if (0 !== r(n, n))
                    return i;
                do {
                    const r = e + i >>> 1;
                    o(t[r], n) < 0 ? e = r + 1 : i = r
                } while (e < i)
            }
            return e
        }
        return 2 !== t.length ? (r = n,
        o = (e,r)=>n(t(e), r),
        a = (n,e)=>t(n) - e) : (r = t === n || t === e ? t : i,
        o = t,
        a = t),
        {
            left: u,
            center: function(t, n, e=0, r=t.length) {
                const i = u(t, n, e, r - 1);
                return i > e && a(t[i - 1], n) > -a(t[i], n) ? i - 1 : i
            },
            right: function(t, n, e=0, i=t.length) {
                if (e < i) {
                    if (0 !== r(n, n))
                        return i;
                    do {
                        const r = e + i >>> 1;
                        o(t[r], n) <= 0 ? e = r + 1 : i = r
                    } while (e < i)
                }
                return e
            }
        }
    }
    function i() {
        return 0
    }
    function o(t) {
        return null === t ? NaN : +t
    }
    function *a(t, n) {
        if (void 0 === n)
            for (let n of t)
                null != n && (n = +n) >= n && (yield n);
        else {
            let e = -1;
            for (let r of t)
                null != (r = n(r, ++e, t)) && (r = +r) >= r && (yield r)
        }
    }
    const u = r(n)
      , c = u.right
      , f = u.left
      , s = r(o).center;
    var l = c;
    const h = p(v)
      , d = p((function(t) {
        const n = v(t);
        return (t,e,r,i,o)=>{
            n(t, e, (r <<= 2) + 0, (i <<= 2) + 0, o <<= 2),
            n(t, e, r + 1, i + 1, o),
            n(t, e, r + 2, i + 2, o),
            n(t, e, r + 3, i + 3, o)
        }
    }
    ));
    function p(t) {
        return function(n, e, r=e) {
            if (!((e = +e) >= 0))
                throw new RangeError("invalid rx");
            if (!((r = +r) >= 0))
                throw new RangeError("invalid ry");
            let {data: i, width: o, height: a} = n;
            if (!((o = Math.floor(o)) >= 0))
                throw new RangeError("invalid width");
            if (!((a = Math.floor(void 0 !== a ? a : i.length / o)) >= 0))
                throw new RangeError("invalid height");
            if (!o || !a || !e && !r)
                return n;
            const u = e && t(e)
              , c = r && t(r)
              , f = i.slice();
            return u && c ? (g(u, f, i, o, a),
            g(u, i, f, o, a),
            g(u, f, i, o, a),
            y(c, i, f, o, a),
            y(c, f, i, o, a),
            y(c, i, f, o, a)) : u ? (g(u, i, f, o, a),
            g(u, f, i, o, a),
            g(u, i, f, o, a)) : c && (y(c, i, f, o, a),
            y(c, f, i, o, a),
            y(c, i, f, o, a)),
            n
        }
    }
    function g(t, n, e, r, i) {
        for (let o = 0, a = r * i; o < a; )
            t(n, e, o, o += r, 1)
    }
    function y(t, n, e, r, i) {
        for (let o = 0, a = r * i; o < r; ++o)
            t(n, e, o, o + a, r)
    }
    function v(t) {
        const n = Math.floor(t);
        if (n === t)
            return function(t) {
                const n = 2 * t + 1;
                return (e,r,i,o,a)=>{
                    if (!((o -= a) >= i))
                        return;
                    let u = t * r[i];
                    const c = a * t;
                    for (let t = i, n = i + c; t < n; t += a)
                        u += r[Math.min(o, t)];
                    for (let t = i, f = o; t <= f; t += a)
                        u += r[Math.min(o, t + c)],
                        e[t] = u / n,
                        u -= r[Math.max(i, t - c)]
                }
            }(t);
        const e = t - n
          , r = 2 * t + 1;
        return (t,i,o,a,u)=>{
            if (!((a -= u) >= o))
                return;
            let c = n * i[o];
            const f = u * n
              , s = f + u;
            for (let t = o, n = o + f; t < n; t += u)
                c += i[Math.min(a, t)];
            for (let n = o, l = a; n <= l; n += u)
                c += i[Math.min(a, n + f)],
                t[n] = (c + e * (i[Math.max(o, n - s)] + i[Math.min(a, n + s)])) / r,
                c -= i[Math.max(o, n - f)]
        }
    }
    function _(t, n) {
        let e = 0;
        if (void 0 === n)
            for (let n of t)
                null != n && (n = +n) >= n && ++e;
        else {
            let r = -1;
            for (let i of t)
                null != (i = n(i, ++r, t)) && (i = +i) >= i && ++e
        }
        return e
    }
    function b(t) {
        return 0 | t.length
    }
    function m(t) {
        return !(t > 0)
    }
    function x(t) {
        return "object" != typeof t || "length"in t ? t : Array.from(t)
    }
    function w(t, n) {
        let e, r = 0, i = 0, o = 0;
        if (void 0 === n)
            for (let n of t)
                null != n && (n = +n) >= n && (e = n - i,
                i += e / ++r,
                o += e * (n - i));
        else {
            let a = -1;
            for (let u of t)
                null != (u = n(u, ++a, t)) && (u = +u) >= u && (e = u - i,
                i += e / ++r,
                o += e * (u - i))
        }
        if (r > 1)
            return o / (r - 1)
    }
    function M(t, n) {
        const e = w(t, n);
        return e ? Math.sqrt(e) : e
    }
    function T(t, n) {
        let e, r;
        if (void 0 === n)
            for (const n of t)
                null != n && (void 0 === e ? n >= n && (e = r = n) : (e > n && (e = n),
                r < n && (r = n)));
        else {
            let i = -1;
            for (let o of t)
                null != (o = n(o, ++i, t)) && (void 0 === e ? o >= o && (e = r = o) : (e > o && (e = o),
                r < o && (r = o)))
        }
        return [e, r]
    }
    class A {
        constructor() {
            this._partials = new Float64Array(32),
            this._n = 0
        }
        add(t) {
            const n = this._partials;
            let e = 0;
            for (let r = 0; r < this._n && r < 32; r++) {
                const i = n[r]
                  , o = t + i
                  , a = Math.abs(t) < Math.abs(i) ? t - (o - i) : i - (o - t);
                a && (n[e++] = a),
                t = o
            }
            return n[e] = t,
            this._n = e + 1,
            this
        }
        valueOf() {
            const t = this._partials;
            let n, e, r, i = this._n, o = 0;
            if (i > 0) {
                for (o = t[--i]; i > 0 && (n = o,
                e = t[--i],
                o = n + e,
                r = e - (o - n),
                !r); )
                    ;
                i > 0 && (r < 0 && t[i - 1] < 0 || r > 0 && t[i - 1] > 0) && (e = 2 * r,
                n = o + e,
                e == n - o && (o = n))
            }
            return o
        }
    }
    class InternMap extends Map {
        constructor(t, n=k) {
            if (super(),
            Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: n
                }
            }),
            null != t)
                for (const [n,e] of t)
                    this.set(n, e)
        }
        get(t) {
            return super.get(S(this, t))
        }
        has(t) {
            return super.has(S(this, t))
        }
        set(t, n) {
            return super.set(E(this, t), n)
        }
        delete(t) {
            return super.delete(N(this, t))
        }
    }
    class InternSet extends Set {
        constructor(t, n=k) {
            if (super(),
            Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: n
                }
            }),
            null != t)
                for (const n of t)
                    this.add(n)
        }
        has(t) {
            return super.has(S(this, t))
        }
        add(t) {
            return super.add(E(this, t))
        }
        delete(t) {
            return super.delete(N(this, t))
        }
    }
    function S({_intern: t, _key: n}, e) {
        const r = n(e);
        return t.has(r) ? t.get(r) : e
    }
    function E({_intern: t, _key: n}, e) {
        const r = n(e);
        return t.has(r) ? t.get(r) : (t.set(r, e),
        e)
    }
    function N({_intern: t, _key: n}, e) {
        const r = n(e);
        return t.has(r) && (e = t.get(r),
        t.delete(r)),
        e
    }
    function k(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t
    }
    function C(t) {
        return t
    }
    function P(t, ...n) {
        return q(t, C, C, n)
    }
    function z(t, ...n) {
        return q(t, Array.from, C, n)
    }
    function $(t, n) {
        for (let e = 1, r = n.length; e < r; ++e)
            t = t.flatMap((t=>t.pop().map((([n,e])=>[...t, n, e]))));
        return t
    }
    function D(t, n, ...e) {
        return q(t, C, n, e)
    }
    function R(t, n, ...e) {
        return q(t, Array.from, n, e)
    }
    function F(t) {
        if (1 !== t.length)
            throw new Error("duplicate key");
        return t[0]
    }
    function q(t, n, e, r) {
        return function t(i, o) {
            if (o >= r.length)
                return e(i);
            const a = new InternMap
              , u = r[o++];
            let c = -1;
            for (const t of i) {
                const n = u(t, ++c, i)
                  , e = a.get(n);
                e ? e.push(t) : a.set(n, [t])
            }
            for (const [n,e] of a)
                a.set(n, t(e, o));
            return n(a)
        }(t, 0)
    }
    function U(t, n) {
        return Array.from(n, (n=>t[n]))
    }
    function I(t, ...n) {
        if ("function" != typeof t[Symbol.iterator])
            throw new TypeError("values is not iterable");
        t = Array.from(t);
        let[e] = n;
        if (e && 2 !== e.length || n.length > 1) {
            const r = Uint32Array.from(t, ((t,n)=>n));
            return n.length > 1 ? (n = n.map((n=>t.map(n))),
            r.sort(((t,e)=>{
                for (const r of n) {
                    const n = B(r[t], r[e]);
                    if (n)
                        return n
                }
            }
            ))) : (e = t.map(e),
            r.sort(((t,n)=>B(e[t], e[n])))),
            U(t, r)
        }
        return t.sort(O(e))
    }
    function O(t=n) {
        if (t === n)
            return B;
        if ("function" != typeof t)
            throw new TypeError("compare is not a function");
        return (n,e)=>{
            const r = t(n, e);
            return r || 0 === r ? r : (0 === t(e, e)) - (0 === t(n, n))
        }
    }
    function B(t, n) {
        return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0)
    }
    var Y = Array.prototype.slice;
    function L(t) {
        return ()=>t
    }
    const j = Math.sqrt(50)
      , H = Math.sqrt(10)
      , X = Math.sqrt(2);
    function G(t, n, e) {
        const r = (n - t) / Math.max(0, e)
          , i = Math.floor(Math.log10(r))
          , o = r / Math.pow(10, i)
          , a = o >= j ? 10 : o >= H ? 5 : o >= X ? 2 : 1;
        let u, c, f;
        return i < 0 ? (f = Math.pow(10, -i) / a,
        u = Math.round(t * f),
        c = Math.round(n * f),
        u / f < t && ++u,
        c / f > n && --c,
        f = -f) : (f = Math.pow(10, i) * a,
        u = Math.round(t / f),
        c = Math.round(n / f),
        u * f < t && ++u,
        c * f > n && --c),
        c < u && .5 <= e && e < 2 ? G(t, n, 2 * e) : [u, c, f]
    }
    function V(t, n, e) {
        if (!((e = +e) > 0))
            return [];
        if ((t = +t) === (n = +n))
            return [t];
        const r = n < t
          , [i,o,a] = r ? G(n, t, e) : G(t, n, e);
        if (!(o >= i))
            return [];
        const u = o - i + 1
          , c = new Array(u);
        if (r)
            if (a < 0)
                for (let t = 0; t < u; ++t)
                    c[t] = (o - t) / -a;
            else
                for (let t = 0; t < u; ++t)
                    c[t] = (o - t) * a;
        else if (a < 0)
            for (let t = 0; t < u; ++t)
                c[t] = (i + t) / -a;
        else
            for (let t = 0; t < u; ++t)
                c[t] = (i + t) * a;
        return c
    }
    function W(t, n, e) {
        return G(t = +t, n = +n, e = +e)[2]
    }
    function Z(t, n, e) {
        e = +e;
        const r = (n = +n) < (t = +t)
          , i = r ? W(n, t, e) : W(t, n, e);
        return (r ? -1 : 1) * (i < 0 ? 1 / -i : i)
    }
    function K(t, n, e) {
        let r;
        for (; ; ) {
            const i = W(t, n, e);
            if (i === r || 0 === i || !isFinite(i))
                return [t, n];
            i > 0 ? (t = Math.floor(t / i) * i,
            n = Math.ceil(n / i) * i) : i < 0 && (t = Math.ceil(t * i) / i,
            n = Math.floor(n * i) / i),
            r = i
        }
    }
    function Q(t) {
        return Math.max(1, Math.ceil(Math.log(_(t)) / Math.LN2) + 1)
    }
    function J() {
        var t = C
          , n = T
          , e = Q;
        function r(r) {
            Array.isArray(r) || (r = Array.from(r));
            var i, o, a, u = r.length, c = new Array(u);
            for (i = 0; i < u; ++i)
                c[i] = t(r[i], i, r);
            var f = n(c)
              , s = f[0]
              , h = f[1]
              , d = e(c, s, h);
            if (!Array.isArray(d)) {
                const t = h
                  , e = +d;
                if (n === T && ([s,h] = K(s, h, e)),
                (d = V(s, h, e))[0] <= s && (a = W(s, h, e)),
                d[d.length - 1] >= h)
                    if (t >= h && n === T) {
                        const t = W(s, h, e);
                        isFinite(t) && (t > 0 ? h = (Math.floor(h / t) + 1) * t : t < 0 && (h = (Math.ceil(h * -t) + 1) / -t))
                    } else
                        d.pop()
            }
            for (var p = d.length, g = 0, y = p; d[g] <= s; )
                ++g;
            for (; d[y - 1] > h; )
                --y;
            (g || y < p) && (d = d.slice(g, y),
            p = y - g);
            var v, _ = new Array(p + 1);
            for (i = 0; i <= p; ++i)
                (v = _[i] = []).x0 = i > 0 ? d[i - 1] : s,
                v.x1 = i < p ? d[i] : h;
            if (isFinite(a)) {
                if (a > 0)
                    for (i = 0; i < u; ++i)
                        null != (o = c[i]) && s <= o && o <= h && _[Math.min(p, Math.floor((o - s) / a))].push(r[i]);
                else if (a < 0)
                    for (i = 0; i < u; ++i)
                        if (null != (o = c[i]) && s <= o && o <= h) {
                            const t = Math.floor((s - o) * a);
                            _[Math.min(p, t + (d[t] <= o))].push(r[i])
                        }
            } else
                for (i = 0; i < u; ++i)
                    null != (o = c[i]) && s <= o && o <= h && _[l(d, o, 0, p)].push(r[i]);
            return _
        }
        return r.value = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : L(n),
            r) : t
        }
        ,
        r.domain = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : L([t[0], t[1]]),
            r) : n
        }
        ,
        r.thresholds = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : L(Array.isArray(t) ? Y.call(t) : t),
            r) : e
        }
        ,
        r
    }
    function tt(t, n) {
        let e;
        if (void 0 === n)
            for (const n of t)
                null != n && (e < n || void 0 === e && n >= n) && (e = n);
        else {
            let r = -1;
            for (let i of t)
                null != (i = n(i, ++r, t)) && (e < i || void 0 === e && i >= i) && (e = i)
        }
        return e
    }
    function nt(t, n) {
        let e, r = -1, i = -1;
        if (void 0 === n)
            for (const n of t)
                ++i,
                null != n && (e < n || void 0 === e && n >= n) && (e = n,
                r = i);
        else
            for (let o of t)
                null != (o = n(o, ++i, t)) && (e < o || void 0 === e && o >= o) && (e = o,
                r = i);
        return r
    }
    function et(t, n) {
        let e;
        if (void 0 === n)
            for (const n of t)
                null != n && (e > n || void 0 === e && n >= n) && (e = n);
        else {
            let r = -1;
            for (let i of t)
                null != (i = n(i, ++r, t)) && (e > i || void 0 === e && i >= i) && (e = i)
        }
        return e
    }
    function rt(t, n) {
        let e, r = -1, i = -1;
        if (void 0 === n)
            for (const n of t)
                ++i,
                null != n && (e > n || void 0 === e && n >= n) && (e = n,
                r = i);
        else
            for (let o of t)
                null != (o = n(o, ++i, t)) && (e > o || void 0 === e && o >= o) && (e = o,
                r = i);
        return r
    }
    function it(t, n, e=0, r=1 / 0, i) {
        if (n = Math.floor(n),
        e = Math.floor(Math.max(0, e)),
        r = Math.floor(Math.min(t.length - 1, r)),
        !(e <= n && n <= r))
            return t;
        for (i = void 0 === i ? B : O(i); r > e; ) {
            if (r - e > 600) {
                const o = r - e + 1
                  , a = n - e + 1
                  , u = Math.log(o)
                  , c = .5 * Math.exp(2 * u / 3)
                  , f = .5 * Math.sqrt(u * c * (o - c) / o) * (a - o / 2 < 0 ? -1 : 1);
                it(t, n, Math.max(e, Math.floor(n - a * c / o + f)), Math.min(r, Math.floor(n + (o - a) * c / o + f)), i)
            }
            const o = t[n];
            let a = e
              , u = r;
            for (ot(t, e, n),
            i(t[r], o) > 0 && ot(t, e, r); a < u; ) {
                for (ot(t, a, u),
                ++a,
                --u; i(t[a], o) < 0; )
                    ++a;
                for (; i(t[u], o) > 0; )
                    --u
            }
            0 === i(t[e], o) ? ot(t, e, u) : (++u,
            ot(t, u, r)),
            u <= n && (e = u + 1),
            n <= u && (r = u - 1)
        }
        return t
    }
    function ot(t, n, e) {
        const r = t[n];
        t[n] = t[e],
        t[e] = r
    }
    function at(t, e=n) {
        let r, i = !1;
        if (1 === e.length) {
            let o;
            for (const a of t) {
                const t = e(a);
                (i ? n(t, o) > 0 : 0 === n(t, t)) && (r = a,
                o = t,
                i = !0)
            }
        } else
            for (const n of t)
                (i ? e(n, r) > 0 : 0 === e(n, n)) && (r = n,
                i = !0);
        return r
    }
    function ut(t, n, e) {
        if ((r = (t = Float64Array.from(a(t, e))).length) && !isNaN(n = +n)) {
            if (n <= 0 || r < 2)
                return et(t);
            if (n >= 1)
                return tt(t);
            var r, i = (r - 1) * n, o = Math.floor(i), u = tt(it(t, o).subarray(0, o + 1));
            return u + (et(t.subarray(o + 1)) - u) * (i - o)
        }
    }
    function ct(t, n, e=o) {
        if ((r = t.length) && !isNaN(n = +n)) {
            if (n <= 0 || r < 2)
                return +e(t[0], 0, t);
            if (n >= 1)
                return +e(t[r - 1], r - 1, t);
            var r, i = (r - 1) * n, a = Math.floor(i), u = +e(t[a], a, t);
            return u + (+e(t[a + 1], a + 1, t) - u) * (i - a)
        }
    }
    function ft(t, n, e) {
        if ((r = (t = Float64Array.from(a(t, e))).length) && !isNaN(n = +n)) {
            if (n <= 0 || r < 2)
                return rt(t);
            if (n >= 1)
                return nt(t);
            var r, i = Math.floor((r - 1) * n), o = it(Uint32Array.from(t, ((t,n)=>n)), i, 0, r - 1, ((n,e)=>B(t[n], t[e])));
            return at(o.subarray(0, i + 1), (n=>t[n]))
        }
    }
    function st(t) {
        return Array.from(function*(t) {
            for (const n of t)
                yield*n
        }(t))
    }
    function lt(t, n) {
        return [t, n]
    }
    function ht(t, n, e) {
        t = +t,
        n = +n,
        e = (i = arguments.length) < 2 ? (n = t,
        t = 0,
        1) : i < 3 ? 1 : +e;
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i; )
            o[r] = t + r * e;
        return o
    }
    function dt(t, e=n) {
        if (1 === e.length)
            return rt(t, e);
        let r, i = -1, o = -1;
        for (const n of t)
            ++o,
            (i < 0 ? 0 === e(n, n) : e(n, r) < 0) && (r = n,
            i = o);
        return i
    }
    var pt = gt(Math.random);
    function gt(t) {
        return function(n, e=0, r=n.length) {
            let i = r - (e = +e);
            for (; i; ) {
                const r = t() * i-- | 0
                  , o = n[i + e];
                n[i + e] = n[r + e],
                n[r + e] = o
            }
            return n
        }
    }
    function yt(t) {
        if (!(i = t.length))
            return [];
        for (var n = -1, e = et(t, vt), r = new Array(e); ++n < e; )
            for (var i, o = -1, a = r[n] = new Array(i); ++o < i; )
                a[o] = t[o][n];
        return r
    }
    function vt(t) {
        return t.length
    }
    function _t(t) {
        return t instanceof InternSet ? t : new InternSet(t)
    }
    function bt(t, n) {
        const e = t[Symbol.iterator]()
          , r = new Set;
        for (const t of n) {
            const n = mt(t);
            if (r.has(n))
                continue;
            let i, o;
            for (; ({value: i, done: o} = e.next()); ) {
                if (o)
                    return !1;
                const t = mt(i);
                if (r.add(t),
                Object.is(n, t))
                    break
            }
        }
        return !0
    }
    function mt(t) {
        return null !== t && "object" == typeof t ? t.valueOf() : t
    }
    function xt(t) {
        return t
    }
    var wt = 1
      , Mt = 2
      , Tt = 3
      , At = 4
      , St = 1e-6;
    function Et(t) {
        return "translate(" + t + ",0)"
    }
    function Nt(t) {
        return "translate(0," + t + ")"
    }
    function kt(t) {
        return n=>+t(n)
    }
    function Ct(t, n) {
        return n = Math.max(0, t.bandwidth() - 2 * n) / 2,
        t.round() && (n = Math.round(n)),
        e=>+t(e) + n
    }
    function Pt() {
        return !this.__axis
    }
    function zt(t, n) {
        var e = []
          , r = null
          , i = null
          , o = 6
          , a = 6
          , u = 3
          , c = "undefined" != typeof window && window.devicePixelRatio > 1 ? 0 : .5
          , f = t === wt || t === At ? -1 : 1
          , s = t === At || t === Mt ? "x" : "y"
          , l = t === wt || t === Tt ? Et : Nt;
        function h(h) {
            var d = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r
              , p = null == i ? n.tickFormat ? n.tickFormat.apply(n, e) : xt : i
              , g = Math.max(o, 0) + u
              , y = n.range()
              , v = +y[0] + c
              , _ = +y[y.length - 1] + c
              , b = (n.bandwidth ? Ct : kt)(n.copy(), c)
              , m = h.selection ? h.selection() : h
              , x = m.selectAll(".domain").data([null])
              , w = m.selectAll(".tick").data(d, n).order()
              , M = w.exit()
              , T = w.enter().append("g").attr("class", "tick")
              , A = w.select("line")
              , S = w.select("text");
            x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")),
            w = w.merge(T),
            A = A.merge(T.append("line").attr("stroke", "currentColor").attr(s + "2", f * o)),
            S = S.merge(T.append("text").attr("fill", "currentColor").attr(s, f * g).attr("dy", t === wt ? "0em" : t === Tt ? "0.71em" : "0.32em")),
            h !== m && (x = x.transition(h),
            w = w.transition(h),
            A = A.transition(h),
            S = S.transition(h),
            M = M.transition(h).attr("opacity", St).attr("transform", (function(t) {
                return isFinite(t = b(t)) ? l(t + c) : this.getAttribute("transform")
            }
            )),
            T.attr("opacity", St).attr("transform", (function(t) {
                var n = this.parentNode.__axis;
                return l((n && isFinite(n = n(t)) ? n : b(t)) + c)
            }
            ))),
            M.remove(),
            x.attr("d", t === At || t === Mt ? a ? "M" + f * a + "," + v + "H" + c + "V" + _ + "H" + f * a : "M" + c + "," + v + "V" + _ : a ? "M" + v + "," + f * a + "V" + c + "H" + _ + "V" + f * a : "M" + v + "," + c + "H" + _),
            w.attr("opacity", 1).attr("transform", (function(t) {
                return l(b(t) + c)
            }
            )),
            A.attr(s + "2", f * o),
            S.attr(s, f * g).text(p),
            m.filter(Pt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Mt ? "start" : t === At ? "end" : "middle"),
            m.each((function() {
                this.__axis = b
            }
            ))
        }
        return h.scale = function(t) {
            return arguments.length ? (n = t,
            h) : n
        }
        ,
        h.ticks = function() {
            return e = Array.from(arguments),
            h
        }
        ,
        h.tickArguments = function(t) {
            return arguments.length ? (e = null == t ? [] : Array.from(t),
            h) : e.slice()
        }
        ,
        h.tickValues = function(t) {
            return arguments.length ? (r = null == t ? null : Array.from(t),
            h) : r && r.slice()
        }
        ,
        h.tickFormat = function(t) {
            return arguments.length ? (i = t,
            h) : i
        }
        ,
        h.tickSize = function(t) {
            return arguments.length ? (o = a = +t,
            h) : o
        }
        ,
        h.tickSizeInner = function(t) {
            return arguments.length ? (o = +t,
            h) : o
        }
        ,
        h.tickSizeOuter = function(t) {
            return arguments.length ? (a = +t,
            h) : a
        }
        ,
        h.tickPadding = function(t) {
            return arguments.length ? (u = +t,
            h) : u
        }
        ,
        h.offset = function(t) {
            return arguments.length ? (c = +t,
            h) : c
        }
        ,
        h
    }
    var $t = {
        value: ()=>{}
    };
    function Dt() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
                throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new Rt(r)
    }
    function Rt(t) {
        this._ = t
    }
    function Ft(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)
            if ((e = t[r]).name === n)
                return e.value
    }
    function qt(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)
            if (t[r].name === n) {
                t[r] = $t,
                t = t.slice(0, r).concat(t.slice(r + 1));
                break
            }
        return null != e && t.push({
            name: n,
            value: e
        }),
        t
    }
    Rt.prototype = Dt.prototype = {
        constructor: Rt,
        on: function(t, n) {
            var e, r, i = this._, o = (r = i,
            (t + "").trim().split(/^|\s+/).map((function(t) {
                var n = ""
                  , e = t.indexOf(".");
                if (e >= 0 && (n = t.slice(e + 1),
                t = t.slice(0, e)),
                t && !r.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: n
                }
            }
            ))), a = -1, u = o.length;
            if (!(arguments.length < 2)) {
                if (null != n && "function" != typeof n)
                    throw new Error("invalid callback: " + n);
                for (; ++a < u; )
                    if (e = (t = o[a]).type)
                        i[e] = qt(i[e], t.name, n);
                    else if (null == n)
                        for (e in i)
                            i[e] = qt(i[e], t.name, null);
                return this
            }
            for (; ++a < u; )
                if ((e = (t = o[a]).type) && (e = Ft(i[e], t.name)))
                    return e
        },
        copy: function() {
            var t = {}
              , n = this._;
            for (var e in n)
                t[e] = n[e].slice();
            return new Rt(t)
        },
        call: function(t, n) {
            if ((e = arguments.length - 2) > 0)
                for (var e, r, i = new Array(e), o = 0; o < e; ++o)
                    i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (o = 0,
            e = (r = this._[t]).length; o < e; ++o)
                r[o].value.apply(n, i)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
                r[i].value.apply(n, e)
        }
    };
    var Ut = "http://www.w3.org/1999/xhtml"
      , It = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: Ut,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    function Ot(t) {
        var n = t += ""
          , e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        It.hasOwnProperty(n) ? {
            space: It[n],
            local: t
        } : t
    }
    function Bt(t) {
        return function() {
            var n = this.ownerDocument
              , e = this.namespaceURI;
            return e === Ut && n.documentElement.namespaceURI === Ut ? n.createElement(t) : n.createElementNS(e, t)
        }
    }
    function Yt(t) {
        return function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }
    function Lt(t) {
        var n = Ot(t);
        return (n.local ? Yt : Bt)(n)
    }
    function jt() {}
    function Ht(t) {
        return null == t ? jt : function() {
            return this.querySelector(t)
        }
    }
    function Xt(t) {
        return null == t ? [] : Array.isArray(t) ? t : Array.from(t)
    }
    function Gt() {
        return []
    }
    function Vt(t) {
        return null == t ? Gt : function() {
            return this.querySelectorAll(t)
        }
    }
    function Wt(t) {
        return function() {
            return this.matches(t)
        }
    }
    function Zt(t) {
        return function(n) {
            return n.matches(t)
        }
    }
    var Kt = Array.prototype.find;
    function Qt() {
        return this.firstElementChild
    }
    var Jt = Array.prototype.filter;
    function tn() {
        return Array.from(this.children)
    }
    function nn(t) {
        return new Array(t.length)
    }
    function en(t, n) {
        this.ownerDocument = t.ownerDocument,
        this.namespaceURI = t.namespaceURI,
        this._next = null,
        this._parent = t,
        this.__data__ = n
    }
    function rn(t, n, e, r, i, o) {
        for (var a, u = 0, c = n.length, f = o.length; u < f; ++u)
            (a = n[u]) ? (a.__data__ = o[u],
            r[u] = a) : e[u] = new en(t,o[u]);
        for (; u < c; ++u)
            (a = n[u]) && (i[u] = a)
    }
    function on(t, n, e, r, i, o, a) {
        var u, c, f, s = new Map, l = n.length, h = o.length, d = new Array(l);
        for (u = 0; u < l; ++u)
            (c = n[u]) && (d[u] = f = a.call(c, c.__data__, u, n) + "",
            s.has(f) ? i[u] = c : s.set(f, c));
        for (u = 0; u < h; ++u)
            f = a.call(t, o[u], u, o) + "",
            (c = s.get(f)) ? (r[u] = c,
            c.__data__ = o[u],
            s.delete(f)) : e[u] = new en(t,o[u]);
        for (u = 0; u < l; ++u)
            (c = n[u]) && s.get(d[u]) === c && (i[u] = c)
    }
    function an(t) {
        return t.__data__
    }
    function un(t) {
        return "object" == typeof t && "length"in t ? t : Array.from(t)
    }
    function cn(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }
    function fn(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function sn(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function ln(t, n) {
        return function() {
            this.setAttribute(t, n)
        }
    }
    function hn(t, n) {
        return function() {
            this.setAttributeNS(t.space, t.local, n)
        }
    }
    function dn(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }
    function pn(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }
    function gn(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    }
    function yn(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    function vn(t, n, e) {
        return function() {
            this.style.setProperty(t, n, e)
        }
    }
    function _n(t, n, e) {
        return function() {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }
    function bn(t, n) {
        return t.style.getPropertyValue(n) || gn(t).getComputedStyle(t, null).getPropertyValue(n)
    }
    function mn(t) {
        return function() {
            delete this[t]
        }
    }
    function xn(t, n) {
        return function() {
            this[t] = n
        }
    }
    function wn(t, n) {
        return function() {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }
    function Mn(t) {
        return t.trim().split(/^|\s+/)
    }
    function Tn(t) {
        return t.classList || new An(t)
    }
    function An(t) {
        this._node = t,
        this._names = Mn(t.getAttribute("class") || "")
    }
    function Sn(t, n) {
        for (var e = Tn(t), r = -1, i = n.length; ++r < i; )
            e.add(n[r])
    }
    function En(t, n) {
        for (var e = Tn(t), r = -1, i = n.length; ++r < i; )
            e.remove(n[r])
    }
    function Nn(t) {
        return function() {
            Sn(this, t)
        }
    }
    function kn(t) {
        return function() {
            En(this, t)
        }
    }
    function Cn(t, n) {
        return function() {
            (n.apply(this, arguments) ? Sn : En)(this, t)
        }
    }
    function Pn() {
        this.textContent = ""
    }
    function zn(t) {
        return function() {
            this.textContent = t
        }
    }
    function $n(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        }
    }
    function Dn() {
        this.innerHTML = ""
    }
    function Rn(t) {
        return function() {
            this.innerHTML = t
        }
    }
    function Fn(t) {
        return function() {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        }
    }
    function qn() {
        this.nextSibling && this.parentNode.appendChild(this)
    }
    function Un() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }
    function In() {
        return null
    }
    function On() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }
    function Bn() {
        var t = this.cloneNode(!1)
          , n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function Yn() {
        var t = this.cloneNode(!0)
          , n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t
    }
    function Ln(t) {
        return function() {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
                    e = n[r],
                    t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.options);
                ++i ? n.length = i : delete this.__on
            }
        }
    }
    function jn(t, n, e) {
        return function() {
            var r, i = this.__on, o = function(t) {
                return function(n) {
                    t.call(this, n, this.__data__)
                }
            }(n);
            if (i)
                for (var a = 0, u = i.length; a < u; ++a)
                    if ((r = i[a]).type === t.type && r.name === t.name)
                        return this.removeEventListener(r.type, r.listener, r.options),
                        this.addEventListener(r.type, r.listener = o, r.options = e),
                        void (r.value = n);
            this.addEventListener(t.type, o, e),
            r = {
                type: t.type,
                name: t.name,
                value: n,
                listener: o,
                options: e
            },
            i ? i.push(r) : this.__on = [r]
        }
    }
    function Hn(t, n, e) {
        var r = gn(t)
          , i = r.CustomEvent;
        "function" == typeof i ? i = new i(n,e) : (i = r.document.createEvent("Event"),
        e ? (i.initEvent(n, e.bubbles, e.cancelable),
        i.detail = e.detail) : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i)
    }
    function Xn(t, n) {
        return function() {
            return Hn(this, t, n)
        }
    }
    function Gn(t, n) {
        return function() {
            return Hn(this, t, n.apply(this, arguments))
        }
    }
    en.prototype = {
        constructor: en,
        appendChild: function(t) {
            return this._parent.insertBefore(t, this._next)
        },
        insertBefore: function(t, n) {
            return this._parent.insertBefore(t, n)
        },
        querySelector: function(t) {
            return this._parent.querySelector(t)
        },
        querySelectorAll: function(t) {
            return this._parent.querySelectorAll(t)
        }
    },
    An.prototype = {
        add: function(t) {
            this._names.indexOf(t) < 0 && (this._names.push(t),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        remove: function(t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1),
            this._node.setAttribute("class", this._names.join(" ")))
        },
        contains: function(t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var Vn = [null];
    function Wn(t, n) {
        this._groups = t,
        this._parents = n
    }
    function Zn() {
        return new Wn([[document.documentElement]],Vn)
    }
    function Kn(t) {
        return "string" == typeof t ? new Wn([[document.querySelector(t)]],[document.documentElement]) : new Wn([[t]],Vn)
    }
    Wn.prototype = Zn.prototype = {
        constructor: Wn,
        select: function(t) {
            "function" != typeof t && (t = Ht(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s)
                    (o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__"in o && (a.__data__ = o.__data__),
                    f[s] = a);
            return new Wn(r,this._parents)
        },
        selectAll: function(t) {
            t = "function" == typeof t ? function(t) {
                return function() {
                    return Xt(t.apply(this, arguments))
                }
            }(t) : Vt(t);
            for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                for (var a, u = n[o], c = u.length, f = 0; f < c; ++f)
                    (a = u[f]) && (r.push(t.call(a, a.__data__, f, u)),
                    i.push(a));
            return new Wn(r,i)
        },
        selectChild: function(t) {
            return this.select(null == t ? Qt : function(t) {
                return function() {
                    return Kt.call(this.children, t)
                }
            }("function" == typeof t ? t : Zt(t)))
        },
        selectChildren: function(t) {
            return this.selectAll(null == t ? tn : function(t) {
                return function() {
                    return Jt.call(this.children, t)
                }
            }("function" == typeof t ? t : Zt(t)))
        },
        filter: function(t) {
            "function" != typeof t && (t = Wt(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)
                    (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
            return new Wn(r,this._parents)
        },
        data: function(t, n) {
            if (!arguments.length)
                return Array.from(this, an);
            var e = n ? on : rn
              , r = this._parents
              , i = this._groups;
            "function" != typeof t && (t = function(t) {
                return function() {
                    return t
                }
            }(t));
            for (var o = i.length, a = new Array(o), u = new Array(o), c = new Array(o), f = 0; f < o; ++f) {
                var s = r[f]
                  , l = i[f]
                  , h = l.length
                  , d = un(t.call(s, s && s.__data__, f, r))
                  , p = d.length
                  , g = u[f] = new Array(p)
                  , y = a[f] = new Array(p);
                e(s, l, g, y, c[f] = new Array(h), d, n);
                for (var v, _, b = 0, m = 0; b < p; ++b)
                    if (v = g[b]) {
                        for (b >= m && (m = b + 1); !(_ = y[m]) && ++m < p; )
                            ;
                        v._next = _ || null
                    }
            }
            return (a = new Wn(a,r))._enter = u,
            a._exit = c,
            a
        },
        enter: function() {
            return new Wn(this._enter || this._groups.map(nn),this._parents)
        },
        exit: function() {
            return new Wn(this._exit || this._groups.map(nn),this._parents)
        },
        join: function(t, n, e) {
            var r = this.enter()
              , i = this
              , o = this.exit();
            return "function" == typeof t ? (r = t(r)) && (r = r.selection()) : r = r.append(t + ""),
            null != n && (i = n(i)) && (i = i.selection()),
            null == e ? o.remove() : e(o),
            r && i ? r.merge(i).order() : i
        },
        merge: function(t) {
            for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), u = new Array(i), c = 0; c < a; ++c)
                for (var f, s = e[c], l = r[c], h = s.length, d = u[c] = new Array(h), p = 0; p < h; ++p)
                    (f = s[p] || l[p]) && (d[p] = f);
            for (; c < i; ++c)
                u[c] = e[c];
            return new Wn(u,this._parents)
        },
        selection: function() {
            return this
        },
        order: function() {
            for (var t = this._groups, n = -1, e = t.length; ++n < e; )
                for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
                    (r = i[o]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a),
                    a = r);
            return this
        },
        sort: function(t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }
            t || (t = cn);
            for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                for (var a, u = e[o], c = u.length, f = i[o] = new Array(c), s = 0; s < c; ++s)
                    (a = u[s]) && (f[s] = a);
                f.sort(n)
            }
            return new Wn(i,this._parents).order()
        },
        call: function() {
            var t = arguments[0];
            return arguments[0] = this,
            t.apply(null, arguments),
            this
        },
        nodes: function() {
            return Array.from(this)
        },
        node: function() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                    var a = r[i];
                    if (a)
                        return a
                }
            return null
        },
        size: function() {
            let t = 0;
            for (const n of this)
                ++t;
            return t
        },
        empty: function() {
            return !this.node()
        },
        each: function(t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
                    (i = o[a]) && t.call(i, i.__data__, a, o);
            return this
        },
        attr: function(t, n) {
            var e = Ot(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? sn : fn : "function" == typeof n ? e.local ? pn : dn : e.local ? hn : ln)(e, n))
        },
        style: function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? yn : "function" == typeof n ? _n : vn)(t, n, null == e ? "" : e)) : bn(this.node(), t)
        },
        property: function(t, n) {
            return arguments.length > 1 ? this.each((null == n ? mn : "function" == typeof n ? wn : xn)(t, n)) : this.node()[t]
        },
        classed: function(t, n) {
            var e = Mn(t + "");
            if (arguments.length < 2) {
                for (var r = Tn(this.node()), i = -1, o = e.length; ++i < o; )
                    if (!r.contains(e[i]))
                        return !1;
                return !0
            }
            return this.each(("function" == typeof n ? Cn : n ? Nn : kn)(e, n))
        },
        text: function(t) {
            return arguments.length ? this.each(null == t ? Pn : ("function" == typeof t ? $n : zn)(t)) : this.node().textContent
        },
        html: function(t) {
            return arguments.length ? this.each(null == t ? Dn : ("function" == typeof t ? Fn : Rn)(t)) : this.node().innerHTML
        },
        raise: function() {
            return this.each(qn)
        },
        lower: function() {
            return this.each(Un)
        },
        append: function(t) {
            var n = "function" == typeof t ? t : Lt(t);
            return this.select((function() {
                return this.appendChild(n.apply(this, arguments))
            }
            ))
        },
        insert: function(t, n) {
            var e = "function" == typeof t ? t : Lt(t)
              , r = null == n ? In : "function" == typeof n ? n : Ht(n);
            return this.select((function() {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            }
            ))
        },
        remove: function() {
            return this.each(On)
        },
        clone: function(t) {
            return this.select(t ? Yn : Bn)
        },
        datum: function(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        },
        on: function(t, n, e) {
            var r, i, o = function(t) {
                return t.trim().split(/^|\s+/).map((function(t) {
                    var n = ""
                      , e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1),
                    t = t.slice(0, e)),
                    {
                        type: t,
                        name: n
                    }
                }
                ))
            }(t + ""), a = o.length;
            if (!(arguments.length < 2)) {
                for (u = n ? jn : Ln,
                r = 0; r < a; ++r)
                    this.each(u(o[r], n, e));
                return this
            }
            var u = this.node().__on;
            if (u)
                for (var c, f = 0, s = u.length; f < s; ++f)
                    for (r = 0,
                    c = u[f]; r < a; ++r)
                        if ((i = o[r]).type === c.type && i.name === c.name)
                            return c.value
        },
        dispatch: function(t, n) {
            return this.each(("function" == typeof n ? Gn : Xn)(t, n))
        },
        [Symbol.iterator]: function*() {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                for (var r, i = t[n], o = 0, a = i.length; o < a; ++o)
                    (r = i[o]) && (yield r)
        }
    };
    var Qn = 0;
    function Jn() {
        return new te
    }
    function te() {
        this._ = "@" + (++Qn).toString(36)
    }
    function ne(t) {
        let n;
        for (; n = t.sourceEvent; )
            t = n;
        return t
    }
    function ee(t, n) {
        if (t = ne(t),
        void 0 === n && (n = t.currentTarget),
        n) {
            var e = n.ownerSVGElement || n;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                return r.x = t.clientX,
                r.y = t.clientY,
                [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
            }
            if (n.getBoundingClientRect) {
                var i = n.getBoundingClientRect();
                return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
            }
        }
        return [t.pageX, t.pageY]
    }
    te.prototype = Jn.prototype = {
        constructor: te,
        get: function(t) {
            for (var n = this._; !(n in t); )
                if (!(t = t.parentNode))
                    return;
            return t[n]
        },
        set: function(t, n) {
            return t[this._] = n
        },
        remove: function(t) {
            return this._ in t && delete t[this._]
        },
        toString: function() {
            return this._
        }
    };
    const re = {
        passive: !1
    }
      , ie = {
        capture: !0,
        passive: !1
    };
    function oe(t) {
        t.stopImmediatePropagation()
    }
    function ae(t) {
        t.preventDefault(),
        t.stopImmediatePropagation()
    }
    function ue(t) {
        var n = t.document.documentElement
          , e = Kn(t).on("dragstart.drag", ae, ie);
        "onselectstart"in n ? e.on("selectstart.drag", ae, ie) : (n.__noselect = n.style.MozUserSelect,
        n.style.MozUserSelect = "none")
    }
    function ce(t, n) {
        var e = t.document.documentElement
          , r = Kn(t).on("dragstart.drag", null);
        n && (r.on("click.drag", ae, ie),
        setTimeout((function() {
            r.on("click.drag", null)
        }
        ), 0)),
        "onselectstart"in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect,
        delete e.__noselect)
    }
    var fe = t=>()=>t;
    function se(t, {sourceEvent: n, subject: e, target: r, identifier: i, active: o, x: a, y: u, dx: c, dy: f, dispatch: s}) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            subject: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            identifier: {
                value: i,
                enumerable: !0,
                configurable: !0
            },
            active: {
                value: o,
                enumerable: !0,
                configurable: !0
            },
            x: {
                value: a,
                enumerable: !0,
                configurable: !0
            },
            y: {
                value: u,
                enumerable: !0,
                configurable: !0
            },
            dx: {
                value: c,
                enumerable: !0,
                configurable: !0
            },
            dy: {
                value: f,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: s
            }
        })
    }
    function le(t) {
        return !t.ctrlKey && !t.button
    }
    function he() {
        return this.parentNode
    }
    function de(t, n) {
        return null == n ? {
            x: t.x,
            y: t.y
        } : n
    }
    function pe() {
        return navigator.maxTouchPoints || "ontouchstart"in this
    }
    function ge(t, n, e) {
        t.prototype = n.prototype = e,
        e.constructor = t
    }
    function ye(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n)
            e[r] = n[r];
        return e
    }
    function ve() {}
    se.prototype.on = function() {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    }
    ;
    var _e = .7
      , be = 1 / _e
      , me = "\\s*([+-]?\\d+)\\s*"
      , xe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*"
      , we = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
      , Me = /^#([0-9a-f]{3,8})$/
      , Te = new RegExp(`^rgb\\(${me},${me},${me}\\)$`)
      , Ae = new RegExp(`^rgb\\(${we},${we},${we}\\)$`)
      , Se = new RegExp(`^rgba\\(${me},${me},${me},${xe}\\)$`)
      , Ee = new RegExp(`^rgba\\(${we},${we},${we},${xe}\\)$`)
      , Ne = new RegExp(`^hsl\\(${xe},${we},${we}\\)$`)
      , ke = new RegExp(`^hsla\\(${xe},${we},${we},${xe}\\)$`)
      , Ce = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    function Pe() {
        return this.rgb().formatHex()
    }
    function ze() {
        return this.rgb().formatRgb()
    }
    function $e(t) {
        var n, e;
        return t = (t + "").trim().toLowerCase(),
        (n = Me.exec(t)) ? (e = n[1].length,
        n = parseInt(n[1], 16),
        6 === e ? De(n) : 3 === e ? new Ue(n >> 8 & 15 | n >> 4 & 240,n >> 4 & 15 | 240 & n,(15 & n) << 4 | 15 & n,1) : 8 === e ? Re(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? Re(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = Te.exec(t)) ? new Ue(n[1],n[2],n[3],1) : (n = Ae.exec(t)) ? new Ue(255 * n[1] / 100,255 * n[2] / 100,255 * n[3] / 100,1) : (n = Se.exec(t)) ? Re(n[1], n[2], n[3], n[4]) : (n = Ee.exec(t)) ? Re(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Ne.exec(t)) ? je(n[1], n[2] / 100, n[3] / 100, 1) : (n = ke.exec(t)) ? je(n[1], n[2] / 100, n[3] / 100, n[4]) : Ce.hasOwnProperty(t) ? De(Ce[t]) : "transparent" === t ? new Ue(NaN,NaN,NaN,0) : null
    }
    function De(t) {
        return new Ue(t >> 16 & 255,t >> 8 & 255,255 & t,1)
    }
    function Re(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN),
        new Ue(t,n,e,r)
    }
    function Fe(t) {
        return t instanceof ve || (t = $e(t)),
        t ? new Ue((t = t.rgb()).r,t.g,t.b,t.opacity) : new Ue
    }
    function qe(t, n, e, r) {
        return 1 === arguments.length ? Fe(t) : new Ue(t,n,e,null == r ? 1 : r)
    }
    function Ue(t, n, e, r) {
        this.r = +t,
        this.g = +n,
        this.b = +e,
        this.opacity = +r
    }
    function Ie() {
        return `#${Le(this.r)}${Le(this.g)}${Le(this.b)}`
    }
    function Oe() {
        const t = Be(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${Ye(this.r)}, ${Ye(this.g)}, ${Ye(this.b)}${1 === t ? ")" : `, ${t})`}`
    }
    function Be(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
    }
    function Ye(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0))
    }
    function Le(t) {
        return ((t = Ye(t)) < 16 ? "0" : "") + t.toString(16)
    }
    function je(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN),
        new Ge(t,n,e,r)
    }
    function He(t) {
        if (t instanceof Ge)
            return new Ge(t.h,t.s,t.l,t.opacity);
        if (t instanceof ve || (t = $e(t)),
        !t)
            return new Ge;
        if (t instanceof Ge)
            return t;
        var n = (t = t.rgb()).r / 255
          , e = t.g / 255
          , r = t.b / 255
          , i = Math.min(n, e, r)
          , o = Math.max(n, e, r)
          , a = NaN
          , u = o - i
          , c = (o + i) / 2;
        return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4,
        u /= c < .5 ? o + i : 2 - o - i,
        a *= 60) : u = c > 0 && c < 1 ? 0 : a,
        new Ge(a,u,c,t.opacity)
    }
    function Xe(t, n, e, r) {
        return 1 === arguments.length ? He(t) : new Ge(t,n,e,null == r ? 1 : r)
    }
    function Ge(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Ve(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t
    }
    function We(t) {
        return Math.max(0, Math.min(1, t || 0))
    }
    function Ze(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }
    ge(ve, $e, {
        copy(t) {
            return Object.assign(new this.constructor, this, t)
        },
        displayable() {
            return this.rgb().displayable()
        },
        hex: Pe,
        formatHex: Pe,
        formatHex8: function() {
            return this.rgb().formatHex8()
        },
        formatHsl: function() {
            return He(this).formatHsl()
        },
        formatRgb: ze,
        toString: ze
    }),
    ge(Ue, qe, ye(ve, {
        brighter(t) {
            return t = null == t ? be : Math.pow(be, t),
            new Ue(this.r * t,this.g * t,this.b * t,this.opacity)
        },
        darker(t) {
            return t = null == t ? _e : Math.pow(_e, t),
            new Ue(this.r * t,this.g * t,this.b * t,this.opacity)
        },
        rgb() {
            return this
        },
        clamp() {
            return new Ue(Ye(this.r),Ye(this.g),Ye(this.b),Be(this.opacity))
        },
        displayable() {
            return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
        },
        hex: Ie,
        formatHex: Ie,
        formatHex8: function() {
            return `#${Le(this.r)}${Le(this.g)}${Le(this.b)}${Le(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`
        },
        formatRgb: Oe,
        toString: Oe
    })),
    ge(Ge, Xe, ye(ve, {
        brighter(t) {
            return t = null == t ? be : Math.pow(be, t),
            new Ge(this.h,this.s,this.l * t,this.opacity)
        },
        darker(t) {
            return t = null == t ? _e : Math.pow(_e, t),
            new Ge(this.h,this.s,this.l * t,this.opacity)
        },
        rgb() {
            var t = this.h % 360 + 360 * (this.h < 0)
              , n = isNaN(t) || isNaN(this.s) ? 0 : this.s
              , e = this.l
              , r = e + (e < .5 ? e : 1 - e) * n
              , i = 2 * e - r;
            return new Ue(Ze(t >= 240 ? t - 240 : t + 120, i, r),Ze(t, i, r),Ze(t < 120 ? t + 240 : t - 120, i, r),this.opacity)
        },
        clamp() {
            return new Ge(Ve(this.h),We(this.s),We(this.l),Be(this.opacity))
        },
        displayable() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        },
        formatHsl() {
            const t = Be(this.opacity);
            return `${1 === t ? "hsl(" : "hsla("}${Ve(this.h)}, ${100 * We(this.s)}%, ${100 * We(this.l)}%${1 === t ? ")" : `, ${t})`}`
        }
    }));
    const Ke = Math.PI / 180
      , Qe = 180 / Math.PI
      , Je = .96422
      , tr = 1
      , nr = .82521
      , er = 4 / 29
      , rr = 6 / 29
      , ir = 3 * rr * rr
      , or = rr * rr * rr;
    function ar(t) {
        if (t instanceof cr)
            return new cr(t.l,t.a,t.b,t.opacity);
        if (t instanceof gr)
            return yr(t);
        t instanceof Ue || (t = Fe(t));
        var n, e, r = hr(t.r), i = hr(t.g), o = hr(t.b), a = fr((.2225045 * r + .7168786 * i + .0606169 * o) / tr);
        return r === i && i === o ? n = e = a : (n = fr((.4360747 * r + .3850649 * i + .1430804 * o) / Je),
        e = fr((.0139322 * r + .0971045 * i + .7141733 * o) / nr)),
        new cr(116 * a - 16,500 * (n - a),200 * (a - e),t.opacity)
    }
    function ur(t, n, e, r) {
        return 1 === arguments.length ? ar(t) : new cr(t,n,e,null == r ? 1 : r)
    }
    function cr(t, n, e, r) {
        this.l = +t,
        this.a = +n,
        this.b = +e,
        this.opacity = +r
    }
    function fr(t) {
        return t > or ? Math.pow(t, 1 / 3) : t / ir + er
    }
    function sr(t) {
        return t > rr ? t * t * t : ir * (t - er)
    }
    function lr(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }
    function hr(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }
    function dr(t) {
        if (t instanceof gr)
            return new gr(t.h,t.c,t.l,t.opacity);
        if (t instanceof cr || (t = ar(t)),
        0 === t.a && 0 === t.b)
            return new gr(NaN,0 < t.l && t.l < 100 ? 0 : NaN,t.l,t.opacity);
        var n = Math.atan2(t.b, t.a) * Qe;
        return new gr(n < 0 ? n + 360 : n,Math.sqrt(t.a * t.a + t.b * t.b),t.l,t.opacity)
    }
    function pr(t, n, e, r) {
        return 1 === arguments.length ? dr(t) : new gr(t,n,e,null == r ? 1 : r)
    }
    function gr(t, n, e, r) {
        this.h = +t,
        this.c = +n,
        this.l = +e,
        this.opacity = +r
    }
    function yr(t) {
        if (isNaN(t.h))
            return new cr(t.l,0,0,t.opacity);
        var n = t.h * Ke;
        return new cr(t.l,Math.cos(n) * t.c,Math.sin(n) * t.c,t.opacity)
    }
    ge(cr, ur, ye(ve, {
        brighter(t) {
            return new cr(this.l + 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
        },
        darker(t) {
            return new cr(this.l - 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
        },
        rgb() {
            var t = (this.l + 16) / 116
              , n = isNaN(this.a) ? t : t + this.a / 500
              , e = isNaN(this.b) ? t : t - this.b / 200;
            return new Ue(lr(3.1338561 * (n = Je * sr(n)) - 1.6168667 * (t = tr * sr(t)) - .4906146 * (e = nr * sr(e))),lr(-.9787684 * n + 1.9161415 * t + .033454 * e),lr(.0719453 * n - .2289914 * t + 1.4052427 * e),this.opacity)
        }
    })),
    ge(gr, pr, ye(ve, {
        brighter(t) {
            return new gr(this.h,this.c,this.l + 18 * (null == t ? 1 : t),this.opacity)
        },
        darker(t) {
            return new gr(this.h,this.c,this.l - 18 * (null == t ? 1 : t),this.opacity)
        },
        rgb() {
            return yr(this).rgb()
        }
    }));
    var vr = -.14861
      , _r = 1.78277
      , br = -.29227
      , mr = -.90649
      , xr = 1.97294
      , wr = xr * mr
      , Mr = xr * _r
      , Tr = _r * br - mr * vr;
    function Ar(t, n, e, r) {
        return 1 === arguments.length ? function(t) {
            if (t instanceof Sr)
                return new Sr(t.h,t.s,t.l,t.opacity);
            t instanceof Ue || (t = Fe(t));
            var n = t.r / 255
              , e = t.g / 255
              , r = t.b / 255
              , i = (Tr * r + wr * n - Mr * e) / (Tr + wr - Mr)
              , o = r - i
              , a = (xr * (e - i) - br * o) / mr
              , u = Math.sqrt(a * a + o * o) / (xr * i * (1 - i))
              , c = u ? Math.atan2(a, o) * Qe - 120 : NaN;
            return new Sr(c < 0 ? c + 360 : c,u,i,t.opacity)
        }(t) : new Sr(t,n,e,null == r ? 1 : r)
    }
    function Sr(t, n, e, r) {
        this.h = +t,
        this.s = +n,
        this.l = +e,
        this.opacity = +r
    }
    function Er(t, n, e, r, i) {
        var o = t * t
          , a = o * t;
        return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
    }
    function Nr(t) {
        var n = t.length - 1;
        return function(e) {
            var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1,
            n - 1) : Math.floor(e * n)
              , i = t[r]
              , o = t[r + 1]
              , a = r > 0 ? t[r - 1] : 2 * i - o
              , u = r < n - 1 ? t[r + 2] : 2 * o - i;
            return Er((e - r / n) * n, a, i, o, u)
        }
    }
    function kr(t) {
        var n = t.length;
        return function(e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n)
              , i = t[(r + n - 1) % n]
              , o = t[r % n]
              , a = t[(r + 1) % n]
              , u = t[(r + 2) % n];
            return Er((e - r / n) * n, i, o, a, u)
        }
    }
    ge(Sr, Ar, ye(ve, {
        brighter(t) {
            return t = null == t ? be : Math.pow(be, t),
            new Sr(this.h,this.s,this.l * t,this.opacity)
        },
        darker(t) {
            return t = null == t ? _e : Math.pow(_e, t),
            new Sr(this.h,this.s,this.l * t,this.opacity)
        },
        rgb() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Ke
              , n = +this.l
              , e = isNaN(this.s) ? 0 : this.s * n * (1 - n)
              , r = Math.cos(t)
              , i = Math.sin(t);
            return new Ue(255 * (n + e * (vr * r + _r * i)),255 * (n + e * (br * r + mr * i)),255 * (n + e * (xr * r)),this.opacity)
        }
    }));
    var Cr = t=>()=>t;
    function Pr(t, n) {
        return function(e) {
            return t + e * n
        }
    }
    function zr(t, n) {
        var e = n - t;
        return e ? Pr(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Cr(isNaN(t) ? n : t)
    }
    function $r(t) {
        return 1 == (t = +t) ? Dr : function(n, e) {
            return e - n ? function(t, n, e) {
                return t = Math.pow(t, e),
                n = Math.pow(n, e) - t,
                e = 1 / e,
                function(r) {
                    return Math.pow(t + r * n, e)
                }
            }(n, e, t) : Cr(isNaN(n) ? e : n)
        }
    }
    function Dr(t, n) {
        var e = n - t;
        return e ? Pr(t, e) : Cr(isNaN(t) ? n : t)
    }
    var Rr = function t(n) {
        var e = $r(n);
        function r(t, n) {
            var r = e((t = qe(t)).r, (n = qe(n)).r)
              , i = e(t.g, n.g)
              , o = e(t.b, n.b)
              , a = Dr(t.opacity, n.opacity);
            return function(n) {
                return t.r = r(n),
                t.g = i(n),
                t.b = o(n),
                t.opacity = a(n),
                t + ""
            }
        }
        return r.gamma = t,
        r
    }(1);
    function Fr(t) {
        return function(n) {
            var e, r, i = n.length, o = new Array(i), a = new Array(i), u = new Array(i);
            for (e = 0; e < i; ++e)
                r = qe(n[e]),
                o[e] = r.r || 0,
                a[e] = r.g || 0,
                u[e] = r.b || 0;
            return o = t(o),
            a = t(a),
            u = t(u),
            r.opacity = 1,
            function(t) {
                return r.r = o(t),
                r.g = a(t),
                r.b = u(t),
                r + ""
            }
        }
    }
    var qr = Fr(Nr)
      , Ur = Fr(kr);
    function Ir(t, n) {
        n || (n = []);
        var e, r = t ? Math.min(n.length, t.length) : 0, i = n.slice();
        return function(o) {
            for (e = 0; e < r; ++e)
                i[e] = t[e] * (1 - o) + n[e] * o;
            return i
        }
    }
    function Or(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView)
    }
    function Br(t, n) {
        var e, r = n ? n.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(i), a = new Array(r);
        for (e = 0; e < i; ++e)
            o[e] = Vr(t[e], n[e]);
        for (; e < r; ++e)
            a[e] = n[e];
        return function(t) {
            for (e = 0; e < i; ++e)
                a[e] = o[e](t);
            return a
        }
    }
    function Yr(t, n) {
        var e = new Date;
        return t = +t,
        n = +n,
        function(r) {
            return e.setTime(t * (1 - r) + n * r),
            e
        }
    }
    function Lr(t, n) {
        return t = +t,
        n = +n,
        function(e) {
            return t * (1 - e) + n * e
        }
    }
    function jr(t, n) {
        var e, r = {}, i = {};
        for (e in null !== t && "object" == typeof t || (t = {}),
        null !== n && "object" == typeof n || (n = {}),
        n)
            e in t ? r[e] = Vr(t[e], n[e]) : i[e] = n[e];
        return function(t) {
            for (e in r)
                i[e] = r[e](t);
            return i
        }
    }
    var Hr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
      , Xr = new RegExp(Hr.source,"g");
    function Gr(t, n) {
        var e, r, i, o = Hr.lastIndex = Xr.lastIndex = 0, a = -1, u = [], c = [];
        for (t += "",
        n += ""; (e = Hr.exec(t)) && (r = Xr.exec(n)); )
            (i = r.index) > o && (i = n.slice(o, i),
            u[a] ? u[a] += i : u[++a] = i),
            (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null,
            c.push({
                i: a,
                x: Lr(e, r)
            })),
            o = Xr.lastIndex;
        return o < n.length && (i = n.slice(o),
        u[a] ? u[a] += i : u[++a] = i),
        u.length < 2 ? c[0] ? function(t) {
            return function(n) {
                return t(n) + ""
            }
        }(c[0].x) : function(t) {
            return function() {
                return t
            }
        }(n) : (n = c.length,
        function(t) {
            for (var e, r = 0; r < n; ++r)
                u[(e = c[r]).i] = e.x(t);
            return u.join("")
        }
        )
    }
    function Vr(t, n) {
        var e, r = typeof n;
        return null == n || "boolean" === r ? Cr(n) : ("number" === r ? Lr : "string" === r ? (e = $e(n)) ? (n = e,
        Rr) : Gr : n instanceof $e ? Rr : n instanceof Date ? Yr : Or(n) ? Ir : Array.isArray(n) ? Br : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? jr : Lr)(t, n)
    }
    function Wr(t, n) {
        return t = +t,
        n = +n,
        function(e) {
            return Math.round(t * (1 - e) + n * e)
        }
    }
    var Zr, Kr = 180 / Math.PI, Qr = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    };
    function Jr(t, n, e, r, i, o) {
        var a, u, c;
        return (a = Math.sqrt(t * t + n * n)) && (t /= a,
        n /= a),
        (c = t * e + n * r) && (e -= t * c,
        r -= n * c),
        (u = Math.sqrt(e * e + r * r)) && (e /= u,
        r /= u,
        c /= u),
        t * r < n * e && (t = -t,
        n = -n,
        c = -c,
        a = -a),
        {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(n, t) * Kr,
            skewX: Math.atan(c) * Kr,
            scaleX: a,
            scaleY: u
        }
    }
    function ti(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " " : ""
        }
        return function(o, a) {
            var u = []
              , c = [];
            return o = t(o),
            a = t(a),
            function(t, r, i, o, a, u) {
                if (t !== i || r !== o) {
                    var c = a.push("translate(", null, n, null, e);
                    u.push({
                        i: c - 4,
                        x: Lr(t, i)
                    }, {
                        i: c - 2,
                        x: Lr(r, o)
                    })
                } else
                    (i || o) && a.push("translate(" + i + n + o + e)
            }(o.translateX, o.translateY, a.translateX, a.translateY, u, c),
            function(t, n, e, o) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360),
                o.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: Lr(t, n)
                })) : n && e.push(i(e) + "rotate(" + n + r)
            }(o.rotate, a.rotate, u, c),
            function(t, n, e, o) {
                t !== n ? o.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: Lr(t, n)
                }) : n && e.push(i(e) + "skewX(" + n + r)
            }(o.skewX, a.skewX, u, c),
            function(t, n, e, r, o, a) {
                if (t !== e || n !== r) {
                    var u = o.push(i(o) + "scale(", null, ",", null, ")");
                    a.push({
                        i: u - 4,
                        x: Lr(t, e)
                    }, {
                        i: u - 2,
                        x: Lr(n, r)
                    })
                } else
                    1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
            }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, c),
            o = a = null,
            function(t) {
                for (var n, e = -1, r = c.length; ++e < r; )
                    u[(n = c[e]).i] = n.x(t);
                return u.join("")
            }
        }
    }
    var ni = ti((function(t) {
        const n = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
        return n.isIdentity ? Qr : Jr(n.a, n.b, n.c, n.d, n.e, n.f)
    }
    ), "px, ", "px)", "deg)")
      , ei = ti((function(t) {
        return null == t ? Qr : (Zr || (Zr = document.createElementNS("http://www.w3.org/2000/svg", "g")),
        Zr.setAttribute("transform", t),
        (t = Zr.transform.baseVal.consolidate()) ? Jr((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Qr)
    }
    ), ", ", ")", ")");
    function ri(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }
    var ii = function t(n, e, r) {
        function i(t, i) {
            var o, a, u = t[0], c = t[1], f = t[2], s = i[0], l = i[1], h = i[2], d = s - u, p = l - c, g = d * d + p * p;
            if (g < 1e-12)
                a = Math.log(h / f) / n,
                o = function(t) {
                    return [u + t * d, c + t * p, f * Math.exp(n * t * a)]
                }
                ;
            else {
                var y = Math.sqrt(g)
                  , v = (h * h - f * f + r * g) / (2 * f * e * y)
                  , _ = (h * h - f * f - r * g) / (2 * h * e * y)
                  , b = Math.log(Math.sqrt(v * v + 1) - v)
                  , m = Math.log(Math.sqrt(_ * _ + 1) - _);
                a = (m - b) / n,
                o = function(t) {
                    var r = t * a
                      , i = ri(b)
                      , o = f / (e * y) * (i * function(t) {
                        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
                    }(n * r + b) - function(t) {
                        return ((t = Math.exp(t)) - 1 / t) / 2
                    }(b));
                    return [u + o * d, c + o * p, f * i / ri(n * r + b)]
                }
            }
            return o.duration = 1e3 * a * n / Math.SQRT2,
            o
        }
        return i.rho = function(n) {
            var e = Math.max(.001, +n)
              , r = e * e;
            return t(e, r, r * r)
        }
        ,
        i
    }(Math.SQRT2, 2, 4);
    function oi(t) {
        return function(n, e) {
            var r = t((n = Xe(n)).h, (e = Xe(e)).h)
              , i = Dr(n.s, e.s)
              , o = Dr(n.l, e.l)
              , a = Dr(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.s = i(t),
                n.l = o(t),
                n.opacity = a(t),
                n + ""
            }
        }
    }
    var ai = oi(zr)
      , ui = oi(Dr);
    function ci(t) {
        return function(n, e) {
            var r = t((n = pr(n)).h, (e = pr(e)).h)
              , i = Dr(n.c, e.c)
              , o = Dr(n.l, e.l)
              , a = Dr(n.opacity, e.opacity);
            return function(t) {
                return n.h = r(t),
                n.c = i(t),
                n.l = o(t),
                n.opacity = a(t),
                n + ""
            }
        }
    }
    var fi = ci(zr)
      , si = ci(Dr);
    function li(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Ar(n)).h, (r = Ar(r)).h)
                  , o = Dr(n.s, r.s)
                  , a = Dr(n.l, r.l)
                  , u = Dr(n.opacity, r.opacity);
                return function(t) {
                    return n.h = i(t),
                    n.s = o(t),
                    n.l = a(Math.pow(t, e)),
                    n.opacity = u(t),
                    n + ""
                }
            }
            return e = +e,
            r.gamma = n,
            r
        }(1)
    }
    var hi = li(zr)
      , di = li(Dr);
    function pi(t, n) {
        void 0 === n && (n = t,
        t = Vr);
        for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r; )
            o[e] = t(i, i = n[++e]);
        return function(t) {
            var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
            return o[n](t - n)
        }
    }
    var gi, yi, vi = 0, _i = 0, bi = 0, mi = 1e3, xi = 0, wi = 0, Mi = 0, Ti = "object" == typeof performance && performance.now ? performance : Date, Ai = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
        setTimeout(t, 17)
    }
    ;
    function Si() {
        return wi || (Ai(Ei),
        wi = Ti.now() + Mi)
    }
    function Ei() {
        wi = 0
    }
    function Ni() {
        this._call = this._time = this._next = null
    }
    function ki(t, n, e) {
        var r = new Ni;
        return r.restart(t, n, e),
        r
    }
    function Ci() {
        Si(),
        ++vi;
        for (var t, n = gi; n; )
            (t = wi - n._time) >= 0 && n._call.call(void 0, t),
            n = n._next;
        --vi
    }
    function Pi() {
        wi = (xi = Ti.now()) + Mi,
        vi = _i = 0;
        try {
            Ci()
        } finally {
            vi = 0,
            function() {
                var t, n, e = gi, r = 1 / 0;
                for (; e; )
                    e._call ? (r > e._time && (r = e._time),
                    t = e,
                    e = e._next) : (n = e._next,
                    e._next = null,
                    e = t ? t._next = n : gi = n);
                yi = t,
                $i(r)
            }(),
            wi = 0
        }
    }
    function zi() {
        var t = Ti.now()
          , n = t - xi;
        n > mi && (Mi -= n,
        xi = t)
    }
    function $i(t) {
        vi || (_i && (_i = clearTimeout(_i)),
        t - wi > 24 ? (t < 1 / 0 && (_i = setTimeout(Pi, t - Ti.now() - Mi)),
        bi && (bi = clearInterval(bi))) : (bi || (xi = Ti.now(),
        bi = setInterval(zi, mi)),
        vi = 1,
        Ai(Pi)))
    }
    function Di(t, n, e) {
        var r = new Ni;
        return n = null == n ? 0 : +n,
        r.restart((e=>{
            r.stop(),
            t(e + n)
        }
        ), n, e),
        r
    }
    Ni.prototype = ki.prototype = {
        constructor: Ni,
        restart: function(t, n, e) {
            if ("function" != typeof t)
                throw new TypeError("callback is not a function");
            e = (null == e ? Si() : +e) + (null == n ? 0 : +n),
            this._next || yi === this || (yi ? yi._next = this : gi = this,
            yi = this),
            this._call = t,
            this._time = e,
            $i()
        },
        stop: function() {
            this._call && (this._call = null,
            this._time = 1 / 0,
            $i())
        }
    };
    var Ri = Dt("start", "end", "cancel", "interrupt")
      , Fi = []
      , qi = 0
      , Ui = 1
      , Ii = 2
      , Oi = 3
      , Bi = 4
      , Yi = 5
      , Li = 6;
    function ji(t, n, e, r, i, o) {
        var a = t.__transition;
        if (a) {
            if (e in a)
                return
        } else
            t.__transition = {};
        !function(t, n, e) {
            var r, i = t.__transition;
            function o(t) {
                e.state = Ui,
                e.timer.restart(a, e.delay, e.time),
                e.delay <= t && a(t - e.delay)
            }
            function a(o) {
                var f, s, l, h;
                if (e.state !== Ui)
                    return c();
                for (f in i)
                    if ((h = i[f]).name === e.name) {
                        if (h.state === Oi)
                            return Di(a);
                        h.state === Bi ? (h.state = Li,
                        h.timer.stop(),
                        h.on.call("interrupt", t, t.__data__, h.index, h.group),
                        delete i[f]) : +f < n && (h.state = Li,
                        h.timer.stop(),
                        h.on.call("cancel", t, t.__data__, h.index, h.group),
                        delete i[f])
                    }
                if (Di((function() {
                    e.state === Oi && (e.state = Bi,
                    e.timer.restart(u, e.delay, e.time),
                    u(o))
                }
                )),
                e.state = Ii,
                e.on.call("start", t, t.__data__, e.index, e.group),
                e.state === Ii) {
                    for (e.state = Oi,
                    r = new Array(l = e.tween.length),
                    f = 0,
                    s = -1; f < l; ++f)
                        (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                    r.length = s + 1
                }
            }
            function u(n) {
                for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(c),
                e.state = Yi,
                1), o = -1, a = r.length; ++o < a; )
                    r[o].call(t, i);
                e.state === Yi && (e.on.call("end", t, t.__data__, e.index, e.group),
                c())
            }
            function c() {
                for (var r in e.state = Li,
                e.timer.stop(),
                delete i[n],
                i)
                    return;
                delete t.__transition
            }
            i[n] = e,
            e.timer = ki(o, 0, e.time)
        }(t, e, {
            name: n,
            index: r,
            group: i,
            on: Ri,
            tween: Fi,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: qi
        })
    }
    function Hi(t, n) {
        var e = Gi(t, n);
        if (e.state > qi)
            throw new Error("too late; already scheduled");
        return e
    }
    function Xi(t, n) {
        var e = Gi(t, n);
        if (e.state > Oi)
            throw new Error("too late; already running");
        return e
    }
    function Gi(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]))
            throw new Error("transition not found");
        return e
    }
    function Vi(t, n) {
        var e, r, i, o = t.__transition, a = !0;
        if (o) {
            for (i in n = null == n ? null : n + "",
            o)
                (e = o[i]).name === n ? (r = e.state > Ii && e.state < Yi,
                e.state = Li,
                e.timer.stop(),
                e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group),
                delete o[i]) : a = !1;
            a && delete t.__transition
        }
    }
    function Wi(t, n) {
        var e, r;
        return function() {
            var i = Xi(this, t)
              , o = i.tween;
            if (o !== e)
                for (var a = 0, u = (r = e = o).length; a < u; ++a)
                    if (r[a].name === n) {
                        (r = r.slice()).splice(a, 1);
                        break
                    }
            i.tween = r
        }
    }
    function Zi(t, n, e) {
        var r, i;
        if ("function" != typeof e)
            throw new Error;
        return function() {
            var o = Xi(this, t)
              , a = o.tween;
            if (a !== r) {
                i = (r = a).slice();
                for (var u = {
                    name: n,
                    value: e
                }, c = 0, f = i.length; c < f; ++c)
                    if (i[c].name === n) {
                        i[c] = u;
                        break
                    }
                c === f && i.push(u)
            }
            o.tween = i
        }
    }
    function Ki(t, n, e) {
        var r = t._id;
        return t.each((function() {
            var t = Xi(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }
        )),
        function(t) {
            return Gi(t, r).value[n]
        }
    }
    function Qi(t, n) {
        var e;
        return ("number" == typeof n ? Lr : n instanceof $e ? Rr : (e = $e(n)) ? (n = e,
        Rr) : Gr)(t, n)
    }
    function Ji(t) {
        return function() {
            this.removeAttribute(t)
        }
    }
    function to(t) {
        return function() {
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function no(t, n, e) {
        var r, i, o = e + "";
        return function() {
            var a = this.getAttribute(t);
            return a === o ? null : a === r ? i : i = n(r = a, e)
        }
    }
    function eo(t, n, e) {
        var r, i, o = e + "";
        return function() {
            var a = this.getAttributeNS(t.space, t.local);
            return a === o ? null : a === r ? i : i = n(r = a, e)
        }
    }
    function ro(t, n, e) {
        var r, i, o;
        return function() {
            var a, u, c = e(this);
            if (null != c)
                return (a = this.getAttribute(t)) === (u = c + "") ? null : a === r && u === i ? o : (i = u,
                o = n(r = a, c));
            this.removeAttribute(t)
        }
    }
    function io(t, n, e) {
        var r, i, o;
        return function() {
            var a, u, c = e(this);
            if (null != c)
                return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "") ? null : a === r && u === i ? o : (i = u,
                o = n(r = a, c));
            this.removeAttributeNS(t.space, t.local)
        }
    }
    function oo(t, n) {
        var e, r;
        function i() {
            var i = n.apply(this, arguments);
            return i !== r && (e = (r = i) && function(t, n) {
                return function(e) {
                    this.setAttributeNS(t.space, t.local, n.call(this, e))
                }
            }(t, i)),
            e
        }
        return i._value = n,
        i
    }
    function ao(t, n) {
        var e, r;
        function i() {
            var i = n.apply(this, arguments);
            return i !== r && (e = (r = i) && function(t, n) {
                return function(e) {
                    this.setAttribute(t, n.call(this, e))
                }
            }(t, i)),
            e
        }
        return i._value = n,
        i
    }
    function uo(t, n) {
        return function() {
            Hi(this, t).delay = +n.apply(this, arguments)
        }
    }
    function co(t, n) {
        return n = +n,
        function() {
            Hi(this, t).delay = n
        }
    }
    function fo(t, n) {
        return function() {
            Xi(this, t).duration = +n.apply(this, arguments)
        }
    }
    function so(t, n) {
        return n = +n,
        function() {
            Xi(this, t).duration = n
        }
    }
    var lo = Zn.prototype.constructor;
    function ho(t) {
        return function() {
            this.style.removeProperty(t)
        }
    }
    var po = 0;
    function go(t, n, e, r) {
        this._groups = t,
        this._parents = n,
        this._name = e,
        this._id = r
    }
    function yo(t) {
        return Zn().transition(t)
    }
    function vo() {
        return ++po
    }
    var _o = Zn.prototype;
    go.prototype = yo.prototype = {
        constructor: go,
        select: function(t) {
            var n = this._name
              , e = this._id;
            "function" != typeof t && (t = Ht(t));
            for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
                for (var u, c, f = r[a], s = f.length, l = o[a] = new Array(s), h = 0; h < s; ++h)
                    (u = f[h]) && (c = t.call(u, u.__data__, h, f)) && ("__data__"in u && (c.__data__ = u.__data__),
                    l[h] = c,
                    ji(l[h], n, e, h, l, Gi(u, e)));
            return new go(o,this._parents,n,e)
        },
        selectAll: function(t) {
            var n = this._name
              , e = this._id;
            "function" != typeof t && (t = Vt(t));
            for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
                for (var c, f = r[u], s = f.length, l = 0; l < s; ++l)
                    if (c = f[l]) {
                        for (var h, d = t.call(c, c.__data__, l, f), p = Gi(c, e), g = 0, y = d.length; g < y; ++g)
                            (h = d[g]) && ji(h, n, e, g, d, p);
                        o.push(d),
                        a.push(c)
                    }
            return new go(o,a,n,e)
        },
        selectChild: _o.selectChild,
        selectChildren: _o.selectChildren,
        filter: function(t) {
            "function" != typeof t && (t = Wt(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f)
                    (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
            return new go(r,this._parents,this._name,this._id)
        },
        merge: function(t) {
            if (t._id !== this._id)
                throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u)
                for (var c, f = n[u], s = e[u], l = f.length, h = a[u] = new Array(l), d = 0; d < l; ++d)
                    (c = f[d] || s[d]) && (h[d] = c);
            for (; u < r; ++u)
                a[u] = n[u];
            return new go(a,this._parents,this._name,this._id)
        },
        selection: function() {
            return new lo(this._groups,this._parents)
        },
        transition: function() {
            for (var t = this._name, n = this._id, e = vo(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
                    if (a = u[f]) {
                        var s = Gi(a, n);
                        ji(a, t, e, f, u, {
                            time: s.time + s.delay + s.duration,
                            delay: 0,
                            duration: s.duration,
                            ease: s.ease
                        })
                    }
            return new go(r,this._parents,t,e)
        },
        call: _o.call,
        nodes: _o.nodes,
        node: _o.node,
        size: _o.size,
        empty: _o.empty,
        each: _o.each,
        on: function(t, n) {
            var e = this._id;
            return arguments.length < 2 ? Gi(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                var r, i, o = function(t) {
                    return (t + "").trim().split(/^|\s+/).every((function(t) {
                        var n = t.indexOf(".");
                        return n >= 0 && (t = t.slice(0, n)),
                        !t || "start" === t
                    }
                    ))
                }(n) ? Hi : Xi;
                return function() {
                    var a = o(this, t)
                      , u = a.on;
                    u !== r && (i = (r = u).copy()).on(n, e),
                    a.on = i
                }
            }(e, t, n))
        },
        attr: function(t, n) {
            var e = Ot(t)
              , r = "transform" === e ? ei : Qi;
            return this.attrTween(t, "function" == typeof n ? (e.local ? io : ro)(e, r, Ki(this, "attr." + t, n)) : null == n ? (e.local ? to : Ji)(e) : (e.local ? eo : no)(e, r, n))
        },
        attrTween: function(t, n) {
            var e = "attr." + t;
            if (arguments.length < 2)
                return (e = this.tween(e)) && e._value;
            if (null == n)
                return this.tween(e, null);
            if ("function" != typeof n)
                throw new Error;
            var r = Ot(t);
            return this.tween(e, (r.local ? oo : ao)(r, n))
        },
        style: function(t, n, e) {
            var r = "transform" == (t += "") ? ni : Qi;
            return null == n ? this.styleTween(t, function(t, n) {
                var e, r, i;
                return function() {
                    var o = bn(this, t)
                      , a = (this.style.removeProperty(t),
                    bn(this, t));
                    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a)
                }
            }(t, r)).on("end.style." + t, ho(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
                var r, i, o;
                return function() {
                    var a = bn(this, t)
                      , u = e(this)
                      , c = u + "";
                    return null == u && (this.style.removeProperty(t),
                    c = u = bn(this, t)),
                    a === c ? null : a === r && c === i ? o : (i = c,
                    o = n(r = a, u))
                }
            }(t, r, Ki(this, "style." + t, n))).each(function(t, n) {
                var e, r, i, o, a = "style." + n, u = "end." + a;
                return function() {
                    var c = Xi(this, t)
                      , f = c.on
                      , s = null == c.value[a] ? o || (o = ho(n)) : void 0;
                    f === e && i === s || (r = (e = f).copy()).on(u, i = s),
                    c.on = r
                }
            }(this._id, t)) : this.styleTween(t, function(t, n, e) {
                var r, i, o = e + "";
                return function() {
                    var a = bn(this, t);
                    return a === o ? null : a === r ? i : i = n(r = a, e)
                }
            }(t, r, n), e).on("end.style." + t, null)
        },
        styleTween: function(t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2)
                return (r = this.tween(r)) && r._value;
            if (null == n)
                return this.tween(r, null);
            if ("function" != typeof n)
                throw new Error;
            return this.tween(r, function(t, n, e) {
                var r, i;
                function o() {
                    var o = n.apply(this, arguments);
                    return o !== i && (r = (i = o) && function(t, n, e) {
                        return function(r) {
                            this.style.setProperty(t, n.call(this, r), e)
                        }
                    }(t, o, e)),
                    r
                }
                return o._value = n,
                o
            }(t, n, null == e ? "" : e))
        },
        text: function(t) {
            return this.tween("text", "function" == typeof t ? function(t) {
                return function() {
                    var n = t(this);
                    this.textContent = null == n ? "" : n
                }
            }(Ki(this, "text", t)) : function(t) {
                return function() {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        textTween: function(t) {
            var n = "text";
            if (arguments.length < 1)
                return (n = this.tween(n)) && n._value;
            if (null == t)
                return this.tween(n, null);
            if ("function" != typeof t)
                throw new Error;
            return this.tween(n, function(t) {
                var n, e;
                function r() {
                    var r = t.apply(this, arguments);
                    return r !== e && (n = (e = r) && function(t) {
                        return function(n) {
                            this.textContent = t.call(this, n)
                        }
                    }(r)),
                    n
                }
                return r._value = t,
                r
            }(t))
        },
        remove: function() {
            return this.on("end.remove", function(t) {
                return function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t)
                            return;
                    n && n.removeChild(this)
                }
            }(this._id))
        },
        tween: function(t, n) {
            var e = this._id;
            if (t += "",
            arguments.length < 2) {
                for (var r, i = Gi(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
                    if ((r = i[o]).name === t)
                        return r.value;
                return null
            }
            return this.each((null == n ? Wi : Zi)(e, t, n))
        },
        delay: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? uo : co)(n, t)) : Gi(this.node(), n).delay
        },
        duration: function(t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? fo : so)(n, t)) : Gi(this.node(), n).duration
        },
        ease: function(t) {
            var n = this._id;
            return arguments.length ? this.each(function(t, n) {
                if ("function" != typeof n)
                    throw new Error;
                return function() {
                    Xi(this, t).ease = n
                }
            }(n, t)) : Gi(this.node(), n).ease
        },
        easeVarying: function(t) {
            if ("function" != typeof t)
                throw new Error;
            return this.each(function(t, n) {
                return function() {
                    var e = n.apply(this, arguments);
                    if ("function" != typeof e)
                        throw new Error;
                    Xi(this, t).ease = e
                }
            }(this._id, t))
        },
        end: function() {
            var t, n, e = this, r = e._id, i = e.size();
            return new Promise((function(o, a) {
                var u = {
                    value: a
                }
                  , c = {
                    value: function() {
                        0 == --i && o()
                    }
                };
                e.each((function() {
                    var e = Xi(this, r)
                      , i = e.on;
                    i !== t && ((n = (t = i).copy())._.cancel.push(u),
                    n._.interrupt.push(u),
                    n._.end.push(c)),
                    e.on = n
                }
                )),
                0 === i && o()
            }
            ))
        },
        [Symbol.iterator]: _o[Symbol.iterator]
    };
    function bo(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
    }
    function mo(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }
    var xo = function t(n) {
        function e(t) {
            return Math.pow(t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    }(3)
      , wo = function t(n) {
        function e(t) {
            return 1 - Math.pow(1 - t, n)
        }
        return n = +n,
        e.exponent = t,
        e
    }(3)
      , Mo = function t(n) {
        function e(t) {
            return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
        }
        return n = +n,
        e.exponent = t,
        e
    }(3)
      , To = Math.PI
      , Ao = To / 2;
    function So(t) {
        return (1 - Math.cos(To * t)) / 2
    }
    function Eo(t) {
        return 1.0009775171065494 * (Math.pow(2, -10 * t) - .0009765625)
    }
    function No(t) {
        return ((t *= 2) <= 1 ? Eo(1 - t) : 2 - Eo(t - 1)) / 2
    }
    function ko(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }
    var Co = 4 / 11
      , Po = 6 / 11
      , zo = 8 / 11
      , $o = 3 / 4
      , Do = 9 / 11
      , Ro = 10 / 11
      , Fo = 15 / 16
      , qo = 21 / 22
      , Uo = 63 / 64
      , Io = 1 / Co / Co;
    function Oo(t) {
        return (t = +t) < Co ? Io * t * t : t < zo ? Io * (t -= Po) * t + $o : t < Ro ? Io * (t -= Do) * t + Fo : Io * (t -= qo) * t + Uo
    }
    var Bo = 1.70158
      , Yo = function t(n) {
        function e(t) {
            return (t = +t) * t * (n * (t - 1) + t)
        }
        return n = +n,
        e.overshoot = t,
        e
    }(Bo)
      , Lo = function t(n) {
        function e(t) {
            return --t * t * ((t + 1) * n + t) + 1
        }
        return n = +n,
        e.overshoot = t,
        e
    }(Bo)
      , jo = function t(n) {
        function e(t) {
            return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        }
        return n = +n,
        e.overshoot = t,
        e
    }(Bo)
      , Ho = 2 * Math.PI
      , Xo = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ho);
        function i(t) {
            return n;
            // return n * Eo(---t) * Math.sin((r - t) / e)
        }
        return i.amplitude = function(n) {
            return t(n, e * Ho)
        }
        ,
        i.period = function(e) {
            return t(n, e)
        }
        ,
        i
    }(1, .3)
      , Go = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ho);
        function i(t) {
            return 1 - n * Eo(t = +t) * Math.sin((t + r) / e)
        }
        return i.amplitude = function(n) {
            return t(n, e * Ho)
        }
        ,
        i.period = function(e) {
            return t(n, e)
        }
        ,
        i
    }(1, .3)
      , Vo = function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Ho);
        function i(t) {
            return ((t = 2 * t - 1) < 0 ? n * Eo(-t) * Math.sin((r - t) / e) : 2 - n * Eo(t) * Math.sin((r + t) / e)) / 2
        }
        return i.amplitude = function(n) {
            return t(n, e * Ho)
        }
        ,
        i.period = function(e) {
            return t(n, e)
        }
        ,
        i
    }(1, .3)
      , Wo = {
        time: null,
        delay: 0,
        duration: 250,
        ease: mo
    };
    function Zo(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); )
            if (!(t = t.parentNode))
                throw new Error(`transition ${n} not found`);
        return e
    }
    Zn.prototype.interrupt = function(t) {
        return this.each((function() {
            Vi(this, t)
        }
        ))
    }
    ,
    Zn.prototype.transition = function(t) {
        var n, e;
        t instanceof go ? (n = t._id,
        t = t._name) : (n = vo(),
        (e = Wo).time = Si(),
        t = null == t ? null : t + "");
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
            for (var a, u = r[o], c = u.length, f = 0; f < c; ++f)
                (a = u[f]) && ji(a, t, n, f, u, e || Zo(a, n));
        return new go(r,this._parents,t,n)
    }
    ;
    var Ko = [null];
    var Qo = t=>()=>t;
    function Jo(t, {sourceEvent: n, target: e, selection: r, mode: i, dispatch: o}) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            selection: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            mode: {
                value: i,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: o
            }
        })
    }
    function ta(t) {
        t.preventDefault(),
        t.stopImmediatePropagation()
    }
    var na = {
        name: "drag"
    }
      , ea = {
        name: "space"
    }
      , ra = {
        name: "handle"
    }
      , ia = {
        name: "center"
    };
    const {abs: oa, max: aa, min: ua} = Math;
    function ca(t) {
        return [+t[0], +t[1]]
    }
    function fa(t) {
        return [ca(t[0]), ca(t[1])]
    }
    var sa = {
        name: "x",
        handles: ["w", "e"].map(_a),
        input: function(t, n) {
            return null == t ? null : [[+t[0], n[0][1]], [+t[1], n[1][1]]]
        },
        output: function(t) {
            return t && [t[0][0], t[1][0]]
        }
    }
      , la = {
        name: "y",
        handles: ["n", "s"].map(_a),
        input: function(t, n) {
            return null == t ? null : [[n[0][0], +t[0]], [n[1][0], +t[1]]]
        },
        output: function(t) {
            return t && [t[0][1], t[1][1]]
        }
    }
      , ha = {
        name: "xy",
        handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(_a),
        input: function(t) {
            return null == t ? null : fa(t)
        },
        output: function(t) {
            return t
        }
    }
      , da = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }
      , pa = {
        e: "w",
        w: "e",
        nw: "ne",
        ne: "nw",
        se: "sw",
        sw: "se"
    }
      , ga = {
        n: "s",
        s: "n",
        nw: "sw",
        ne: "se",
        se: "ne",
        sw: "nw"
    }
      , ya = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1
    }
      , va = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1
    };
    function _a(t) {
        return {
            type: t
        }
    }
    function ba(t) {
        return !t.ctrlKey && !t.button
    }
    function ma() {
        var t = this.ownerSVGElement || this;
        return t.hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
    }
    function xa() {
        return navigator.maxTouchPoints || "ontouchstart"in this
    }
    function wa(t) {
        for (; !t.__brush; )
            if (!(t = t.parentNode))
                return;
        return t.__brush
    }
    function Ma(t) {
        var n, e = ma, r = ba, i = xa, o = !0, a = Dt("start", "brush", "end"), u = 6;
        function c(n) {
            var e = n.property("__brush", g).selectAll(".overlay").data([_a("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", da.overlay).merge(e).each((function() {
                var t = wa(this).extent;
                Kn(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
            }
            )),
            n.selectAll(".selection").data([_a("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", da.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var r = n.selectAll(".handle").data(t.handles, (function(t) {
                return t.type
            }
            ));
            r.exit().remove(),
            r.enter().append("rect").attr("class", (function(t) {
                return "handle handle--" + t.type
            }
            )).attr("cursor", (function(t) {
                return da[t.type]
            }
            )),
            n.each(f).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", h).filter(i).on("touchstart.brush", h).on("touchmove.brush", d).on("touchend.brush touchcancel.brush", p).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function f() {
            var t = Kn(this)
              , n = wa(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]),
            t.selectAll(".handle").style("display", null).attr("x", (function(t) {
                return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2
            }
            )).attr("y", (function(t) {
                return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2
            }
            )).attr("width", (function(t) {
                return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u : u
            }
            )).attr("height", (function(t) {
                return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u : u
            }
            ))) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }
        function s(t, n, e) {
            var r = t.__brush.emitter;
            return !r || e && r.clean ? new l(t,n,e) : r
        }
        function l(t, n, e) {
            this.that = t,
            this.args = n,
            this.state = t.__brush,
            this.active = 0,
            this.clean = e
        }
        function h(e) {
            if ((!n || e.touches) && r.apply(this, arguments)) {
                var i, a, u, c, l, h, d, p, g, y, v, _ = this, b = e.target.__data__.type, m = "selection" === (o && e.metaKey ? b = "overlay" : b) ? na : o && e.altKey ? ia : ra, x = t === la ? null : ya[b], w = t === sa ? null : va[b], M = wa(_), T = M.extent, A = M.selection, S = T[0][0], E = T[0][1], N = T[1][0], k = T[1][1], C = 0, P = 0, z = x && w && o && e.shiftKey, $ = Array.from(e.touches || [e], (t=>{
                    const n = t.identifier;
                    return (t = ee(t, _)).point0 = t.slice(),
                    t.identifier = n,
                    t
                }
                ));
                Vi(_);
                var D = s(_, arguments, !0).beforestart();
                if ("overlay" === b) {
                    A && (g = !0);
                    const n = [$[0], $[1] || $[0]];
                    M.selection = A = [[i = t === la ? S : ua(n[0][0], n[1][0]), u = t === sa ? E : ua(n[0][1], n[1][1])], [l = t === la ? N : aa(n[0][0], n[1][0]), d = t === sa ? k : aa(n[0][1], n[1][1])]],
                    $.length > 1 && I(e)
                } else
                    i = A[0][0],
                    u = A[0][1],
                    l = A[1][0],
                    d = A[1][1];
                a = i,
                c = u,
                h = l,
                p = d;
                var R = Kn(_).attr("pointer-events", "none")
                  , F = R.selectAll(".overlay").attr("cursor", da[b]);
                if (e.touches)
                    D.moved = U,
                    D.ended = O;
                else {
                    var q = Kn(e.view).on("mousemove.brush", U, !0).on("mouseup.brush", O, !0);
                    o && q.on("keydown.brush", (function(t) {
                        switch (t.keyCode) {
                        case 16:
                            z = x && w;
                            break;
                        case 18:
                            m === ra && (x && (l = h - C * x,
                            i = a + C * x),
                            w && (d = p - P * w,
                            u = c + P * w),
                            m = ia,
                            I(t));
                            break;
                        case 32:
                            m !== ra && m !== ia || (x < 0 ? l = h - C : x > 0 && (i = a - C),
                            w < 0 ? d = p - P : w > 0 && (u = c - P),
                            m = ea,
                            F.attr("cursor", da.selection),
                            I(t));
                            break;
                        default:
                            return
                        }
                        ta(t)
                    }
                    ), !0).on("keyup.brush", (function(t) {
                        switch (t.keyCode) {
                        case 16:
                            z && (y = v = z = !1,
                            I(t));
                            break;
                        case 18:
                            m === ia && (x < 0 ? l = h : x > 0 && (i = a),
                            w < 0 ? d = p : w > 0 && (u = c),
                            m = ra,
                            I(t));
                            break;
                        case 32:
                            m === ea && (t.altKey ? (x && (l = h - C * x,
                            i = a + C * x),
                            w && (d = p - P * w,
                            u = c + P * w),
                            m = ia) : (x < 0 ? l = h : x > 0 && (i = a),
                            w < 0 ? d = p : w > 0 && (u = c),
                            m = ra),
                            F.attr("cursor", da[b]),
                            I(t));
                            break;
                        default:
                            return
                        }
                        ta(t)
                    }
                    ), !0),
                    ue(e.view)
                }
                f.call(_),
                D.start(e, m.name)
            }
            function U(t) {
                for (const n of t.changedTouches || [t])
                    for (const t of $)
                        t.identifier === n.identifier && (t.cur = ee(n, _));
                if (z && !y && !v && 1 === $.length) {
                    const t = $[0];
                    oa(t.cur[0] - t[0]) > oa(t.cur[1] - t[1]) ? v = !0 : y = !0
                }
                for (const t of $)
                    t.cur && (t[0] = t.cur[0],
                    t[1] = t.cur[1]);
                g = !0,
                ta(t),
                I(t)
            }
            function I(t) {
                const n = $[0]
                  , e = n.point0;
                var r;
                switch (C = n[0] - e[0],
                P = n[1] - e[1],
                m) {
                case ea:
                case na:
                    x && (C = aa(S - i, ua(N - l, C)),
                    a = i + C,
                    h = l + C),
                    w && (P = aa(E - u, ua(k - d, P)),
                    c = u + P,
                    p = d + P);
                    break;
                case ra:
                    $[1] ? (x && (a = aa(S, ua(N, $[0][0])),
                    h = aa(S, ua(N, $[1][0])),
                    x = 1),
                    w && (c = aa(E, ua(k, $[0][1])),
                    p = aa(E, ua(k, $[1][1])),
                    w = 1)) : (x < 0 ? (C = aa(S - i, ua(N - i, C)),
                    a = i + C,
                    h = l) : x > 0 && (C = aa(S - l, ua(N - l, C)),
                    a = i,
                    h = l + C),
                    w < 0 ? (P = aa(E - u, ua(k - u, P)),
                    c = u + P,
                    p = d) : w > 0 && (P = aa(E - d, ua(k - d, P)),
                    c = u,
                    p = d + P));
                    break;
                case ia:
                    x && (a = aa(S, ua(N, i - C * x)),
                    h = aa(S, ua(N, l + C * x))),
                    w && (c = aa(E, ua(k, u - P * w)),
                    p = aa(E, ua(k, d + P * w)))
                }
                h < a && (x *= -1,
                r = i,
                i = l,
                l = r,
                r = a,
                a = h,
                h = r,
                b in pa && F.attr("cursor", da[b = pa[b]])),
                p < c && (w *= -1,
                r = u,
                u = d,
                d = r,
                r = c,
                c = p,
                p = r,
                b in ga && F.attr("cursor", da[b = ga[b]])),
                M.selection && (A = M.selection),
                y && (a = A[0][0],
                h = A[1][0]),
                v && (c = A[0][1],
                p = A[1][1]),
                A[0][0] === a && A[0][1] === c && A[1][0] === h && A[1][1] === p || (M.selection = [[a, c], [h, p]],
                f.call(_),
                D.brush(t, m.name))
            }
            function O(t) {
                if (function(t) {
                    t.stopImmediatePropagation()
                }(t),
                t.touches) {
                    if (t.touches.length)
                        return;
                    n && clearTimeout(n),
                    n = setTimeout((function() {
                        n = null
                    }
                    ), 500)
                } else
                    ce(t.view, g),
                    q.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                R.attr("pointer-events", "all"),
                F.attr("cursor", da.overlay),
                M.selection && (A = M.selection),
                function(t) {
                    return t[0][0] === t[1][0] || t[0][1] === t[1][1]
                }(A) && (M.selection = null,
                f.call(_)),
                D.end(t, m.name)
            }
        }
        function d(t) {
            s(this, arguments).moved(t)
        }
        function p(t) {
            s(this, arguments).ended(t)
        }
        function g() {
            var n = this.__brush || {
                selection: null
            };
            return n.extent = fa(e.apply(this, arguments)),
            n.dim = t,
            n
        }
        return c.move = function(n, e, r) {
            n.tween ? n.on("start.brush", (function(t) {
                s(this, arguments).beforestart().start(t)
            }
            )).on("interrupt.brush end.brush", (function(t) {
                s(this, arguments).end(t)
            }
            )).tween("brush", (function() {
                var n = this
                  , r = n.__brush
                  , i = s(n, arguments)
                  , o = r.selection
                  , a = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent)
                  , u = Vr(o, a);
                function c(t) {
                    r.selection = 1 === t && null === a ? null : u(t),
                    f.call(n),
                    i.brush()
                }
                return null !== o && null !== a ? c : c(1)
            }
            )) : n.each((function() {
                var n = this
                  , i = arguments
                  , o = n.__brush
                  , a = t.input("function" == typeof e ? e.apply(n, i) : e, o.extent)
                  , u = s(n, i).beforestart();
                Vi(n),
                o.selection = null === a ? null : a,
                f.call(n),
                u.start(r).brush(r).end(r)
            }
            ))
        }
        ,
        c.clear = function(t, n) {
            c.move(t, null, n)
        }
        ,
        l.prototype = {
            beforestart: function() {
                return 1 == ++this.active && (this.state.emitter = this,
                this.starting = !0),
                this
            },
            start: function(t, n) {
                return this.starting ? (this.starting = !1,
                this.emit("start", t, n)) : this.emit("brush", t),
                this
            },
            brush: function(t, n) {
                return this.emit("brush", t, n),
                this
            },
            end: function(t, n) {
                return 0 == --this.active && (delete this.state.emitter,
                this.emit("end", t, n)),
                this
            },
            emit: function(n, e, r) {
                var i = Kn(this.that).datum();
                a.call(n, this.that, new Jo(n,{
                    sourceEvent: e,
                    target: c,
                    selection: t.output(this.state.selection),
                    mode: r,
                    dispatch: a
                }), i)
            }
        },
        c.extent = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : Qo(fa(t)),
            c) : e
        }
        ,
        c.filter = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : Qo(!!t),
            c) : r
        }
        ,
        c.touchable = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : Qo(!!t),
            c) : i
        }
        ,
        c.handleSize = function(t) {
            return arguments.length ? (u = +t,
            c) : u
        }
        ,
        c.keyModifiers = function(t) {
            return arguments.length ? (o = !!t,
            c) : o
        }
        ,
        c.on = function() {
            var t = a.on.apply(a, arguments);
            return t === a ? c : t
        }
        ,
        c
    }
    var Ta = Math.abs
      , Aa = Math.cos
      , Sa = Math.sin
      , Ea = Math.PI
      , Na = Ea / 2
      , ka = 2 * Ea
      , Ca = Math.max
      , Pa = 1e-12;
    function za(t, n) {
        return Array.from({
            length: n - t
        }, ((n,e)=>t + e))
    }
    function $a(t, n) {
        var e = 0
          , r = null
          , i = null
          , o = null;
        function a(a) {
            var u, c = a.length, f = new Array(c), s = za(0, c), l = new Array(c * c), h = new Array(c), d = 0;
            a = Float64Array.from({
                length: c * c
            }, n ? (t,n)=>a[n % c][n / c | 0] : (t,n)=>a[n / c | 0][n % c]);
            for (let n = 0; n < c; ++n) {
                let e = 0;
                for (let r = 0; r < c; ++r)
                    e += a[n * c + r] + t * a[r * c + n];
                d += f[n] = e
            }
            u = (d = Ca(0, ka - e * c) / d) ? e : ka / c;
            {
                let n = 0;
                r && s.sort(((t,n)=>r(f[t], f[n])));
                for (const e of s) {
                    const r = n;
                    if (t) {
                        const t = za(1 + ~c, c).filter((t=>t < 0 ? a[~t * c + e] : a[e * c + t]));
                        i && t.sort(((t,n)=>i(t < 0 ? -a[~t * c + e] : a[e * c + t], n < 0 ? -a[~n * c + e] : a[e * c + n])));
                        for (const r of t)
                            if (r < 0) {
                                (l[~r * c + e] || (l[~r * c + e] = {
                                    source: null,
                                    target: null
                                })).target = {
                                    index: e,
                                    startAngle: n,
                                    endAngle: n += a[~r * c + e] * d,
                                    value: a[~r * c + e]
                                }
                            } else {
                                (l[e * c + r] || (l[e * c + r] = {
                                    source: null,
                                    target: null
                                })).source = {
                                    index: e,
                                    startAngle: n,
                                    endAngle: n += a[e * c + r] * d,
                                    value: a[e * c + r]
                                }
                            }
                        h[e] = {
                            index: e,
                            startAngle: r,
                            endAngle: n,
                            value: f[e]
                        }
                    } else {
                        const t = za(0, c).filter((t=>a[e * c + t] || a[t * c + e]));
                        i && t.sort(((t,n)=>i(a[e * c + t], a[e * c + n])));
                        for (const r of t) {
                            let t;
                            if (e < r ? (t = l[e * c + r] || (l[e * c + r] = {
                                source: null,
                                target: null
                            }),
                            t.source = {
                                index: e,
                                startAngle: n,
                                endAngle: n += a[e * c + r] * d,
                                value: a[e * c + r]
                            }) : (t = l[r * c + e] || (l[r * c + e] = {
                                source: null,
                                target: null
                            }),
                            t.target = {
                                index: e,
                                startAngle: n,
                                endAngle: n += a[e * c + r] * d,
                                value: a[e * c + r]
                            },
                            e === r && (t.source = t.target)),
                            t.source && t.target && t.source.value < t.target.value) {
                                const n = t.source;
                                t.source = t.target,
                                t.target = n
                            }
                        }
                        h[e] = {
                            index: e,
                            startAngle: r,
                            endAngle: n,
                            value: f[e]
                        }
                    }
                    n += u
                }
            }
            return (l = Object.values(l)).groups = h,
            o ? l.sort(o) : l
        }
        return a.padAngle = function(t) {
            return arguments.length ? (e = Ca(0, t),
            a) : e
        }
        ,
        a.sortGroups = function(t) {
            return arguments.length ? (r = t,
            a) : r
        }
        ,
        a.sortSubgroups = function(t) {
            return arguments.length ? (i = t,
            a) : i
        }
        ,
        a.sortChords = function(t) {
            return arguments.length ? (null == t ? o = null : (n = t,
            o = function(t, e) {
                return n(t.source.value + t.target.value, e.source.value + e.target.value)
            }
            )._ = t,
            a) : o && o._;
            var n
        }
        ,
        a
    }
    const Da = Math.PI
      , Ra = 2 * Da
      , Fa = 1e-6
      , qa = Ra - Fa;
    function Ua(t) {
        this._ += t[0];
        for (let n = 1, e = t.length; n < e; ++n)
            this._ += arguments[n] + t[n]
    }
    let Ia = class {
        constructor(t) {
            this._x0 = this._y0 = this._x1 = this._y1 = null,
            this._ = "",
            this._append = null == t ? Ua : function(t) {
                let n = Math.floor(t);
                if (!(n >= 0))
                    throw new Error(`invalid digits: ${t}`);
                if (n > 15)
                    return Ua;
                const e = 10 ** n;
                return function(t) {
                    this._ += t[0];
                    for (let n = 1, r = t.length; n < r; ++n)
                        this._ += Math.round(arguments[n] * e) / e + t[n]
                }
            }(t)
        }
        moveTo(t, n) {
            this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`
        }
        closePath() {
            null !== this._x1 && (this._x1 = this._x0,
            this._y1 = this._y0,
            this._append`Z`)
        }
        lineTo(t, n) {
            this._append`L${this._x1 = +t},${this._y1 = +n}`
        }
        quadraticCurveTo(t, n, e, r) {
            this._append`Q${+t},${+n},${this._x1 = +e},${this._y1 = +r}`
        }
        bezierCurveTo(t, n, e, r, i, o) {
            this._append`C${+t},${+n},${+e},${+r},${this._x1 = +i},${this._y1 = +o}`
        }
        arcTo(t, n, e, r, i) {
            if (t = +t,
            n = +n,
            e = +e,
            r = +r,
            (i = +i) < 0)
                throw new Error(`negative radius: ${i}`);
            let o = this._x1
              , a = this._y1
              , u = e - t
              , c = r - n
              , f = o - t
              , s = a - n
              , l = f * f + s * s;
            if (null === this._x1)
                this._append`M${this._x1 = t},${this._y1 = n}`;
            else if (l > Fa)
                if (Math.abs(s * u - c * f) > Fa && i) {
                    let h = e - o
                      , d = r - a
                      , p = u * u + c * c
                      , g = h * h + d * d
                      , y = Math.sqrt(p)
                      , v = Math.sqrt(l)
                      , _ = i * Math.tan((Da - Math.acos((p + l - g) / (2 * y * v))) / 2)
                      , b = _ / v
                      , m = _ / y;
                    Math.abs(b - 1) > Fa && this._append`L${t + b * f},${n + b * s}`,
                    this._append`A${i},${i},0,0,${+(s * h > f * d)},${this._x1 = t + m * u},${this._y1 = n + m * c}`
                } else
                    this._append`L${this._x1 = t},${this._y1 = n}`;
            else
                ;
        }
        arc(t, n, e, r, i, o) {
            if (t = +t,
            n = +n,
            o = !!o,
            (e = +e) < 0)
                throw new Error(`negative radius: ${e}`);
            let a = e * Math.cos(r)
              , u = e * Math.sin(r)
              , c = t + a
              , f = n + u
              , s = 1 ^ o
              , l = o ? r - i : i - r;
            null === this._x1 ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Fa || Math.abs(this._y1 - f) > Fa) && this._append`L${c},${f}`,
            e && (l < 0 && (l = l % Ra + Ra),
            l > qa ? this._append`A${e},${e},0,1,${s},${t - a},${n - u}A${e},${e},0,1,${s},${this._x1 = c},${this._y1 = f}` : l > Fa && this._append`A${e},${e},0,${+(l >= Da)},${s},${this._x1 = t + e * Math.cos(i)},${this._y1 = n + e * Math.sin(i)}`)
        }
        rect(t, n, e, r) {
            this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${e = +e}v${+r}h${-e}Z`
        }
        toString() {
            return this._
        }
    }
    ;
    function Oa() {
        return new Ia
    }
    Oa.prototype = Ia.prototype;
    var Ba = Array.prototype.slice;
    function Ya(t) {
        return function() {
            return t
        }
    }
    function La(t) {
        return t.source
    }
    function ja(t) {
        return t.target
    }
    function Ha(t) {
        return t.radius
    }
    function Xa(t) {
        return t.startAngle
    }
    function Ga(t) {
        return t.endAngle
    }
    function Va() {
        return 0
    }
    function Wa() {
        return 10
    }
    function Za(t) {
        var n = La
          , e = ja
          , r = Ha
          , i = Ha
          , o = Xa
          , a = Ga
          , u = Va
          , c = null;
        function f() {
            var f, s = n.apply(this, arguments), l = e.apply(this, arguments), h = u.apply(this, arguments) / 2, d = Ba.call(arguments), p = +r.apply(this, (d[0] = s,
            d)), g = o.apply(this, d) - Na, y = a.apply(this, d) - Na, v = +i.apply(this, (d[0] = l,
            d)), _ = o.apply(this, d) - Na, b = a.apply(this, d) - Na;
            if (c || (c = f = Oa()),
            h > Pa && (Ta(y - g) > 2 * h + Pa ? y > g ? (g += h,
            y -= h) : (g -= h,
            y += h) : g = y = (g + y) / 2,
            Ta(b - _) > 2 * h + Pa ? b > _ ? (_ += h,
            b -= h) : (_ -= h,
            b += h) : _ = b = (_ + b) / 2),
            c.moveTo(p * Aa(g), p * Sa(g)),
            c.arc(0, 0, p, g, y),
            g !== _ || y !== b)
                if (t) {
                    var m = v - +t.apply(this, arguments)
                      , x = (_ + b) / 2;
                    c.quadraticCurveTo(0, 0, m * Aa(_), m * Sa(_)),
                    c.lineTo(v * Aa(x), v * Sa(x)),
                    c.lineTo(m * Aa(b), m * Sa(b))
                } else
                    c.quadraticCurveTo(0, 0, v * Aa(_), v * Sa(_)),
                    c.arc(0, 0, v, _, b);
            if (c.quadraticCurveTo(0, 0, p * Aa(g), p * Sa(g)),
            c.closePath(),
            f)
                return c = null,
                f + "" || null
        }
        return t && (f.headRadius = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : Ya(+n),
            f) : t
        }
        ),
        f.radius = function(t) {
            return arguments.length ? (r = i = "function" == typeof t ? t : Ya(+t),
            f) : r
        }
        ,
        f.sourceRadius = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : Ya(+t),
            f) : r
        }
        ,
        f.targetRadius = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : Ya(+t),
            f) : i
        }
        ,
        f.startAngle = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : Ya(+t),
            f) : o
        }
        ,
        f.endAngle = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : Ya(+t),
            f) : a
        }
        ,
        f.padAngle = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t : Ya(+t),
            f) : u
        }
        ,
        f.source = function(t) {
            return arguments.length ? (n = t,
            f) : n
        }
        ,
        f.target = function(t) {
            return arguments.length ? (e = t,
            f) : e
        }
        ,
        f.context = function(t) {
            return arguments.length ? (c = null == t ? null : t,
            f) : c
        }
        ,
        f
    }
    var Ka = Array.prototype.slice;
    function Qa(t, n) {
        return t - n
    }
    var Ja = t=>()=>t;
    function tu(t, n) {
        for (var e, r = -1, i = n.length; ++r < i; )
            if (e = nu(t, n[r]))
                return e;
        return 0
    }
    function nu(t, n) {
        for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
            var c = t[o]
              , f = c[0]
              , s = c[1]
              , l = t[u]
              , h = l[0]
              , d = l[1];
            if (eu(c, l, n))
                return 0;
            s > r != d > r && e < (h - f) * (r - s) / (d - s) + f && (i = -i)
        }
        return i
    }
    function eu(t, n, e) {
        var r, i, o, a;
        return function(t, n, e) {
            return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
        }(t, n, e) && (i = t[r = +(t[0] === n[0])],
        o = e[r],
        a = n[r],
        i <= o && o <= a || a <= o && o <= i)
    }
    function ru() {}
    var iu = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []];
    function ou() {
        var t = 1
          , n = 1
          , e = Q
          , r = u;
        function i(t) {
            var n = e(t);
            if (Array.isArray(n))
                n = n.slice().sort(Qa);
            else {
                const e = T(t, au);
                for (n = V(...K(e[0], e[1], n), n); n[n.length - 1] >= e[1]; )
                    n.pop();
                for (; n[1] < e[0]; )
                    n.shift()
            }
            return n.map((n=>o(t, n)))
        }
        function o(e, i) {
            const o = null == i ? NaN : +i;
            if (isNaN(o))
                throw new Error(`invalid value: ${i}`);
            var u = []
              , c = [];
            return function(e, r, i) {
                var o, u, c, f, s, l, h = new Array, d = new Array;
                o = u = -1,
                f = uu(e[0], r),
                iu[f << 1].forEach(p);
                for (; ++o < t - 1; )
                    c = f,
                    f = uu(e[o + 1], r),
                    iu[c | f << 1].forEach(p);
                iu[f << 0].forEach(p);
                for (; ++u < n - 1; ) {
                    for (o = -1,
                    f = uu(e[u * t + t], r),
                    s = uu(e[u * t], r),
                    iu[f << 1 | s << 2].forEach(p); ++o < t - 1; )
                        c = f,
                        f = uu(e[u * t + t + o + 1], r),
                        l = s,
                        s = uu(e[u * t + o + 1], r),
                        iu[c | f << 1 | s << 2 | l << 3].forEach(p);
                    iu[f | s << 3].forEach(p)
                }
                o = -1,
                s = e[u * t] >= r,
                iu[s << 2].forEach(p);
                for (; ++o < t - 1; )
                    l = s,
                    s = uu(e[u * t + o + 1], r),
                    iu[s << 2 | l << 3].forEach(p);
                function p(t) {
                    var n, e, r = [t[0][0] + o, t[0][1] + u], c = [t[1][0] + o, t[1][1] + u], f = a(r), s = a(c);
                    (n = d[f]) ? (e = h[s]) ? (delete d[n.end],
                    delete h[e.start],
                    n === e ? (n.ring.push(c),
                    i(n.ring)) : h[n.start] = d[e.end] = {
                        start: n.start,
                        end: e.end,
                        ring: n.ring.concat(e.ring)
                    }) : (delete d[n.end],
                    n.ring.push(c),
                    d[n.end = s] = n) : (n = h[s]) ? (e = d[f]) ? (delete h[n.start],
                    delete d[e.end],
                    n === e ? (n.ring.push(c),
                    i(n.ring)) : h[e.start] = d[n.end] = {
                        start: e.start,
                        end: n.end,
                        ring: e.ring.concat(n.ring)
                    }) : (delete h[n.start],
                    n.ring.unshift(r),
                    h[n.start = f] = n) : h[f] = d[s] = {
                        start: f,
                        end: s,
                        ring: [r, c]
                    }
                }
                iu[s << 3].forEach(p)
            }(e, o, (function(t) {
                r(t, e, o),
                function(t) {
                    for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e; )
                        r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
                    return r
                }(t) > 0 ? u.push([t]) : c.push(t)
            }
            )),
            c.forEach((function(t) {
                for (var n, e = 0, r = u.length; e < r; ++e)
                    if (-1 !== tu((n = u[e])[0], t))
                        return void n.push(t)
            }
            )),
            {
                type: "MultiPolygon",
                value: i,
                coordinates: u
            }
        }
        function a(n) {
            return 2 * n[0] + n[1] * (t + 1) * 4
        }
        function u(e, r, i) {
            e.forEach((function(e) {
                var o = e[0]
                  , a = e[1]
                  , u = 0 | o
                  , c = 0 | a
                  , f = cu(r[c * t + u]);
                o > 0 && o < t && u === o && (e[0] = fu(o, cu(r[c * t + u - 1]), f, i)),
                a > 0 && a < n && c === a && (e[1] = fu(a, cu(r[(c - 1) * t + u]), f, i))
            }
            ))
        }
        return i.contour = o,
        i.size = function(e) {
            if (!arguments.length)
                return [t, n];
            var r = Math.floor(e[0])
              , o = Math.floor(e[1]);
            if (!(r >= 0 && o >= 0))
                throw new Error("invalid size");
            return t = r,
            n = o,
            i
        }
        ,
        i.thresholds = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? Ja(Ka.call(t)) : Ja(t),
            i) : e
        }
        ,
        i.smooth = function(t) {
            return arguments.length ? (r = t ? u : ru,
            i) : r === u
        }
        ,
        i
    }
    function au(t) {
        return isFinite(t) ? t : NaN
    }
    function uu(t, n) {
        return null != t && +t >= n
    }
    function cu(t) {
        return null == t || isNaN(t = +t) ? -1 / 0 : t
    }
    function fu(t, n, e, r) {
        const i = r - n
          , o = e - n
          , a = isFinite(i) || isFinite(o) ? i / o : Math.sign(i) / Math.sign(o);
        return isNaN(a) ? t : t + a - .5
    }
    function su(t) {
        return t[0]
    }
    function lu(t) {
        return t[1]
    }
    function hu() {
        return 1
    }
    const du = 134217729
      , pu = 33306690738754706e-32;
    function gu(t, n, e, r, i) {
        let o, a, u, c, f = n[0], s = r[0], l = 0, h = 0;
        s > f == s > -f ? (o = f,
        f = n[++l]) : (o = s,
        s = r[++h]);
        let d = 0;
        if (l < t && h < e)
            for (s > f == s > -f ? (a = f + o,
            u = o - (a - f),
            f = n[++l]) : (a = s + o,
            u = o - (a - s),
            s = r[++h]),
            o = a,
            0 !== u && (i[d++] = u); l < t && h < e; )
                s > f == s > -f ? (a = o + f,
                c = a - o,
                u = o - (a - c) + (f - c),
                f = n[++l]) : (a = o + s,
                c = a - o,
                u = o - (a - c) + (s - c),
                s = r[++h]),
                o = a,
                0 !== u && (i[d++] = u);
        for (; l < t; )
            a = o + f,
            c = a - o,
            u = o - (a - c) + (f - c),
            f = n[++l],
            o = a,
            0 !== u && (i[d++] = u);
        for (; h < e; )
            a = o + s,
            c = a - o,
            u = o - (a - c) + (s - c),
            s = r[++h],
            o = a,
            0 !== u && (i[d++] = u);
        return 0 === o && 0 !== d || (i[d++] = o),
        d
    }
    function yu(t) {
        return new Float64Array(t)
    }
    const vu = 22204460492503146e-32
      , _u = 11093356479670487e-47
      , bu = yu(4)
      , mu = yu(8)
      , xu = yu(12)
      , wu = yu(16)
      , Mu = yu(4);
    function Tu(t, n, e, r, i, o) {
        const a = (n - o) * (e - i)
          , u = (t - i) * (r - o)
          , c = a - u;
        if (0 === a || 0 === u || a > 0 != u > 0)
            return c;
        const f = Math.abs(a + u);
        return Math.abs(c) >= 33306690738754716e-32 * f ? c : -function(t, n, e, r, i, o, a) {
            let u, c, f, s, l, h, d, p, g, y, v, _, b, m, x, w, M, T;
            const A = t - i
              , S = e - i
              , E = n - o
              , N = r - o;
            m = A * N,
            h = du * A,
            d = h - (h - A),
            p = A - d,
            h = du * N,
            g = h - (h - N),
            y = N - g,
            x = p * y - (m - d * g - p * g - d * y),
            w = E * S,
            h = du * E,
            d = h - (h - E),
            p = E - d,
            h = du * S,
            g = h - (h - S),
            y = S - g,
            M = p * y - (w - d * g - p * g - d * y),
            v = x - M,
            l = x - v,
            bu[0] = x - (v + l) + (l - M),
            _ = m + v,
            l = _ - m,
            b = m - (_ - l) + (v - l),
            v = b - w,
            l = b - v,
            bu[1] = b - (v + l) + (l - w),
            T = _ + v,
            l = T - _,
            bu[2] = _ - (T - l) + (v - l),
            bu[3] = T;
            let k = function(t, n) {
                let e = n[0];
                for (let r = 1; r < t; r++)
                    e += n[r];
                return e
            }(4, bu)
              , C = vu * a;
            if (k >= C || -k >= C)
                return k;
            if (l = t - A,
            u = t - (A + l) + (l - i),
            l = e - S,
            f = e - (S + l) + (l - i),
            l = n - E,
            c = n - (E + l) + (l - o),
            l = r - N,
            s = r - (N + l) + (l - o),
            0 === u && 0 === c && 0 === f && 0 === s)
                return k;
            if (C = _u * a + pu * Math.abs(k),
            k += A * s + N * u - (E * f + S * c),
            k >= C || -k >= C)
                return k;
            m = u * N,
            h = du * u,
            d = h - (h - u),
            p = u - d,
            h = du * N,
            g = h - (h - N),
            y = N - g,
            x = p * y - (m - d * g - p * g - d * y),
            w = c * S,
            h = du * c,
            d = h - (h - c),
            p = c - d,
            h = du * S,
            g = h - (h - S),
            y = S - g,
            M = p * y - (w - d * g - p * g - d * y),
            v = x - M,
            l = x - v,
            Mu[0] = x - (v + l) + (l - M),
            _ = m + v,
            l = _ - m,
            b = m - (_ - l) + (v - l),
            v = b - w,
            l = b - v,
            Mu[1] = b - (v + l) + (l - w),
            T = _ + v,
            l = T - _,
            Mu[2] = _ - (T - l) + (v - l),
            Mu[3] = T;
            const P = gu(4, bu, 4, Mu, mu);
            m = A * s,
            h = du * A,
            d = h - (h - A),
            p = A - d,
            h = du * s,
            g = h - (h - s),
            y = s - g,
            x = p * y - (m - d * g - p * g - d * y),
            w = E * f,
            h = du * E,
            d = h - (h - E),
            p = E - d,
            h = du * f,
            g = h - (h - f),
            y = f - g,
            M = p * y - (w - d * g - p * g - d * y),
            v = x - M,
            l = x - v,
            Mu[0] = x - (v + l) + (l - M),
            _ = m + v,
            l = _ - m,
            b = m - (_ - l) + (v - l),
            v = b - w,
            l = b - v,
            Mu[1] = b - (v + l) + (l - w),
            T = _ + v,
            l = T - _,
            Mu[2] = _ - (T - l) + (v - l),
            Mu[3] = T;
            const z = gu(P, mu, 4, Mu, xu);
            m = u * s,
            h = du * u,
            d = h - (h - u),
            p = u - d,
            h = du * s,
            g = h - (h - s),
            y = s - g,
            x = p * y - (m - d * g - p * g - d * y),
            w = c * f,
            h = du * c,
            d = h - (h - c),
            p = c - d,
            h = du * f,
            g = h - (h - f),
            y = f - g,
            M = p * y - (w - d * g - p * g - d * y),
            v = x - M,
            l = x - v,
            Mu[0] = x - (v + l) + (l - M),
            _ = m + v,
            l = _ - m,
            b = m - (_ - l) + (v - l),
            v = b - w,
            l = b - v,
            Mu[1] = b - (v + l) + (l - w),
            T = _ + v,
            l = T - _,
            Mu[2] = _ - (T - l) + (v - l),
            Mu[3] = T;
            const $ = gu(z, xu, 4, Mu, wu);
            return wu[$ - 1]
        }(t, n, e, r, i, o, f)
    }
    const Au = Math.pow(2, -52)
      , Su = new Uint32Array(512);
    class Eu {
        static from(t, n=$u, e=Du) {
            const r = t.length
              , i = new Float64Array(2 * r);
            for (let o = 0; o < r; o++) {
                const r = t[o];
                i[2 * o] = n(r),
                i[2 * o + 1] = e(r)
            }
            return new Eu(i)
        }
        constructor(t) {
            const n = t.length >> 1;
            if (n > 0 && "number" != typeof t[0])
                throw new Error("Expected coords to contain numbers.");
            this.coords = t;
            const e = Math.max(2 * n - 5, 0);
            this._triangles = new Uint32Array(3 * e),
            this._halfedges = new Int32Array(3 * e),
            this._hashSize = Math.ceil(Math.sqrt(n)),
            this._hullPrev = new Uint32Array(n),
            this._hullNext = new Uint32Array(n),
            this._hullTri = new Uint32Array(n),
            this._hullHash = new Int32Array(this._hashSize).fill(-1),
            this._ids = new Uint32Array(n),
            this._dists = new Float64Array(n),
            this.update()
        }
        update() {
            const {coords: t, _hullPrev: n, _hullNext: e, _hullTri: r, _hullHash: i} = this
              , o = t.length >> 1;
            let a = 1 / 0
              , u = 1 / 0
              , c = -1 / 0
              , f = -1 / 0;
            for (let n = 0; n < o; n++) {
                const e = t[2 * n]
                  , r = t[2 * n + 1];
                e < a && (a = e),
                r < u && (u = r),
                e > c && (c = e),
                r > f && (f = r),
                this._ids[n] = n
            }
            const s = (a + c) / 2
              , l = (u + f) / 2;
            let h, d, p, g = 1 / 0;
            for (let n = 0; n < o; n++) {
                const e = Nu(s, l, t[2 * n], t[2 * n + 1]);
                e < g && (h = n,
                g = e)
            }
            const y = t[2 * h]
              , v = t[2 * h + 1];
            g = 1 / 0;
            for (let n = 0; n < o; n++) {
                if (n === h)
                    continue;
                const e = Nu(y, v, t[2 * n], t[2 * n + 1]);
                e < g && e > 0 && (d = n,
                g = e)
            }
            let _ = t[2 * d]
              , b = t[2 * d + 1]
              , m = 1 / 0;
            for (let n = 0; n < o; n++) {
                if (n === h || n === d)
                    continue;
                const e = Cu(y, v, _, b, t[2 * n], t[2 * n + 1]);
                e < m && (p = n,
                m = e)
            }
            let x = t[2 * p]
              , w = t[2 * p + 1];
            if (m === 1 / 0) {
                for (let n = 0; n < o; n++)
                    this._dists[n] = t[2 * n] - t[0] || t[2 * n + 1] - t[1];
                Pu(this._ids, this._dists, 0, o - 1);
                const n = new Uint32Array(o);
                let e = 0;
                for (let t = 0, r = -1 / 0; t < o; t++) {
                    const i = this._ids[t];
                    this._dists[i] > r && (n[e++] = i,
                    r = this._dists[i])
                }
                return this.hull = n.subarray(0, e),
                this.triangles = new Uint32Array(0),
                void (this.halfedges = new Uint32Array(0))
            }
            if (Tu(y, v, _, b, x, w) < 0) {
                const t = d
                  , n = _
                  , e = b;
                d = p,
                _ = x,
                b = w,
                p = t,
                x = n,
                w = e
            }
            const M = function(t, n, e, r, i, o) {
                const a = e - t
                  , u = r - n
                  , c = i - t
                  , f = o - n
                  , s = a * a + u * u
                  , l = c * c + f * f
                  , h = .5 / (a * f - u * c)
                  , d = t + (f * s - u * l) * h
                  , p = n + (a * l - c * s) * h;
                return {
                    x: d,
                    y: p
                }
            }(y, v, _, b, x, w);
            this._cx = M.x,
            this._cy = M.y;
            for (let n = 0; n < o; n++)
                this._dists[n] = Nu(t[2 * n], t[2 * n + 1], M.x, M.y);
            Pu(this._ids, this._dists, 0, o - 1),
            this._hullStart = h;
            let T = 3;
            e[h] = n[p] = d,
            e[d] = n[h] = p,
            e[p] = n[d] = h,
            r[h] = 0,
            r[d] = 1,
            r[p] = 2,
            i.fill(-1),
            i[this._hashKey(y, v)] = h,
            i[this._hashKey(_, b)] = d,
            i[this._hashKey(x, w)] = p,
            this.trianglesLen = 0,
            this._addTriangle(h, d, p, -1, -1, -1);
            for (let o, a, u = 0; u < this._ids.length; u++) {
                const c = this._ids[u]
                  , f = t[2 * c]
                  , s = t[2 * c + 1];
                if (u > 0 && Math.abs(f - o) <= Au && Math.abs(s - a) <= Au)
                    continue;
                if (o = f,
                a = s,
                c === h || c === d || c === p)
                    continue;
                let l = 0;
                for (let t = 0, n = this._hashKey(f, s); t < this._hashSize && (l = i[(n + t) % this._hashSize],
                -1 === l || l === e[l]); t++)
                    ;
                l = n[l];
                let g, y = l;
                for (; g = e[y],
                Tu(f, s, t[2 * y], t[2 * y + 1], t[2 * g], t[2 * g + 1]) >= 0; )
                    if (y = g,
                    y === l) {
                        y = -1;
                        break
                    }
                if (-1 === y)
                    continue;
                let v = this._addTriangle(y, c, e[y], -1, -1, r[y]);
                r[c] = this._legalize(v + 2),
                r[y] = v,
                T++;
                let _ = e[y];
                for (; g = e[_],
                Tu(f, s, t[2 * _], t[2 * _ + 1], t[2 * g], t[2 * g + 1]) < 0; )
                    v = this._addTriangle(_, c, g, r[c], -1, r[_]),
                    r[c] = this._legalize(v + 2),
                    e[_] = _,
                    T--,
                    _ = g;
                if (y === l)
                    for (; g = n[y],
                    Tu(f, s, t[2 * g], t[2 * g + 1], t[2 * y], t[2 * y + 1]) < 0; )
                        v = this._addTriangle(g, c, y, -1, r[y], r[g]),
                        this._legalize(v + 2),
                        r[g] = v,
                        e[y] = y,
                        T--,
                        y = g;
                this._hullStart = n[c] = y,
                e[y] = n[_] = c,
                e[c] = _,
                i[this._hashKey(f, s)] = c,
                i[this._hashKey(t[2 * y], t[2 * y + 1])] = y
            }
            this.hull = new Uint32Array(T);
            for (let t = 0, n = this._hullStart; t < T; t++)
                this.hull[t] = n,
                n = e[n];
            this.triangles = this._triangles.subarray(0, this.trianglesLen),
            this.halfedges = this._halfedges.subarray(0, this.trianglesLen)
        }
        _hashKey(t, n) {
            return Math.floor(function(t, n) {
                const e = t / (Math.abs(t) + Math.abs(n));
                return (n > 0 ? 3 - e : 1 + e) / 4
            }(t - this._cx, n - this._cy) * this._hashSize) % this._hashSize
        }
        _legalize(t) {
            const {_triangles: n, _halfedges: e, coords: r} = this;
            let i = 0
              , o = 0;
            for (; ; ) {
                const a = e[t]
                  , u = t - t % 3;
                if (o = u + (t + 2) % 3,
                -1 === a) {
                    if (0 === i)
                        break;
                    t = Su[--i];
                    continue
                }
                const c = a - a % 3
                  , f = u + (t + 1) % 3
                  , s = c + (a + 2) % 3
                  , l = n[o]
                  , h = n[t]
                  , d = n[f]
                  , p = n[s];
                if (ku(r[2 * l], r[2 * l + 1], r[2 * h], r[2 * h + 1], r[2 * d], r[2 * d + 1], r[2 * p], r[2 * p + 1])) {
                    n[t] = p,
                    n[a] = l;
                    const r = e[s];
                    if (-1 === r) {
                        let n = this._hullStart;
                        do {
                            if (this._hullTri[n] === s) {
                                this._hullTri[n] = t;
                                break
                            }
                            n = this._hullPrev[n]
                        } while (n !== this._hullStart)
                    }
                    this._link(t, r),
                    this._link(a, e[o]),
                    this._link(o, s);
                    const u = c + (a + 1) % 3;
                    i < Su.length && (Su[i++] = u)
                } else {
                    if (0 === i)
                        break;
                    t = Su[--i]
                }
            }
            return o
        }
        _link(t, n) {
            this._halfedges[t] = n,
            -1 !== n && (this._halfedges[n] = t)
        }
        _addTriangle(t, n, e, r, i, o) {
            const a = this.trianglesLen;
            return this._triangles[a] = t,
            this._triangles[a + 1] = n,
            this._triangles[a + 2] = e,
            this._link(a, r),
            this._link(a + 1, i),
            this._link(a + 2, o),
            this.trianglesLen += 3,
            a
        }
    }
    function Nu(t, n, e, r) {
        const i = t - e
          , o = n - r;
        return i * i + o * o
    }
    function ku(t, n, e, r, i, o, a, u) {
        const c = t - a
          , f = n - u
          , s = e - a
          , l = r - u
          , h = i - a
          , d = o - u
          , p = s * s + l * l
          , g = h * h + d * d;
        return c * (l * g - p * d) - f * (s * g - p * h) + (c * c + f * f) * (s * d - l * h) < 0
    }
    function Cu(t, n, e, r, i, o) {
        const a = e - t
          , u = r - n
          , c = i - t
          , f = o - n
          , s = a * a + u * u
          , l = c * c + f * f
          , h = .5 / (a * f - u * c)
          , d = (f * s - u * l) * h
          , p = (a * l - c * s) * h;
        return d * d + p * p
    }
    function Pu(t, n, e, r) {
        if (r - e <= 20)
            for (let i = e + 1; i <= r; i++) {
                const r = t[i]
                  , o = n[r];
                let a = i - 1;
                for (; a >= e && n[t[a]] > o; )
                    t[a + 1] = t[a--];
                t[a + 1] = r
            }
        else {
            let i = e + 1
              , o = r;
            zu(t, e + r >> 1, i),
            n[t[e]] > n[t[r]] && zu(t, e, r),
            n[t[i]] > n[t[r]] && zu(t, i, r),
            n[t[e]] > n[t[i]] && zu(t, e, i);
            const a = t[i]
              , u = n[a];
            for (; ; ) {
                do {
                    i++
                } while (n[t[i]] < u);
                do {
                    o--
                } while (n[t[o]] > u);
                if (o < i)
                    break;
                zu(t, i, o)
            }
            t[e + 1] = t[o],
            t[o] = a,
            r - i + 1 >= o - e ? (Pu(t, n, i, r),
            Pu(t, n, e, o - 1)) : (Pu(t, n, e, o - 1),
            Pu(t, n, i, r))
        }
    }
    function zu(t, n, e) {
        const r = t[n];
        t[n] = t[e],
        t[e] = r
    }
    function $u(t) {
        return t[0]
    }
    function Du(t) {
        return t[1]
    }
    const Ru = 1e-6;
    class Fu {
        constructor() {
            this._x0 = this._y0 = this._x1 = this._y1 = null,
            this._ = ""
        }
        moveTo(t, n) {
            this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`
        }
        closePath() {
            null !== this._x1 && (this._x1 = this._x0,
            this._y1 = this._y0,
            this._ += "Z")
        }
        lineTo(t, n) {
            this._ += `L${this._x1 = +t},${this._y1 = +n}`
        }
        arc(t, n, e) {
            const r = (t = +t) + (e = +e)
              , i = n = +n;
            if (e < 0)
                throw new Error("negative radius");
            null === this._x1 ? this._ += `M${r},${i}` : (Math.abs(this._x1 - r) > Ru || Math.abs(this._y1 - i) > Ru) && (this._ += "L" + r + "," + i),
            e && (this._ += `A${e},${e},0,1,1,${t - e},${n}A${e},${e},0,1,1,${this._x1 = r},${this._y1 = i}`)
        }
        rect(t, n, e, r) {
            this._ += `M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${+e}v${+r}h${-e}Z`
        }
        value() {
            return this._ || null
        }
    }
    class qu {
        constructor() {
            this._ = []
        }
        moveTo(t, n) {
            this._.push([t, n])
        }
        closePath() {
            this._.push(this._[0].slice())
        }
        lineTo(t, n) {
            this._.push([t, n])
        }
        value() {
            return this._.length ? this._ : null
        }
    }
    class Uu {
        constructor(t, [n,e,r,i]=[0, 0, 960, 500]) {
            if (!((r = +r) >= (n = +n) && (i = +i) >= (e = +e)))
                throw new Error("invalid bounds");
            this.delaunay = t,
            this._circumcenters = new Float64Array(2 * t.points.length),
            this.vectors = new Float64Array(2 * t.points.length),
            this.xmax = r,
            this.xmin = n,
            this.ymax = i,
            this.ymin = e,
            this._init()
        }
        update() {
            return this.delaunay.update(),
            this._init(),
            this
        }
        _init() {
            const {delaunay: {points: t, hull: n, triangles: e}, vectors: r} = this;
            let i, o;
            const a = this.circumcenters = this._circumcenters.subarray(0, e.length / 3 * 2);
            for (let r, u, c = 0, f = 0, s = e.length; c < s; c += 3,
            f += 2) {
                const s = 2 * e[c]
                  , l = 2 * e[c + 1]
                  , h = 2 * e[c + 2]
                  , d = t[s]
                  , p = t[s + 1]
                  , g = t[l]
                  , y = t[l + 1]
                  , v = t[h]
                  , _ = t[h + 1]
                  , b = g - d
                  , m = y - p
                  , x = v - d
                  , w = _ - p
                  , M = 2 * (b * w - m * x);
                if (Math.abs(M) < 1e-9) {
                    if (void 0 === i) {
                        i = o = 0;
                        for (const e of n)
                            i += t[2 * e],
                            o += t[2 * e + 1];
                        i /= n.length,
                        o /= n.length
                    }
                    const e = 1e9 * Math.sign((i - d) * w - (o - p) * x);
                    r = (d + v) / 2 - e * w,
                    u = (p + _) / 2 + e * x
                } else {
                    const t = 1 / M
                      , n = b * b + m * m
                      , e = x * x + w * w;
                    r = d + (w * n - m * e) * t,
                    u = p + (b * e - x * n) * t
                }
                a[f] = r,
                a[f + 1] = u
            }
            let u, c, f, s = n[n.length - 1], l = 4 * s, h = t[2 * s], d = t[2 * s + 1];
            r.fill(0);
            for (let e = 0; e < n.length; ++e)
                s = n[e],
                u = l,
                c = h,
                f = d,
                l = 4 * s,
                h = t[2 * s],
                d = t[2 * s + 1],
                r[u + 2] = r[l] = f - d,
                r[u + 3] = r[l + 1] = h - c
        }
        render(t) {
            const n = null == t ? t = new Fu : void 0
              , {delaunay: {halfedges: e, inedges: r, hull: i}, circumcenters: o, vectors: a} = this;
            if (i.length <= 1)
                return null;
            for (let n = 0, r = e.length; n < r; ++n) {
                const r = e[n];
                if (r < n)
                    continue;
                const i = 2 * Math.floor(n / 3)
                  , a = 2 * Math.floor(r / 3)
                  , u = o[i]
                  , c = o[i + 1]
                  , f = o[a]
                  , s = o[a + 1];
                this._renderSegment(u, c, f, s, t)
            }
            let u, c = i[i.length - 1];
            for (let n = 0; n < i.length; ++n) {
                u = c,
                c = i[n];
                const e = 2 * Math.floor(r[c] / 3)
                  , f = o[e]
                  , s = o[e + 1]
                  , l = 4 * u
                  , h = this._project(f, s, a[l + 2], a[l + 3]);
                h && this._renderSegment(f, s, h[0], h[1], t)
            }
            return n && n.value()
        }
        renderBounds(t) {
            const n = null == t ? t = new Fu : void 0;
            return t.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin),
            n && n.value()
        }
        renderCell(t, n) {
            const e = null == n ? n = new Fu : void 0
              , r = this._clip(t);
            if (null === r || !r.length)
                return;
            n.moveTo(r[0], r[1]);
            let i = r.length;
            for (; r[0] === r[i - 2] && r[1] === r[i - 1] && i > 1; )
                i -= 2;
            for (let t = 2; t < i; t += 2)
                r[t] === r[t - 2] && r[t + 1] === r[t - 1] || n.lineTo(r[t], r[t + 1]);
            return n.closePath(),
            e && e.value()
        }
        *cellPolygons() {
            const {delaunay: {points: t}} = this;
            for (let n = 0, e = t.length / 2; n < e; ++n) {
                const t = this.cellPolygon(n);
                t && (t.index = n,
                yield t)
            }
        }
        cellPolygon(t) {
            const n = new qu;
            return this.renderCell(t, n),
            n.value()
        }
        _renderSegment(t, n, e, r, i) {
            let o;
            const a = this._regioncode(t, n)
              , u = this._regioncode(e, r);
            0 === a && 0 === u ? (i.moveTo(t, n),
            i.lineTo(e, r)) : (o = this._clipSegment(t, n, e, r, a, u)) && (i.moveTo(o[0], o[1]),
            i.lineTo(o[2], o[3]))
        }
        contains(t, n, e) {
            return (n = +n) == n && (e = +e) == e && this.delaunay._step(t, n, e) === t
        }
        *neighbors(t) {
            const n = this._clip(t);
            if (n)
                for (const e of this.delaunay.neighbors(t)) {
                    const t = this._clip(e);
                    if (t)
                        t: for (let r = 0, i = n.length; r < i; r += 2)
                            for (let o = 0, a = t.length; o < a; o += 2)
                                if (n[r] === t[o] && n[r + 1] === t[o + 1] && n[(r + 2) % i] === t[(o + a - 2) % a] && n[(r + 3) % i] === t[(o + a - 1) % a]) {
                                    yield e;
                                    break t
                                }
                }
        }
        _cell(t) {
            const {circumcenters: n, delaunay: {inedges: e, halfedges: r, triangles: i}} = this
              , o = e[t];
            if (-1 === o)
                return null;
            const a = [];
            let u = o;
            do {
                const e = Math.floor(u / 3);
                if (a.push(n[2 * e], n[2 * e + 1]),
                u = u % 3 == 2 ? u - 2 : u + 1,
                i[u] !== t)
                    break;
                u = r[u]
            } while (u !== o && -1 !== u);
            return a
        }
        _clip(t) {
            if (0 === t && 1 === this.delaunay.hull.length)
                return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
            const n = this._cell(t);
            if (null === n)
                return null;
            const {vectors: e} = this
              , r = 4 * t;
            return this._simplify(e[r] || e[r + 1] ? this._clipInfinite(t, n, e[r], e[r + 1], e[r + 2], e[r + 3]) : this._clipFinite(t, n))
        }
        _clipFinite(t, n) {
            const e = n.length;
            let r, i, o, a, u = null, c = n[e - 2], f = n[e - 1], s = this._regioncode(c, f), l = 0;
            for (let h = 0; h < e; h += 2)
                if (r = c,
                i = f,
                c = n[h],
                f = n[h + 1],
                o = s,
                s = this._regioncode(c, f),
                0 === o && 0 === s)
                    a = l,
                    l = 0,
                    u ? u.push(c, f) : u = [c, f];
                else {
                    let n, e, h, d, p;
                    if (0 === o) {
                        if (null === (n = this._clipSegment(r, i, c, f, o, s)))
                            continue;
                        [e,h,d,p] = n
                    } else {
                        if (null === (n = this._clipSegment(c, f, r, i, s, o)))
                            continue;
                        [d,p,e,h] = n,
                        a = l,
                        l = this._edgecode(e, h),
                        a && l && this._edge(t, a, l, u, u.length),
                        u ? u.push(e, h) : u = [e, h]
                    }
                    a = l,
                    l = this._edgecode(d, p),
                    a && l && this._edge(t, a, l, u, u.length),
                    u ? u.push(d, p) : u = [d, p]
                }
            if (u)
                a = l,
                l = this._edgecode(u[0], u[1]),
                a && l && this._edge(t, a, l, u, u.length);
            else if (this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
                return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
            return u
        }
        _clipSegment(t, n, e, r, i, o) {
            const a = i < o;
            for (a && ([t,n,e,r,i,o] = [e, r, t, n, o, i]); ; ) {
                if (0 === i && 0 === o)
                    return a ? [e, r, t, n] : [t, n, e, r];
                if (i & o)
                    return null;
                let u, c, f = i || o;
                8 & f ? (u = t + (e - t) * (this.ymax - n) / (r - n),
                c = this.ymax) : 4 & f ? (u = t + (e - t) * (this.ymin - n) / (r - n),
                c = this.ymin) : 2 & f ? (c = n + (r - n) * (this.xmax - t) / (e - t),
                u = this.xmax) : (c = n + (r - n) * (this.xmin - t) / (e - t),
                u = this.xmin),
                i ? (t = u,
                n = c,
                i = this._regioncode(t, n)) : (e = u,
                r = c,
                o = this._regioncode(e, r))
            }
        }
        _clipInfinite(t, n, e, r, i, o) {
            let a, u = Array.from(n);
            if ((a = this._project(u[0], u[1], e, r)) && u.unshift(a[0], a[1]),
            (a = this._project(u[u.length - 2], u[u.length - 1], i, o)) && u.push(a[0], a[1]),
            u = this._clipFinite(t, u))
                for (let n, e = 0, r = u.length, i = this._edgecode(u[r - 2], u[r - 1]); e < r; e += 2)
                    n = i,
                    i = this._edgecode(u[e], u[e + 1]),
                    n && i && (e = this._edge(t, n, i, u, e),
                    r = u.length);
            else
                this.contains(t, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
            return u
        }
        _edge(t, n, e, r, i) {
            for (; n !== e; ) {
                let e, o;
                switch (n) {
                case 5:
                    n = 4;
                    continue;
                case 4:
                    n = 6,
                    e = this.xmax,
                    o = this.ymin;
                    break;
                case 6:
                    n = 2;
                    continue;
                case 2:
                    n = 10,
                    e = this.xmax,
                    o = this.ymax;
                    break;
                case 10:
                    n = 8;
                    continue;
                case 8:
                    n = 9,
                    e = this.xmin,
                    o = this.ymax;
                    break;
                case 9:
                    n = 1;
                    continue;
                case 1:
                    n = 5,
                    e = this.xmin,
                    o = this.ymin
                }
                r[i] === e && r[i + 1] === o || !this.contains(t, e, o) || (r.splice(i, 0, e, o),
                i += 2)
            }
            return i
        }
        _project(t, n, e, r) {
            let i, o, a, u = 1 / 0;
            if (r < 0) {
                if (n <= this.ymin)
                    return null;
                (i = (this.ymin - n) / r) < u && (a = this.ymin,
                o = t + (u = i) * e)
            } else if (r > 0) {
                if (n >= this.ymax)
                    return null;
                (i = (this.ymax - n) / r) < u && (a = this.ymax,
                o = t + (u = i) * e)
            }
            if (e > 0) {
                if (t >= this.xmax)
                    return null;
                (i = (this.xmax - t) / e) < u && (o = this.xmax,
                a = n + (u = i) * r)
            } else if (e < 0) {
                if (t <= this.xmin)
                    return null;
                (i = (this.xmin - t) / e) < u && (o = this.xmin,
                a = n + (u = i) * r)
            }
            return [o, a]
        }
        _edgecode(t, n) {
            return (t === this.xmin ? 1 : t === this.xmax ? 2 : 0) | (n === this.ymin ? 4 : n === this.ymax ? 8 : 0)
        }
        _regioncode(t, n) {
            return (t < this.xmin ? 1 : t > this.xmax ? 2 : 0) | (n < this.ymin ? 4 : n > this.ymax ? 8 : 0)
        }
        _simplify(t) {
            if (t && t.length > 4) {
                for (let n = 0; n < t.length; n += 2) {
                    const e = (n + 2) % t.length
                      , r = (n + 4) % t.length;
                    (t[n] === t[e] && t[e] === t[r] || t[n + 1] === t[e + 1] && t[e + 1] === t[r + 1]) && (t.splice(e, 2),
                    n -= 2)
                }
                t.length || (t = null)
            }
            return t
        }
    }
    const Iu = 2 * Math.PI
      , Ou = Math.pow;
    function Bu(t) {
        return t[0]
    }
    function Yu(t) {
        return t[1]
    }
    function Lu(t, n, e) {
        return [t + Math.sin(t + n) * e, n + Math.cos(t - n) * e]
    }
    class ju {
        static from(t, n=Bu, e=Yu, r) {
            return new ju("length"in t ? function(t, n, e, r) {
                const i = t.length
                  , o = new Float64Array(2 * i);
                for (let a = 0; a < i; ++a) {
                    const i = t[a];
                    o[2 * a] = n.call(r, i, a, t),
                    o[2 * a + 1] = e.call(r, i, a, t)
                }
                return o
            }(t, n, e, r) : Float64Array.from(function*(t, n, e, r) {
                let i = 0;
                for (const o of t)
                    yield n.call(r, o, i, t),
                    yield e.call(r, o, i, t),
                    ++i
            }(t, n, e, r)))
        }
        constructor(t) {
            this._delaunator = new Eu(t),
            this.inedges = new Int32Array(t.length / 2),
            this._hullIndex = new Int32Array(t.length / 2),
            this.points = this._delaunator.coords,
            this._init()
        }
        update() {
            return this._delaunator.update(),
            this._init(),
            this
        }
        _init() {
            const t = this._delaunator
              , n = this.points;
            if (t.hull && t.hull.length > 2 && function(t) {
                const {triangles: n, coords: e} = t;
                for (let t = 0; t < n.length; t += 3) {
                    const r = 2 * n[t]
                      , i = 2 * n[t + 1]
                      , o = 2 * n[t + 2];
                    if ((e[o] - e[r]) * (e[i + 1] - e[r + 1]) - (e[i] - e[r]) * (e[o + 1] - e[r + 1]) > 1e-10)
                        return !1
                }
                return !0
            }(t)) {
                this.collinear = Int32Array.from({
                    length: n.length / 2
                }, ((t,n)=>n)).sort(((t,e)=>n[2 * t] - n[2 * e] || n[2 * t + 1] - n[2 * e + 1]));
                const t = this.collinear[0]
                  , e = this.collinear[this.collinear.length - 1]
                  , r = [n[2 * t], n[2 * t + 1], n[2 * e], n[2 * e + 1]]
                  , i = 1e-8 * Math.hypot(r[3] - r[1], r[2] - r[0]);
                for (let t = 0, e = n.length / 2; t < e; ++t) {
                    const e = Lu(n[2 * t], n[2 * t + 1], i);
                    n[2 * t] = e[0],
                    n[2 * t + 1] = e[1]
                }
                this._delaunator = new Eu(n)
            } else
                delete this.collinear;
            const e = this.halfedges = this._delaunator.halfedges
              , r = this.hull = this._delaunator.hull
              , i = this.triangles = this._delaunator.triangles
              , o = this.inedges.fill(-1)
              , a = this._hullIndex.fill(-1);
            for (let t = 0, n = e.length; t < n; ++t) {
                const n = i[t % 3 == 2 ? t - 2 : t + 1];
                -1 !== e[t] && -1 !== o[n] || (o[n] = t)
            }
            for (let t = 0, n = r.length; t < n; ++t)
                a[r[t]] = t;
            r.length <= 2 && r.length > 0 && (this.triangles = new Int32Array(3).fill(-1),
            this.halfedges = new Int32Array(3).fill(-1),
            this.triangles[0] = r[0],
            o[r[0]] = 1,
            2 === r.length && (o[r[1]] = 0,
            this.triangles[1] = r[1],
            this.triangles[2] = r[1]))
        }
        voronoi(t) {
            return new Uu(this,t)
        }
        *neighbors(t) {
            const {inedges: n, hull: e, _hullIndex: r, halfedges: i, triangles: o, collinear: a} = this;
            if (a) {
                const n = a.indexOf(t);
                return n > 0 && (yield a[n - 1]),
                void (n < a.length - 1 && (yield a[n + 1]))
            }
            const u = n[t];
            if (-1 === u)
                return;
            let c = u
              , f = -1;
            do {
                if (yield f = o[c],
                c = c % 3 == 2 ? c - 2 : c + 1,
                o[c] !== t)
                    return;
                if (c = i[c],
                -1 === c) {
                    const n = e[(r[t] + 1) % e.length];
                    return void (n !== f && (yield n))
                }
            } while (c !== u)
        }
        find(t, n, e=0) {
            if ((t = +t) != t || (n = +n) != n)
                return -1;
            const r = e;
            let i;
            for (; (i = this._step(e, t, n)) >= 0 && i !== e && i !== r; )
                e = i;
            return i
        }
        _step(t, n, e) {
            const {inedges: r, hull: i, _hullIndex: o, halfedges: a, triangles: u, points: c} = this;
            if (-1 === r[t] || !c.length)
                return (t + 1) % (c.length >> 1);
            let f = t
              , s = Ou(n - c[2 * t], 2) + Ou(e - c[2 * t + 1], 2);
            const l = r[t];
            let h = l;
            do {
                let r = u[h];
                const l = Ou(n - c[2 * r], 2) + Ou(e - c[2 * r + 1], 2);
                if (l < s && (s = l,
                f = r),
                h = h % 3 == 2 ? h - 2 : h + 1,
                u[h] !== t)
                    break;
                if (h = a[h],
                -1 === h) {
                    if (h = i[(o[t] + 1) % i.length],
                    h !== r && Ou(n - c[2 * h], 2) + Ou(e - c[2 * h + 1], 2) < s)
                        return h;
                    break
                }
            } while (h !== l);
            return f
        }
        render(t) {
            const n = null == t ? t = new Fu : void 0
              , {points: e, halfedges: r, triangles: i} = this;
            for (let n = 0, o = r.length; n < o; ++n) {
                const o = r[n];
                if (o < n)
                    continue;
                const a = 2 * i[n]
                  , u = 2 * i[o];
                t.moveTo(e[a], e[a + 1]),
                t.lineTo(e[u], e[u + 1])
            }
            return this.renderHull(t),
            n && n.value()
        }
        renderPoints(t, n) {
            void 0 !== n || t && "function" == typeof t.moveTo || (n = t,
            t = null),
            n = null == n ? 2 : +n;
            const e = null == t ? t = new Fu : void 0
              , {points: r} = this;
            for (let e = 0, i = r.length; e < i; e += 2) {
                const i = r[e]
                  , o = r[e + 1];
                t.moveTo(i + n, o),
                t.arc(i, o, n, 0, Iu)
            }
            return e && e.value()
        }
        renderHull(t) {
            const n = null == t ? t = new Fu : void 0
              , {hull: e, points: r} = this
              , i = 2 * e[0]
              , o = e.length;
            t.moveTo(r[i], r[i + 1]);
            for (let n = 1; n < o; ++n) {
                const i = 2 * e[n];
                t.lineTo(r[i], r[i + 1])
            }
            return t.closePath(),
            n && n.value()
        }
        hullPolygon() {
            const t = new qu;
            return this.renderHull(t),
            t.value()
        }
        renderTriangle(t, n) {
            const e = null == n ? n = new Fu : void 0
              , {points: r, triangles: i} = this
              , o = 2 * i[t *= 3]
              , a = 2 * i[t + 1]
              , u = 2 * i[t + 2];
            return n.moveTo(r[o], r[o + 1]),
            n.lineTo(r[a], r[a + 1]),
            n.lineTo(r[u], r[u + 1]),
            n.closePath(),
            e && e.value()
        }
        *trianglePolygons() {
            const {triangles: t} = this;
            for (let n = 0, e = t.length / 3; n < e; ++n)
                yield this.trianglePolygon(n)
        }
        trianglePolygon(t) {
            const n = new qu;
            return this.renderTriangle(t, n),
            n.value()
        }
    }
    var Hu = {}
      , Xu = {}
      , Gu = 34
      , Vu = 10
      , Wu = 13;
    function Zu(t) {
        return new Function("d","return {" + t.map((function(t, n) {
            return JSON.stringify(t) + ": d[" + n + '] || ""'
        }
        )).join(",") + "}")
    }
    function Ku(t) {
        var n = Object.create(null)
          , e = [];
        return t.forEach((function(t) {
            for (var r in t)
                r in n || e.push(n[r] = r)
        }
        )),
        e
    }
    function Qu(t, n) {
        var e = t + ""
          , r = e.length;
        return r < n ? new Array(n - r + 1).join(0) + e : e
    }
    function Ju(t) {
        var n, e = t.getUTCHours(), r = t.getUTCMinutes(), i = t.getUTCSeconds(), o = t.getUTCMilliseconds();
        return isNaN(t) ? "Invalid Date" : ((n = t.getUTCFullYear()) < 0 ? "-" + Qu(-n, 6) : n > 9999 ? "+" + Qu(n, 6) : Qu(n, 4)) + "-" + Qu(t.getUTCMonth() + 1, 2) + "-" + Qu(t.getUTCDate(), 2) + (o ? "T" + Qu(e, 2) + ":" + Qu(r, 2) + ":" + Qu(i, 2) + "." + Qu(o, 3) + "Z" : i ? "T" + Qu(e, 2) + ":" + Qu(r, 2) + ":" + Qu(i, 2) + "Z" : r || e ? "T" + Qu(e, 2) + ":" + Qu(r, 2) + "Z" : "")
    }
    function tc(t) {
        var n = new RegExp('["' + t + "\n\r]")
          , e = t.charCodeAt(0);
        function r(t, n) {
            var r, i = [], o = t.length, a = 0, u = 0, c = o <= 0, f = !1;
            function s() {
                if (c)
                    return Xu;
                if (f)
                    return f = !1,
                    Hu;
                var n, r, i = a;
                if (t.charCodeAt(i) === Gu) {
                    for (; a++ < o && t.charCodeAt(a) !== Gu || t.charCodeAt(++a) === Gu; )
                        ;
                    return (n = a) >= o ? c = !0 : (r = t.charCodeAt(a++)) === Vu ? f = !0 : r === Wu && (f = !0,
                    t.charCodeAt(a) === Vu && ++a),
                    t.slice(i + 1, n - 1).replace(/""/g, '"')
                }
                for (; a < o; ) {
                    if ((r = t.charCodeAt(n = a++)) === Vu)
                        f = !0;
                    else if (r === Wu)
                        f = !0,
                        t.charCodeAt(a) === Vu && ++a;
                    else if (r !== e)
                        continue;
                    return t.slice(i, n)
                }
                return c = !0,
                t.slice(i, o)
            }
            for (t.charCodeAt(o - 1) === Vu && --o,
            t.charCodeAt(o - 1) === Wu && --o; (r = s()) !== Xu; ) {
                for (var l = []; r !== Hu && r !== Xu; )
                    l.push(r),
                    r = s();
                n && null == (l = n(l, u++)) || i.push(l)
            }
            return i
        }
        function i(n, e) {
            return n.map((function(n) {
                return e.map((function(t) {
                    return a(n[t])
                }
                )).join(t)
            }
            ))
        }
        function o(n) {
            return n.map(a).join(t)
        }
        function a(t) {
            return null == t ? "" : t instanceof Date ? Ju(t) : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
        }
        return {
            parse: function(t, n) {
                var e, i, o = r(t, (function(t, r) {
                    if (e)
                        return e(t, r - 1);
                    i = t,
                    e = n ? function(t, n) {
                        var e = Zu(t);
                        return function(r, i) {
                            return n(e(r), i, t)
                        }
                    }(t, n) : Zu(t)
                }
                ));
                return o.columns = i || [],
                o
            },
            parseRows: r,
            format: function(n, e) {
                return null == e && (e = Ku(n)),
                [e.map(a).join(t)].concat(i(n, e)).join("\n")
            },
            formatBody: function(t, n) {
                return null == n && (n = Ku(t)),
                i(t, n).join("\n")
            },
            formatRows: function(t) {
                return t.map(o).join("\n")
            },
            formatRow: o,
            formatValue: a
        }
    }
    var nc = tc(",")
      , ec = nc.parse
      , rc = nc.parseRows
      , ic = nc.format
      , oc = nc.formatBody
      , ac = nc.formatRows
      , uc = nc.formatRow
      , cc = nc.formatValue
      , fc = tc("\t")
      , sc = fc.parse
      , lc = fc.parseRows
      , hc = fc.format
      , dc = fc.formatBody
      , pc = fc.formatRows
      , gc = fc.formatRow
      , yc = fc.formatValue;
    const vc = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
    function _c(t) {
        if (!t.ok)
            throw new Error(t.status + " " + t.statusText);
        return t.blob()
    }
    function bc(t) {
        if (!t.ok)
            throw new Error(t.status + " " + t.statusText);
        return t.arrayBuffer()
    }
    function mc(t) {
        if (!t.ok)
            throw new Error(t.status + " " + t.statusText);
        return t.text()
    }
    function xc(t, n) {
        return fetch(t, n).then(mc)
    }
    function wc(t) {
        return function(n, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e,
            e = void 0),
            xc(n, e).then((function(n) {
                return t(n, r)
            }
            ))
        }
    }
    var Mc = wc(ec)
      , Tc = wc(sc);
    function Ac(t) {
        if (!t.ok)
            throw new Error(t.status + " " + t.statusText);
        if (204 !== t.status && 205 !== t.status)
            return t.json()
    }
    function Sc(t) {
        return (n,e)=>xc(n, e).then((n=>(new DOMParser).parseFromString(n, t)))
    }
    var Ec = Sc("application/xml")
      , Nc = Sc("text/html")
      , kc = Sc("image/svg+xml");
    function Cc(t, n, e, r) {
        if (isNaN(n) || isNaN(e))
            return t;
        var i, o, a, u, c, f, s, l, h, d = t._root, p = {
            data: r
        }, g = t._x0, y = t._y0, v = t._x1, _ = t._y1;
        if (!d)
            return t._root = p,
            t;
        for (; d.length; )
            if ((f = n >= (o = (g + v) / 2)) ? g = o : v = o,
            (s = e >= (a = (y + _) / 2)) ? y = a : _ = a,
            i = d,
            !(d = d[l = s << 1 | f]))
                return i[l] = p,
                t;
        if (u = +t._x.call(null, d.data),
        c = +t._y.call(null, d.data),
        n === u && e === c)
            return p.next = d,
            i ? i[l] = p : t._root = p,
            t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4),
            (f = n >= (o = (g + v) / 2)) ? g = o : v = o,
            (s = e >= (a = (y + _) / 2)) ? y = a : _ = a
        } while ((l = s << 1 | f) == (h = (c >= a) << 1 | u >= o));
        return i[h] = d,
        i[l] = p,
        t
    }
    function Pc(t, n, e, r, i) {
        this.node = t,
        this.x0 = n,
        this.y0 = e,
        this.x1 = r,
        this.y1 = i
    }
    function zc(t) {
        return t[0]
    }
    function $c(t) {
        return t[1]
    }
    function Dc(t, n, e) {
        var r = new Rc(null == n ? zc : n,null == e ? $c : e,NaN,NaN,NaN,NaN);
        return null == t ? r : r.addAll(t)
    }
    function Rc(t, n, e, r, i, o) {
        this._x = t,
        this._y = n,
        this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = o,
        this._root = void 0
    }
    function Fc(t) {
        for (var n = {
            data: t.data
        }, e = n; t = t.next; )
            e = e.next = {
                data: t.data
            };
        return n
    }
    var qc = Dc.prototype = Rc.prototype;
    function Uc(t) {
        return function() {
            return t
        }
    }
    function Ic(t) {
        return 1e-6 * (t() - .5)
    }
    function Oc(t) {
        return t.x + t.vx
    }
    function Bc(t) {
        return t.y + t.vy
    }
    function Yc(t) {
        return t.index
    }
    function Lc(t, n) {
        var e = t.get(n);
        if (!e)
            throw new Error("node not found: " + n);
        return e
    }
    qc.copy = function() {
        var t, n, e = new Rc(this._x,this._y,this._x0,this._y0,this._x1,this._y1), r = this._root;
        if (!r)
            return e;
        if (!r.length)
            return e._root = Fc(r),
            e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop(); )
            for (var i = 0; i < 4; ++i)
                (n = r.source[i]) && (n.length ? t.push({
                    source: n,
                    target: r.target[i] = new Array(4)
                }) : r.target[i] = Fc(n));
        return e
    }
    ,
    qc.add = function(t) {
        const n = +this._x.call(null, t)
          , e = +this._y.call(null, t);
        return Cc(this.cover(n, e), n, e, t)
    }
    ,
    qc.addAll = function(t) {
        var n, e, r, i, o = t.length, a = new Array(o), u = new Array(o), c = 1 / 0, f = 1 / 0, s = -1 / 0, l = -1 / 0;
        for (e = 0; e < o; ++e)
            isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r,
            u[e] = i,
            r < c && (c = r),
            r > s && (s = r),
            i < f && (f = i),
            i > l && (l = i));
        if (c > s || f > l)
            return this;
        for (this.cover(c, f).cover(s, l),
        e = 0; e < o; ++e)
            Cc(this, a[e], u[e], t[e]);
        return this
    }
    ,
    qc.cover = function(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n))
            return this;
        var e = this._x0
          , r = this._y0
          , i = this._x1
          , o = this._y1;
        if (isNaN(e))
            i = (e = Math.floor(t)) + 1,
            o = (r = Math.floor(n)) + 1;
        else {
            for (var a, u, c = i - e || 1, f = this._root; e > t || t >= i || r > n || n >= o; )
                switch (u = (n < r) << 1 | t < e,
                (a = new Array(4))[u] = f,
                f = a,
                c *= 2,
                u) {
                case 0:
                    i = e + c,
                    o = r + c;
                    break;
                case 1:
                    e = i - c,
                    o = r + c;
                    break;
                case 2:
                    i = e + c,
                    r = o - c;
                    break;
                case 3:
                    e = i - c,
                    r = o - c
                }
            this._root && this._root.length && (this._root = f)
        }
        return this._x0 = e,
        this._y0 = r,
        this._x1 = i,
        this._y1 = o,
        this
    }
    ,
    qc.data = function() {
        var t = [];
        return this.visit((function(n) {
            if (!n.length)
                do {
                    t.push(n.data)
                } while (n = n.next)
        }
        )),
        t
    }
    ,
    qc.extent = function(t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    }
    ,
    qc.find = function(t, n, e) {
        var r, i, o, a, u, c, f, s = this._x0, l = this._y0, h = this._x1, d = this._y1, p = [], g = this._root;
        for (g && p.push(new Pc(g,s,l,h,d)),
        null == e ? e = 1 / 0 : (s = t - e,
        l = n - e,
        h = t + e,
        d = n + e,
        e *= e); c = p.pop(); )
            if (!(!(g = c.node) || (i = c.x0) > h || (o = c.y0) > d || (a = c.x1) < s || (u = c.y1) < l))
                if (g.length) {
                    var y = (i + a) / 2
                      , v = (o + u) / 2;
                    p.push(new Pc(g[3],y,v,a,u), new Pc(g[2],i,v,y,u), new Pc(g[1],y,o,a,v), new Pc(g[0],i,o,y,v)),
                    (f = (n >= v) << 1 | t >= y) && (c = p[p.length - 1],
                    p[p.length - 1] = p[p.length - 1 - f],
                    p[p.length - 1 - f] = c)
                } else {
                    var _ = t - +this._x.call(null, g.data)
                      , b = n - +this._y.call(null, g.data)
                      , m = _ * _ + b * b;
                    if (m < e) {
                        var x = Math.sqrt(e = m);
                        s = t - x,
                        l = n - x,
                        h = t + x,
                        d = n + x,
                        r = g.data
                    }
                }
        return r
    }
    ,
    qc.remove = function(t) {
        if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t)))
            return this;
        var n, e, r, i, o, a, u, c, f, s, l, h, d = this._root, p = this._x0, g = this._y0, y = this._x1, v = this._y1;
        if (!d)
            return this;
        if (d.length)
            for (; ; ) {
                if ((f = o >= (u = (p + y) / 2)) ? p = u : y = u,
                (s = a >= (c = (g + v) / 2)) ? g = c : v = c,
                n = d,
                !(d = d[l = s << 1 | f]))
                    return this;
                if (!d.length)
                    break;
                (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n,
                h = l)
            }
        for (; d.data !== t; )
            if (r = d,
            !(d = d.next))
                return this;
        return (i = d.next) && delete d.next,
        r ? (i ? r.next = i : delete r.next,
        this) : n ? (i ? n[l] = i : delete n[l],
        (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d),
        this) : (this._root = i,
        this)
    }
    ,
    qc.removeAll = function(t) {
        for (var n = 0, e = t.length; n < e; ++n)
            this.remove(t[n]);
        return this
    }
    ,
    qc.root = function() {
        return this._root
    }
    ,
    qc.size = function() {
        var t = 0;
        return this.visit((function(n) {
            if (!n.length)
                do {
                    ++t
                } while (n = n.next)
        }
        )),
        t
    }
    ,
    qc.visit = function(t) {
        var n, e, r, i, o, a, u = [], c = this._root;
        for (c && u.push(new Pc(c,this._x0,this._y0,this._x1,this._y1)); n = u.pop(); )
            if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && c.length) {
                var f = (r + o) / 2
                  , s = (i + a) / 2;
                (e = c[3]) && u.push(new Pc(e,f,s,o,a)),
                (e = c[2]) && u.push(new Pc(e,r,s,f,a)),
                (e = c[1]) && u.push(new Pc(e,f,i,o,s)),
                (e = c[0]) && u.push(new Pc(e,r,i,f,s))
            }
        return this
    }
    ,
    qc.visitAfter = function(t) {
        var n, e = [], r = [];
        for (this._root && e.push(new Pc(this._root,this._x0,this._y0,this._x1,this._y1)); n = e.pop(); ) {
            var i = n.node;
            if (i.length) {
                var o, a = n.x0, u = n.y0, c = n.x1, f = n.y1, s = (a + c) / 2, l = (u + f) / 2;
                (o = i[0]) && e.push(new Pc(o,a,u,s,l)),
                (o = i[1]) && e.push(new Pc(o,s,u,c,l)),
                (o = i[2]) && e.push(new Pc(o,a,l,s,f)),
                (o = i[3]) && e.push(new Pc(o,s,l,c,f))
            }
            r.push(n)
        }
        for (; n = r.pop(); )
            t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    }
    ,
    qc.x = function(t) {
        return arguments.length ? (this._x = t,
        this) : this._x
    }
    ,
    qc.y = function(t) {
        return arguments.length ? (this._y = t,
        this) : this._y
    }
    ;
    const jc = 1664525
      , Hc = 1013904223
      , Xc = 4294967296;
    function Gc(t) {
        return t.x
    }
    function Vc(t) {
        return t.y
    }
    var Wc = Math.PI * (3 - Math.sqrt(5));
    function Zc(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
            return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    }
    function Kc(t) {
        return (t = Zc(Math.abs(t))) ? t[1] : NaN
    }
    var Qc, Jc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function tf(t) {
        if (!(n = Jc.exec(t)))
            throw new Error("invalid format: " + t);
        var n;
        return new nf({
            fill: n[1],
            align: n[2],
            sign: n[3],
            symbol: n[4],
            zero: n[5],
            width: n[6],
            comma: n[7],
            precision: n[8] && n[8].slice(1),
            trim: n[9],
            type: n[10]
        })
    }
    function nf(t) {
        this.fill = void 0 === t.fill ? " " : t.fill + "",
        this.align = void 0 === t.align ? ">" : t.align + "",
        this.sign = void 0 === t.sign ? "-" : t.sign + "",
        this.symbol = void 0 === t.symbol ? "" : t.symbol + "",
        this.zero = !!t.zero,
        this.width = void 0 === t.width ? void 0 : +t.width,
        this.comma = !!t.comma,
        this.precision = void 0 === t.precision ? void 0 : +t.precision,
        this.trim = !!t.trim,
        this.type = void 0 === t.type ? "" : t.type + ""
    }
    function ef(t, n) {
        var e = Zc(t, n);
        if (!e)
            return t + "";
        var r = e[0]
          , i = e[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    }
    tf.prototype = nf.prototype,
    nf.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    }
    ;
    var rf = {
        "%": (t,n)=>(100 * t).toFixed(n),
        b: t=>Math.round(t).toString(2),
        c: t=>t + "",
        d: function(t) {
            return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
        },
        e: (t,n)=>t.toExponential(n),
        f: (t,n)=>t.toFixed(n),
        g: (t,n)=>t.toPrecision(n),
        o: t=>Math.round(t).toString(8),
        p: (t,n)=>ef(100 * t, n),
        r: ef,
        s: function(t, n) {
            var e = Zc(t, n);
            if (!e)
                return t + "";
            var r = e[0]
              , i = e[1]
              , o = i - (Qc = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1
              , a = r.length;
            return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Zc(t, Math.max(0, n + o - 1))[0]
        },
        X: t=>Math.round(t).toString(16).toUpperCase(),
        x: t=>Math.round(t).toString(16)
    };
    function of(t) {
        return t
    }
    var af, uf = Array.prototype.map, cf = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    function ff(t) {
        var n, e, r = void 0 === t.grouping || void 0 === t.thousands ? of : (n = uf.call(t.grouping, Number),
        e = t.thousands + "",
        function(t, r) {
            for (var i = t.length, o = [], a = 0, u = n[0], c = 0; i > 0 && u > 0 && (c + u + 1 > r && (u = Math.max(1, r - c)),
            o.push(t.substring(i -= u, i + u)),
            !((c += u + 1) > r)); )
                u = n[a = (a + 1) % n.length];
            return o.reverse().join(e)
        }
        ), i = void 0 === t.currency ? "" : t.currency[0] + "", o = void 0 === t.currency ? "" : t.currency[1] + "", a = void 0 === t.decimal ? "." : t.decimal + "", u = void 0 === t.numerals ? of : function(t) {
            return function(n) {
                return n.replace(/[0-9]/g, (function(n) {
                    return t[+n]
                }
                ))
            }
        }(uf.call(t.numerals, String)), c = void 0 === t.percent ? "%" : t.percent + "", f = void 0 === t.minus ? "−" : t.minus + "", s = void 0 === t.nan ? "NaN" : t.nan + "";
        function l(t) {
            var n = (t = tf(t)).fill
              , e = t.align
              , l = t.sign
              , h = t.symbol
              , d = t.zero
              , p = t.width
              , g = t.comma
              , y = t.precision
              , v = t.trim
              , _ = t.type;
            "n" === _ ? (g = !0,
            _ = "g") : rf[_] || (void 0 === y && (y = 12),
            v = !0,
            _ = "g"),
            (d || "0" === n && "=" === e) && (d = !0,
            n = "0",
            e = "=");
            var b = "$" === h ? i : "#" === h && /[boxX]/.test(_) ? "0" + _.toLowerCase() : ""
              , m = "$" === h ? o : /[%p]/.test(_) ? c : ""
              , x = rf[_]
              , w = /[defgprs%]/.test(_);
            function M(t) {
                var i, o, c, h = b, M = m;
                if ("c" === _)
                    M = x(t) + M,
                    t = "";
                else {
                    var T = (t = +t) < 0 || 1 / t < 0;
                    if (t = isNaN(t) ? s : x(Math.abs(t), y),
                    v && (t = function(t) {
                        t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                            switch (t[r]) {
                            case ".":
                                i = n = r;
                                break;
                            case "0":
                                0 === i && (i = r),
                                n = r;
                                break;
                            default:
                                if (!+t[r])
                                    break t;
                                i > 0 && (i = 0)
                            }
                        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                    }(t)),
                    T && 0 == +t && "+" !== l && (T = !1),
                    h = (T ? "(" === l ? l : f : "-" === l || "(" === l ? "" : l) + h,
                    M = ("s" === _ ? cf[8 + Qc / 3] : "") + M + (T && "(" === l ? ")" : ""),
                    w)
                        for (i = -1,
                        o = t.length; ++i < o; )
                            if (48 > (c = t.charCodeAt(i)) || c > 57) {
                                M = (46 === c ? a + t.slice(i + 1) : t.slice(i)) + M,
                                t = t.slice(0, i);
                                break
                            }
                }
                g && !d && (t = r(t, 1 / 0));
                var A = h.length + t.length + M.length
                  , S = A < p ? new Array(p - A + 1).join(n) : "";
                switch (g && d && (t = r(S + t, S.length ? p - M.length : 1 / 0),
                S = ""),
                e) {
                case "<":
                    t = h + t + M + S;
                    break;
                case "=":
                    t = h + S + t + M;
                    break;
                case "^":
                    t = S.slice(0, A = S.length >> 1) + h + t + M + S.slice(A);
                    break;
                default:
                    t = S + h + t + M
                }
                return u(t)
            }
            return y = void 0 === y ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y)),
            M.toString = function() {
                return t + ""
            }
            ,
            M
        }
        return {
            format: l,
            formatPrefix: function(t, n) {
                var e = l(((t = tf(t)).type = "f",
                t))
                  , r = 3 * Math.max(-8, Math.min(8, Math.floor(Kc(n) / 3)))
                  , i = Math.pow(10, -r)
                  , o = cf[8 + r / 3];
                return function(t) {
                    return e(i * t) + o
                }
            }
        }
    }
    function sf(n) {
        return af = ff(n),
        t.format = af.format,
        t.formatPrefix = af.formatPrefix,
        af
    }
    function lf(t) {
        return Math.max(0, -Kc(Math.abs(t)))
    }
    function hf(t, n) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Kc(n) / 3))) - Kc(Math.abs(t)))
    }
    function df(t, n) {
        return t = Math.abs(t),
        n = Math.abs(n) - t,
        Math.max(0, Kc(n) - Kc(t)) + 1
    }
    t.format = void 0,
    t.formatPrefix = void 0,
    sf({
        thousands: ",",
        grouping: [3],
        currency: ["$", ""]
    });
    var pf = 1e-6
      , gf = 1e-12
      , yf = Math.PI
      , vf = yf / 2
      , _f = yf / 4
      , bf = 2 * yf
      , mf = 180 / yf
      , xf = yf / 180
      , wf = Math.abs
      , Mf = Math.atan
      , Tf = Math.atan2
      , Af = Math.cos
      , Sf = Math.ceil
      , Ef = Math.exp
      , Nf = Math.hypot
      , kf = Math.log
      , Cf = Math.pow
      , Pf = Math.sin
      , zf = Math.sign || function(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0
    }
      , $f = Math.sqrt
      , Df = Math.tan;
    function Rf(t) {
        return t > 1 ? 0 : t < -1 ? yf : Math.acos(t)
    }
    function Ff(t) {
        return t > 1 ? vf : t < -1 ? -vf : Math.asin(t)
    }
    function qf(t) {
        return (t = Pf(t / 2)) * t
    }
    function Uf() {}
    function If(t, n) {
        t && Bf.hasOwnProperty(t.type) && Bf[t.type](t, n)
    }
    var Of = {
        Feature: function(t, n) {
            If(t.geometry, n)
        },
        FeatureCollection: function(t, n) {
            for (var e = t.features, r = -1, i = e.length; ++r < i; )
                If(e[r].geometry, n)
        }
    }
      , Bf = {
        Sphere: function(t, n) {
            n.sphere()
        },
        Point: function(t, n) {
            t = t.coordinates,
            n.point(t[0], t[1], t[2])
        },
        MultiPoint: function(t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                t = e[r],
                n.point(t[0], t[1], t[2])
        },
        LineString: function(t, n) {
            Yf(t.coordinates, n, 0)
        },
        MultiLineString: function(t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                Yf(e[r], n, 0)
        },
        Polygon: function(t, n) {
            Lf(t.coordinates, n)
        },
        MultiPolygon: function(t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                Lf(e[r], n)
        },
        GeometryCollection: function(t, n) {
            for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
                If(e[r], n)
        }
    };
    function Yf(t, n, e) {
        var r, i = -1, o = t.length - e;
        for (n.lineStart(); ++i < o; )
            r = t[i],
            n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }
    function Lf(t, n) {
        var e = -1
          , r = t.length;
        for (n.polygonStart(); ++e < r; )
            Yf(t[e], n, 1);
        n.polygonEnd()
    }
    function jf(t, n) {
        t && Of.hasOwnProperty(t.type) ? Of[t.type](t, n) : If(t, n)
    }
    var Hf, Xf, Gf, Vf, Wf, Zf, Kf, Qf, Jf, ts, ns, es, rs, is, os, as, us = new A, cs = new A, fs = {
        point: Uf,
        lineStart: Uf,
        lineEnd: Uf,
        polygonStart: function() {
            us = new A,
            fs.lineStart = ss,
            fs.lineEnd = ls
        },
        polygonEnd: function() {
            var t = +us;
            cs.add(t < 0 ? bf + t : t),
            this.lineStart = this.lineEnd = this.point = Uf
        },
        sphere: function() {
            cs.add(bf)
        }
    };
    function ss() {
        fs.point = hs
    }
    function ls() {
        ds(Hf, Xf)
    }
    function hs(t, n) {
        fs.point = ds,
        Hf = t,
        Xf = n,
        Gf = t *= xf,
        Vf = Af(n = (n *= xf) / 2 + _f),
        Wf = Pf(n)
    }
    function ds(t, n) {
        var e = (t *= xf) - Gf
          , r = e >= 0 ? 1 : -1
          , i = r * e
          , o = Af(n = (n *= xf) / 2 + _f)
          , a = Pf(n)
          , u = Wf * a
          , c = Vf * o + u * Af(i)
          , f = u * r * Pf(i);
        us.add(Tf(f, c)),
        Gf = t,
        Vf = o,
        Wf = a
    }
    function ps(t) {
        return [Tf(t[1], t[0]), Ff(t[2])]
    }
    function gs(t) {
        var n = t[0]
          , e = t[1]
          , r = Af(e);
        return [r * Af(n), r * Pf(n), Pf(e)]
    }
    function ys(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }
    function vs(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }
    function _s(t, n) {
        t[0] += n[0],
        t[1] += n[1],
        t[2] += n[2]
    }
    function bs(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }
    function ms(t) {
        var n = $f(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n,
        t[1] /= n,
        t[2] /= n
    }
    var xs, ws, Ms, Ts, As, Ss, Es, Ns, ks, Cs, Ps, zs, $s, Ds, Rs, Fs, qs = {
        point: Us,
        lineStart: Os,
        lineEnd: Bs,
        polygonStart: function() {
            qs.point = Ys,
            qs.lineStart = Ls,
            qs.lineEnd = js,
            is = new A,
            fs.polygonStart()
        },
        polygonEnd: function() {
            fs.polygonEnd(),
            qs.point = Us,
            qs.lineStart = Os,
            qs.lineEnd = Bs,
            us < 0 ? (Zf = -(Qf = 180),
            Kf = -(Jf = 90)) : is > pf ? Jf = 90 : is < -pf && (Kf = -90),
            as[0] = Zf,
            as[1] = Qf
        },
        sphere: function() {
            Zf = -(Qf = 180),
            Kf = -(Jf = 90)
        }
    };
    function Us(t, n) {
        os.push(as = [Zf = t, Qf = t]),
        n < Kf && (Kf = n),
        n > Jf && (Jf = n)
    }
    function Is(t, n) {
        var e = gs([t * xf, n * xf]);
        if (rs) {
            var r = vs(rs, e)
              , i = vs([r[1], -r[0], 0], r);
            ms(i),
            i = ps(i);
            var o, a = t - ts, u = a > 0 ? 1 : -1, c = i[0] * mf * u, f = wf(a) > 180;
            f ^ (u * ts < c && c < u * t) ? (o = i[1] * mf) > Jf && (Jf = o) : f ^ (u * ts < (c = (c + 360) % 360 - 180) && c < u * t) ? (o = -i[1] * mf) < Kf && (Kf = o) : (n < Kf && (Kf = n),
            n > Jf && (Jf = n)),
            f ? t < ts ? Hs(Zf, t) > Hs(Zf, Qf) && (Qf = t) : Hs(t, Qf) > Hs(Zf, Qf) && (Zf = t) : Qf >= Zf ? (t < Zf && (Zf = t),
            t > Qf && (Qf = t)) : t > ts ? Hs(Zf, t) > Hs(Zf, Qf) && (Qf = t) : Hs(t, Qf) > Hs(Zf, Qf) && (Zf = t)
        } else
            os.push(as = [Zf = t, Qf = t]);
        n < Kf && (Kf = n),
        n > Jf && (Jf = n),
        rs = e,
        ts = t
    }
    function Os() {
        qs.point = Is
    }
    function Bs() {
        as[0] = Zf,
        as[1] = Qf,
        qs.point = Us,
        rs = null
    }
    function Ys(t, n) {
        if (rs) {
            var e = t - ts;
            is.add(wf(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else
            ns = t,
            es = n;
        fs.point(t, n),
        Is(t, n)
    }
    function Ls() {
        fs.lineStart()
    }
    function js() {
        Ys(ns, es),
        fs.lineEnd(),
        wf(is) > pf && (Zf = -(Qf = 180)),
        as[0] = Zf,
        as[1] = Qf,
        rs = null
    }
    function Hs(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }
    function Xs(t, n) {
        return t[0] - n[0]
    }
    function Gs(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }
    var Vs = {
        sphere: Uf,
        point: Ws,
        lineStart: Ks,
        lineEnd: tl,
        polygonStart: function() {
            Vs.lineStart = nl,
            Vs.lineEnd = el
        },
        polygonEnd: function() {
            Vs.lineStart = Ks,
            Vs.lineEnd = tl
        }
    };
    function Ws(t, n) {
        t *= xf;
        var e = Af(n *= xf);
        Zs(e * Af(t), e * Pf(t), Pf(n))
    }
    function Zs(t, n, e) {
        ++xs,
        Ms += (t - Ms) / xs,
        Ts += (n - Ts) / xs,
        As += (e - As) / xs
    }
    function Ks() {
        Vs.point = Qs
    }
    function Qs(t, n) {
        t *= xf;
        var e = Af(n *= xf);
        Ds = e * Af(t),
        Rs = e * Pf(t),
        Fs = Pf(n),
        Vs.point = Js,
        Zs(Ds, Rs, Fs)
    }
    function Js(t, n) {
        t *= xf;
        var e = Af(n *= xf)
          , r = e * Af(t)
          , i = e * Pf(t)
          , o = Pf(n)
          , a = Tf($f((a = Rs * o - Fs * i) * a + (a = Fs * r - Ds * o) * a + (a = Ds * i - Rs * r) * a), Ds * r + Rs * i + Fs * o);
        ws += a,
        Ss += a * (Ds + (Ds = r)),
        Es += a * (Rs + (Rs = i)),
        Ns += a * (Fs + (Fs = o)),
        Zs(Ds, Rs, Fs)
    }
    function tl() {
        Vs.point = Ws
    }
    function nl() {
        Vs.point = rl
    }
    function el() {
        il(zs, $s),
        Vs.point = Ws
    }
    function rl(t, n) {
        zs = t,
        $s = n,
        t *= xf,
        n *= xf,
        Vs.point = il;
        var e = Af(n);
        Ds = e * Af(t),
        Rs = e * Pf(t),
        Fs = Pf(n),
        Zs(Ds, Rs, Fs)
    }
    function il(t, n) {
        t *= xf;
        var e = Af(n *= xf)
          , r = e * Af(t)
          , i = e * Pf(t)
          , o = Pf(n)
          , a = Rs * o - Fs * i
          , u = Fs * r - Ds * o
          , c = Ds * i - Rs * r
          , f = Nf(a, u, c)
          , s = Ff(f)
          , l = f && -s / f;
        ks.add(l * a),
        Cs.add(l * u),
        Ps.add(l * c),
        ws += s,
        Ss += s * (Ds + (Ds = r)),
        Es += s * (Rs + (Rs = i)),
        Ns += s * (Fs + (Fs = o)),
        Zs(Ds, Rs, Fs)
    }
    function ol(t) {
        return function() {
            return t
        }
    }
    function al(t, n) {
        function e(e, r) {
            return e = t(e, r),
            n(e[0], e[1])
        }
        return t.invert && n.invert && (e.invert = function(e, r) {
            return (e = n.invert(e, r)) && t.invert(e[0], e[1])
        }
        ),
        e
    }
    function ul(t, n) {
        return wf(t) > yf && (t -= Math.round(t / bf) * bf),
        [t, n]
    }
    function cl(t, n, e) {
        return (t %= bf) ? n || e ? al(sl(t), ll(n, e)) : sl(t) : n || e ? ll(n, e) : ul
    }
    function fl(t) {
        return function(n, e) {
            return wf(n += t) > yf && (n -= Math.round(n / bf) * bf),
            [n, e]
        }
    }
    function sl(t) {
        var n = fl(t);
        return n.invert = fl(-t),
        n
    }
    function ll(t, n) {
        var e = Af(t)
          , r = Pf(t)
          , i = Af(n)
          , o = Pf(n);
        function a(t, n) {
            var a = Af(n)
              , u = Af(t) * a
              , c = Pf(t) * a
              , f = Pf(n)
              , s = f * e + u * r;
            return [Tf(c * i - s * o, u * e - f * r), Ff(s * i + c * o)]
        }
        return a.invert = function(t, n) {
            var a = Af(n)
              , u = Af(t) * a
              , c = Pf(t) * a
              , f = Pf(n)
              , s = f * i - c * o;
            return [Tf(c * i + f * o, u * e + s * r), Ff(s * e - u * r)]
        }
        ,
        a
    }
    function hl(t) {
        function n(n) {
            return (n = t(n[0] * xf, n[1] * xf))[0] *= mf,
            n[1] *= mf,
            n
        }
        return t = cl(t[0] * xf, t[1] * xf, t.length > 2 ? t[2] * xf : 0),
        n.invert = function(n) {
            return (n = t.invert(n[0] * xf, n[1] * xf))[0] *= mf,
            n[1] *= mf,
            n
        }
        ,
        n
    }
    function dl(t, n, e, r, i, o) {
        if (e) {
            var a = Af(n)
              , u = Pf(n)
              , c = r * e;
            null == i ? (i = n + r * bf,
            o = n - c / 2) : (i = pl(a, i),
            o = pl(a, o),
            (r > 0 ? i < o : i > o) && (i += r * bf));
            for (var f, s = i; r > 0 ? s > o : s < o; s -= c)
                f = ps([a, -u * Af(s), -u * Pf(s)]),
                t.point(f[0], f[1])
        }
    }
    function pl(t, n) {
        (n = gs(n))[0] -= t,
        ms(n);
        var e = Rf(-n[1]);
        return ((-n[2] < 0 ? -e : e) + bf - pf) % bf
    }
    function gl() {
        var t, n = [];
        return {
            point: function(n, e, r) {
                t.push([n, e, r])
            },
            lineStart: function() {
                n.push(t = [])
            },
            lineEnd: Uf,
            rejoin: function() {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            },
            result: function() {
                var e = n;
                return n = [],
                t = null,
                e
            }
        }
    }
    function yl(t, n) {
        return wf(t[0] - n[0]) < pf && wf(t[1] - n[1]) < pf
    }
    function vl(t, n, e, r) {
        this.x = t,
        this.z = n,
        this.o = e,
        this.e = r,
        this.v = !1,
        this.n = this.p = null
    }
    function _l(t, n, e, r, i) {
        var o, a, u = [], c = [];
        if (t.forEach((function(t) {
            if (!((n = t.length - 1) <= 0)) {
                var n, e, r = t[0], a = t[n];
                if (yl(r, a)) {
                    if (!r[2] && !a[2]) {
                        for (i.lineStart(),
                        o = 0; o < n; ++o)
                            i.point((r = t[o])[0], r[1]);
                        return void i.lineEnd()
                    }
                    a[0] += 2 * pf
                }
                u.push(e = new vl(r,t,null,!0)),
                c.push(e.o = new vl(r,null,e,!1)),
                u.push(e = new vl(a,t,null,!1)),
                c.push(e.o = new vl(a,null,e,!0))
            }
        }
        )),
        u.length) {
            for (c.sort(n),
            bl(u),
            bl(c),
            o = 0,
            a = c.length; o < a; ++o)
                c[o].e = e = !e;
            for (var f, s, l = u[0]; ; ) {
                for (var h = l, d = !0; h.v; )
                    if ((h = h.n) === l)
                        return;
                f = h.z,
                i.lineStart();
                do {
                    if (h.v = h.o.v = !0,
                    h.e) {
                        if (d)
                            for (o = 0,
                            a = f.length; o < a; ++o)
                                i.point((s = f[o])[0], s[1]);
                        else
                            r(h.x, h.n.x, 1, i);
                        h = h.n
                    } else {
                        if (d)
                            for (f = h.p.z,
                            o = f.length - 1; o >= 0; --o)
                                i.point((s = f[o])[0], s[1]);
                        else
                            r(h.x, h.p.x, -1, i);
                        h = h.p
                    }
                    f = (h = h.o).z,
                    d = !d
                } while (!h.v);
                i.lineEnd()
            }
        }
    }
    function bl(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; ++r < n; )
                i.n = e = t[r],
                e.p = i,
                i = e;
            i.n = e = t[0],
            e.p = i
        }
    }
    function ml(t) {
        return wf(t[0]) <= yf ? t[0] : zf(t[0]) * ((wf(t[0]) + yf) % bf - yf)
    }
    function xl(t, n) {
        var e = ml(n)
          , r = n[1]
          , i = Pf(r)
          , o = [Pf(e), -Af(e), 0]
          , a = 0
          , u = 0
          , c = new A;
        1 === i ? r = vf + pf : -1 === i && (r = -vf - pf);
        for (var f = 0, s = t.length; f < s; ++f)
            if (h = (l = t[f]).length)
                for (var l, h, d = l[h - 1], p = ml(d), g = d[1] / 2 + _f, y = Pf(g), v = Af(g), _ = 0; _ < h; ++_,
                p = m,
                y = w,
                v = M,
                d = b) {
                    var b = l[_]
                      , m = ml(b)
                      , x = b[1] / 2 + _f
                      , w = Pf(x)
                      , M = Af(x)
                      , T = m - p
                      , S = T >= 0 ? 1 : -1
                      , E = S * T
                      , N = E > yf
                      , k = y * w;
                    if (c.add(Tf(k * S * Pf(E), v * M + k * Af(E))),
                    a += N ? T + S * bf : T,
                    N ^ p >= e ^ m >= e) {
                        var C = vs(gs(d), gs(b));
                        ms(C);
                        var P = vs(o, C);
                        ms(P);
                        var z = (N ^ T >= 0 ? -1 : 1) * Ff(P[2]);
                        (r > z || r === z && (C[0] || C[1])) && (u += N ^ T >= 0 ? 1 : -1)
                    }
                }
        return (a < -pf || a < pf && c < -gf) ^ 1 & u
    }
    function wl(t, n, e, r) {
        return function(i) {
            var o, a, u, c = n(i), f = gl(), s = n(f), l = !1, h = {
                point: d,
                lineStart: g,
                lineEnd: y,
                polygonStart: function() {
                    h.point = v,
                    h.lineStart = _,
                    h.lineEnd = b,
                    a = [],
                    o = []
                },
                polygonEnd: function() {
                    h.point = d,
                    h.lineStart = g,
                    h.lineEnd = y,
                    a = st(a);
                    var t = xl(o, r);
                    a.length ? (l || (i.polygonStart(),
                    l = !0),
                    _l(a, Tl, t, e, i)) : t && (l || (i.polygonStart(),
                    l = !0),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd()),
                    l && (i.polygonEnd(),
                    l = !1),
                    a = o = null
                },
                sphere: function() {
                    i.polygonStart(),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd(),
                    i.polygonEnd()
                }
            };
            function d(n, e) {
                t(n, e) && i.point(n, e)
            }
            function p(t, n) {
                c.point(t, n)
            }
            function g() {
                h.point = p,
                c.lineStart()
            }
            function y() {
                h.point = d,
                c.lineEnd()
            }
            function v(t, n) {
                u.push([t, n]),
                s.point(t, n)
            }
            function _() {
                s.lineStart(),
                u = []
            }
            function b() {
                v(u[0][0], u[0][1]),
                s.lineEnd();
                var t, n, e, r, c = s.clean(), h = f.result(), d = h.length;
                if (u.pop(),
                o.push(u),
                u = null,
                d)
                    if (1 & c) {
                        if ((n = (e = h[0]).length - 1) > 0) {
                            for (l || (i.polygonStart(),
                            l = !0),
                            i.lineStart(),
                            t = 0; t < n; ++t)
                                i.point((r = e[t])[0], r[1]);
                            i.lineEnd()
                        }
                    } else
                        d > 1 && 2 & c && h.push(h.pop().concat(h.shift())),
                        a.push(h.filter(Ml))
            }
            return h
        }
    }
    function Ml(t) {
        return t.length > 1
    }
    function Tl(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - vf - pf : vf - t[1]) - ((n = n.x)[0] < 0 ? n[1] - vf - pf : vf - n[1])
    }
    ul.invert = ul;
    var Al = wl((function() {
        return !0
    }
    ), (function(t) {
        var n, e = NaN, r = NaN, i = NaN;
        return {
            lineStart: function() {
                t.lineStart(),
                n = 1
            },
            point: function(o, a) {
                var u = o > 0 ? yf : -yf
                  , c = wf(o - e);
                wf(c - yf) < pf ? (t.point(e, r = (r + a) / 2 > 0 ? vf : -vf),
                t.point(i, r),
                t.lineEnd(),
                t.lineStart(),
                t.point(u, r),
                t.point(o, r),
                n = 0) : i !== u && c >= yf && (wf(e - i) < pf && (e -= i * pf),
                wf(o - u) < pf && (o -= u * pf),
                r = function(t, n, e, r) {
                    var i, o, a = Pf(t - e);
                    return wf(a) > pf ? Mf((Pf(n) * (o = Af(r)) * Pf(e) - Pf(r) * (i = Af(n)) * Pf(t)) / (i * o * a)) : (n + r) / 2
                }(e, r, o, a),
                t.point(i, r),
                t.lineEnd(),
                t.lineStart(),
                t.point(u, r),
                n = 0),
                t.point(e = o, r = a),
                i = u
            },
            lineEnd: function() {
                t.lineEnd(),
                e = r = NaN
            },
            clean: function() {
                return 2 - n
            }
        }
    }
    ), (function(t, n, e, r) {
        var i;
        if (null == t)
            i = e * vf,
            r.point(-yf, i),
            r.point(0, i),
            r.point(yf, i),
            r.point(yf, 0),
            r.point(yf, -i),
            r.point(0, -i),
            r.point(-yf, -i),
            r.point(-yf, 0),
            r.point(-yf, i);
        else if (wf(t[0] - n[0]) > pf) {
            var o = t[0] < n[0] ? yf : -yf;
            i = e * o / 2,
            r.point(-o, i),
            r.point(0, i),
            r.point(o, i)
        } else
            r.point(n[0], n[1])
    }
    ), [-yf, -vf]);
    function Sl(t) {
        var n = Af(t)
          , e = 6 * xf
          , r = n > 0
          , i = wf(n) > pf;
        function o(t, e) {
            return Af(t) * Af(e) > n
        }
        function a(t, e, r) {
            var i = [1, 0, 0]
              , o = vs(gs(t), gs(e))
              , a = ys(o, o)
              , u = o[0]
              , c = a - u * u;
            if (!c)
                return !r && t;
            var f = n * a / c
              , s = -n * u / c
              , l = vs(i, o)
              , h = bs(i, f);
            _s(h, bs(o, s));
            var d = l
              , p = ys(h, d)
              , g = ys(d, d)
              , y = p * p - g * (ys(h, h) - 1);
            if (!(y < 0)) {
                var v = $f(y)
                  , _ = bs(d, (-p - v) / g);
                if (_s(_, h),
                _ = ps(_),
                !r)
                    return _;
                var b, m = t[0], x = e[0], w = t[1], M = e[1];
                x < m && (b = m,
                m = x,
                x = b);
                var T = x - m
                  , A = wf(T - yf) < pf;
                if (!A && M < w && (b = w,
                w = M,
                M = b),
                A || T < pf ? A ? w + M > 0 ^ _[1] < (wf(_[0] - m) < pf ? w : M) : w <= _[1] && _[1] <= M : T > yf ^ (m <= _[0] && _[0] <= x)) {
                    var S = bs(d, (-p + v) / g);
                    return _s(S, h),
                    [_, ps(S)]
                }
            }
        }
        function u(n, e) {
            var i = r ? t : yf - t
              , o = 0;
            return n < -i ? o |= 1 : n > i && (o |= 2),
            e < -i ? o |= 4 : e > i && (o |= 8),
            o
        }
        return wl(o, (function(t) {
            var n, e, c, f, s;
            return {
                lineStart: function() {
                    f = c = !1,
                    s = 1
                },
                point: function(l, h) {
                    var d, p = [l, h], g = o(l, h), y = r ? g ? 0 : u(l, h) : g ? u(l + (l < 0 ? yf : -yf), h) : 0;
                    if (!n && (f = c = g) && t.lineStart(),
                    g !== c && (!(d = a(n, p)) || yl(n, d) || yl(p, d)) && (p[2] = 1),
                    g !== c)
                        s = 0,
                        g ? (t.lineStart(),
                        d = a(p, n),
                        t.point(d[0], d[1])) : (d = a(n, p),
                        t.point(d[0], d[1], 2),
                        t.lineEnd()),
                        n = d;
                    else if (i && n && r ^ g) {
                        var v;
                        y & e || !(v = a(p, n, !0)) || (s = 0,
                        r ? (t.lineStart(),
                        t.point(v[0][0], v[0][1]),
                        t.point(v[1][0], v[1][1]),
                        t.lineEnd()) : (t.point(v[1][0], v[1][1]),
                        t.lineEnd(),
                        t.lineStart(),
                        t.point(v[0][0], v[0][1], 3)))
                    }
                    !g || n && yl(n, p) || t.point(p[0], p[1]),
                    n = p,
                    c = g,
                    e = y
                },
                lineEnd: function() {
                    c && t.lineEnd(),
                    n = null
                },
                clean: function() {
                    return s | (f && c) << 1
                }
            }
        }
        ), (function(n, r, i, o) {
            dl(o, t, e, i, n, r)
        }
        ), r ? [0, -t] : [-yf, t - yf])
    }
    var El, Nl, kl, Cl, Pl = 1e9, zl = -Pl;
    function $l(t, n, e, r) {
        function i(i, o) {
            return t <= i && i <= e && n <= o && o <= r
        }
        function o(i, o, u, f) {
            var s = 0
              , l = 0;
            if (null == i || (s = a(i, u)) !== (l = a(o, u)) || c(i, o) < 0 ^ u > 0)
                do {
                    f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
                } while ((s = (s + u + 4) % 4) !== l);
            else
                f.point(o[0], o[1])
        }
        function a(r, i) {
            return wf(r[0] - t) < pf ? i > 0 ? 0 : 3 : wf(r[0] - e) < pf ? i > 0 ? 2 : 1 : wf(r[1] - n) < pf ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }
        function u(t, n) {
            return c(t.x, n.x)
        }
        function c(t, n) {
            var e = a(t, 1)
              , r = a(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }
        return function(a) {
            var c, f, s, l, h, d, p, g, y, v, _, b = a, m = gl(), x = {
                point: w,
                lineStart: function() {
                    x.point = M,
                    f && f.push(s = []);
                    v = !0,
                    y = !1,
                    p = g = NaN
                },
                lineEnd: function() {
                    c && (M(l, h),
                    d && y && m.rejoin(),
                    c.push(m.result()));
                    x.point = w,
                    y && b.lineEnd()
                },
                polygonStart: function() {
                    b = m,
                    c = [],
                    f = [],
                    _ = !0
                },
                polygonEnd: function() {
                    var n = function() {
                        for (var n = 0, e = 0, i = f.length; e < i; ++e)
                            for (var o, a, u = f[e], c = 1, s = u.length, l = u[0], h = l[0], d = l[1]; c < s; ++c)
                                o = h,
                                a = d,
                                h = (l = u[c])[0],
                                d = l[1],
                                a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
                        return n
                    }()
                      , e = _ && n
                      , i = (c = st(c)).length;
                    (e || i) && (a.polygonStart(),
                    e && (a.lineStart(),
                    o(null, null, 1, a),
                    a.lineEnd()),
                    i && _l(c, u, n, o, a),
                    a.polygonEnd());
                    b = a,
                    c = f = s = null
                }
            };
            function w(t, n) {
                i(t, n) && b.point(t, n)
            }
            function M(o, a) {
                var u = i(o, a);
                if (f && s.push([o, a]),
                v)
                    l = o,
                    h = a,
                    d = u,
                    v = !1,
                    u && (b.lineStart(),
                    b.point(o, a));
                else if (u && y)
                    b.point(o, a);
                else {
                    var c = [p = Math.max(zl, Math.min(Pl, p)), g = Math.max(zl, Math.min(Pl, g))]
                      , m = [o = Math.max(zl, Math.min(Pl, o)), a = Math.max(zl, Math.min(Pl, a))];
                    !function(t, n, e, r, i, o) {
                        var a, u = t[0], c = t[1], f = 0, s = 1, l = n[0] - u, h = n[1] - c;
                        if (a = e - u,
                        l || !(a > 0)) {
                            if (a /= l,
                            l < 0) {
                                if (a < f)
                                    return;
                                a < s && (s = a)
                            } else if (l > 0) {
                                if (a > s)
                                    return;
                                a > f && (f = a)
                            }
                            if (a = i - u,
                            l || !(a < 0)) {
                                if (a /= l,
                                l < 0) {
                                    if (a > s)
                                        return;
                                    a > f && (f = a)
                                } else if (l > 0) {
                                    if (a < f)
                                        return;
                                    a < s && (s = a)
                                }
                                if (a = r - c,
                                h || !(a > 0)) {
                                    if (a /= h,
                                    h < 0) {
                                        if (a < f)
                                            return;
                                        a < s && (s = a)
                                    } else if (h > 0) {
                                        if (a > s)
                                            return;
                                        a > f && (f = a)
                                    }
                                    if (a = o - c,
                                    h || !(a < 0)) {
                                        if (a /= h,
                                        h < 0) {
                                            if (a > s)
                                                return;
                                            a > f && (f = a)
                                        } else if (h > 0) {
                                            if (a < f)
                                                return;
                                            a < s && (s = a)
                                        }
                                        return f > 0 && (t[0] = u + f * l,
                                        t[1] = c + f * h),
                                        s < 1 && (n[0] = u + s * l,
                                        n[1] = c + s * h),
                                        !0
                                    }
                                }
                            }
                        }
                    }(c, m, t, n, e, r) ? u && (b.lineStart(),
                    b.point(o, a),
                    _ = !1) : (y || (b.lineStart(),
                    b.point(c[0], c[1])),
                    b.point(m[0], m[1]),
                    u || b.lineEnd(),
                    _ = !1)
                }
                p = o,
                g = a,
                y = u
            }
            return x
        }
    }
    var Dl = {
        sphere: Uf,
        point: Uf,
        lineStart: function() {
            Dl.point = Fl,
            Dl.lineEnd = Rl
        },
        lineEnd: Uf,
        polygonStart: Uf,
        polygonEnd: Uf
    };
    function Rl() {
        Dl.point = Dl.lineEnd = Uf
    }
    function Fl(t, n) {
        Nl = t *= xf,
        kl = Pf(n *= xf),
        Cl = Af(n),
        Dl.point = ql
    }
    function ql(t, n) {
        t *= xf;
        var e = Pf(n *= xf)
          , r = Af(n)
          , i = wf(t - Nl)
          , o = Af(i)
          , a = r * Pf(i)
          , u = Cl * e - kl * r * o
          , c = kl * e + Cl * r * o;
        El.add(Tf($f(a * a + u * u), c)),
        Nl = t,
        kl = e,
        Cl = r
    }
    function Ul(t) {
        return El = new A,
        jf(t, Dl),
        +El
    }
    var Il = [null, null]
      , Ol = {
        type: "LineString",
        coordinates: Il
    };
    function Bl(t, n) {
        return Il[0] = t,
        Il[1] = n,
        Ul(Ol)
    }
    var Yl = {
        Feature: function(t, n) {
            return jl(t.geometry, n)
        },
        FeatureCollection: function(t, n) {
            for (var e = t.features, r = -1, i = e.length; ++r < i; )
                if (jl(e[r].geometry, n))
                    return !0;
            return !1
        }
    }
      , Ll = {
        Sphere: function() {
            return !0
        },
        Point: function(t, n) {
            return Hl(t.coordinates, n)
        },
        MultiPoint: function(t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                if (Hl(e[r], n))
                    return !0;
            return !1
        },
        LineString: function(t, n) {
            return Xl(t.coordinates, n)
        },
        MultiLineString: function(t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                if (Xl(e[r], n))
                    return !0;
            return !1
        },
        Polygon: function(t, n) {
            return Gl(t.coordinates, n)
        },
        MultiPolygon: function(t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
                if (Gl(e[r], n))
                    return !0;
            return !1
        },
        GeometryCollection: function(t, n) {
            for (var e = t.geometries, r = -1, i = e.length; ++r < i; )
                if (jl(e[r], n))
                    return !0;
            return !1
        }
    };
    function jl(t, n) {
        return !(!t || !Ll.hasOwnProperty(t.type)) && Ll[t.type](t, n)
    }
    function Hl(t, n) {
        return 0 === Bl(t, n)
    }
    function Xl(t, n) {
        for (var e, r, i, o = 0, a = t.length; o < a; o++) {
            if (0 === (r = Bl(t[o], n)))
                return !0;
            if (o > 0 && (i = Bl(t[o], t[o - 1])) > 0 && e <= i && r <= i && (e + r - i) * (1 - Math.pow((e - r) / i, 2)) < gf * i)
                return !0;
            e = r
        }
        return !1
    }
    function Gl(t, n) {
        return !!xl(t.map(Vl), Wl(n))
    }
    function Vl(t) {
        return (t = t.map(Wl)).pop(),
        t
    }
    function Wl(t) {
        return [t[0] * xf, t[1] * xf]
    }
    function Zl(t, n, e) {
        var r = ht(t, n - pf, e).concat(n);
        return function(t) {
            return r.map((function(n) {
                return [t, n]
            }
            ))
        }
    }
    function Kl(t, n, e) {
        var r = ht(t, n - pf, e).concat(n);
        return function(t) {
            return r.map((function(n) {
                return [n, t]
            }
            ))
        }
    }
    function Ql() {
        var t, n, e, r, i, o, a, u, c, f, s, l, h = 10, d = h, p = 90, g = 360, y = 2.5;
        function v() {
            return {
                type: "MultiLineString",
                coordinates: _()
            }
        }
        function _() {
            return ht(Sf(r / p) * p, e, p).map(s).concat(ht(Sf(u / g) * g, a, g).map(l)).concat(ht(Sf(n / h) * h, t, h).filter((function(t) {
                return wf(t % p) > pf
            }
            )).map(c)).concat(ht(Sf(o / d) * d, i, d).filter((function(t) {
                return wf(t % g) > pf
            }
            )).map(f))
        }
        return v.lines = function() {
            return _().map((function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            }
            ))
        }
        ,
        v.outline = function() {
            return {
                type: "Polygon",
                coordinates: [s(r).concat(l(a).slice(1), s(e).reverse().slice(1), l(u).reverse().slice(1))]
            }
        }
        ,
        v.extent = function(t) {
            return arguments.length ? v.extentMajor(t).extentMinor(t) : v.extentMinor()
        }
        ,
        v.extentMajor = function(t) {
            return arguments.length ? (r = +t[0][0],
            e = +t[1][0],
            u = +t[0][1],
            a = +t[1][1],
            r > e && (t = r,
            r = e,
            e = t),
            u > a && (t = u,
            u = a,
            a = t),
            v.precision(y)) : [[r, u], [e, a]]
        }
        ,
        v.extentMinor = function(e) {
            return arguments.length ? (n = +e[0][0],
            t = +e[1][0],
            o = +e[0][1],
            i = +e[1][1],
            n > t && (e = n,
            n = t,
            t = e),
            o > i && (e = o,
            o = i,
            i = e),
            v.precision(y)) : [[n, o], [t, i]]
        }
        ,
        v.step = function(t) {
            return arguments.length ? v.stepMajor(t).stepMinor(t) : v.stepMinor()
        }
        ,
        v.stepMajor = function(t) {
            return arguments.length ? (p = +t[0],
            g = +t[1],
            v) : [p, g]
        }
        ,
        v.stepMinor = function(t) {
            return arguments.length ? (h = +t[0],
            d = +t[1],
            v) : [h, d]
        }
        ,
        v.precision = function(h) {
            return arguments.length ? (y = +h,
            c = Zl(o, i, 90),
            f = Kl(n, t, y),
            s = Zl(u, a, 90),
            l = Kl(r, e, y),
            v) : y
        }
        ,
        v.extentMajor([[-180, -90 + pf], [180, 90 - pf]]).extentMinor([[-180, -80 - pf], [180, 80 + pf]])
    }
    var Jl, th, nh, eh, rh = t=>t, ih = new A, oh = new A, ah = {
        point: Uf,
        lineStart: Uf,
        lineEnd: Uf,
        polygonStart: function() {
            ah.lineStart = uh,
            ah.lineEnd = sh
        },
        polygonEnd: function() {
            ah.lineStart = ah.lineEnd = ah.point = Uf,
            ih.add(wf(oh)),
            oh = new A
        },
        result: function() {
            var t = ih / 2;
            return ih = new A,
            t
        }
    };
    function uh() {
        ah.point = ch
    }
    function ch(t, n) {
        ah.point = fh,
        Jl = nh = t,
        th = eh = n
    }
    function fh(t, n) {
        oh.add(eh * t - nh * n),
        nh = t,
        eh = n
    }
    function sh() {
        fh(Jl, th)
    }
    var lh = ah
      , hh = 1 / 0
      , dh = hh
      , ph = -hh
      , gh = ph
      , yh = {
        point: function(t, n) {
            t < hh && (hh = t);
            t > ph && (ph = t);
            n < dh && (dh = n);
            n > gh && (gh = n)
        },
        lineStart: Uf,
        lineEnd: Uf,
        polygonStart: Uf,
        polygonEnd: Uf,
        result: function() {
            var t = [[hh, dh], [ph, gh]];
            return ph = gh = -(dh = hh = 1 / 0),
            t
        }
    };
    var vh, _h, bh, mh, xh = yh, wh = 0, Mh = 0, Th = 0, Ah = 0, Sh = 0, Eh = 0, Nh = 0, kh = 0, Ch = 0, Ph = {
        point: zh,
        lineStart: $h,
        lineEnd: Fh,
        polygonStart: function() {
            Ph.lineStart = qh,
            Ph.lineEnd = Uh
        },
        polygonEnd: function() {
            Ph.point = zh,
            Ph.lineStart = $h,
            Ph.lineEnd = Fh
        },
        result: function() {
            var t = Ch ? [Nh / Ch, kh / Ch] : Eh ? [Ah / Eh, Sh / Eh] : Th ? [wh / Th, Mh / Th] : [NaN, NaN];
            return wh = Mh = Th = Ah = Sh = Eh = Nh = kh = Ch = 0,
            t
        }
    };
    function zh(t, n) {
        wh += t,
        Mh += n,
        ++Th
    }
    function $h() {
        Ph.point = Dh
    }
    function Dh(t, n) {
        Ph.point = Rh,
        zh(bh = t, mh = n)
    }
    function Rh(t, n) {
        var e = t - bh
          , r = n - mh
          , i = $f(e * e + r * r);
        Ah += i * (bh + t) / 2,
        Sh += i * (mh + n) / 2,
        Eh += i,
        zh(bh = t, mh = n)
    }
    function Fh() {
        Ph.point = zh
    }
    function qh() {
        Ph.point = Ih
    }
    function Uh() {
        Oh(vh, _h)
    }
    function Ih(t, n) {
        Ph.point = Oh,
        zh(vh = bh = t, _h = mh = n)
    }
    function Oh(t, n) {
        var e = t - bh
          , r = n - mh
          , i = $f(e * e + r * r);
        Ah += i * (bh + t) / 2,
        Sh += i * (mh + n) / 2,
        Eh += i,
        Nh += (i = mh * t - bh * n) * (bh + t),
        kh += i * (mh + n),
        Ch += 3 * i,
        zh(bh = t, mh = n)
    }
    var Bh = Ph;
    function Yh(t) {
        this._context = t
    }
    Yh.prototype = {
        _radius: 4.5,
        pointRadius: function(t) {
            return this._radius = t,
            this
        },
        polygonStart: function() {
            this._line = 0
        },
        polygonEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            0 === this._line && this._context.closePath(),
            this._point = NaN
        },
        point: function(t, n) {
            switch (this._point) {
            case 0:
                this._context.moveTo(t, n),
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(t, n);
                break;
            default:
                this._context.moveTo(t + this._radius, n),
                this._context.arc(t, n, this._radius, 0, bf)
            }
        },
        result: Uf
    };
    var Lh, jh, Hh, Xh, Gh, Vh = new A, Wh = {
        point: Uf,
        lineStart: function() {
            Wh.point = Zh
        },
        lineEnd: function() {
            Lh && Kh(jh, Hh),
            Wh.point = Uf
        },
        polygonStart: function() {
            Lh = !0
        },
        polygonEnd: function() {
            Lh = null
        },
        result: function() {
            var t = +Vh;
            return Vh = new A,
            t
        }
    };
    function Zh(t, n) {
        Wh.point = Kh,
        jh = Xh = t,
        Hh = Gh = n
    }
    function Kh(t, n) {
        Xh -= t,
        Gh -= n,
        Vh.add($f(Xh * Xh + Gh * Gh)),
        Xh = t,
        Gh = n
    }
    var Qh = Wh;
    let Jh, td, nd, ed;
    class rd {
        constructor(t) {
            this._append = null == t ? id : function(t) {
                const n = Math.floor(t);
                if (!(n >= 0))
                    throw new RangeError(`invalid digits: ${t}`);
                if (n > 15)
                    return id;
                if (n !== Jh) {
                    const t = 10 ** n;
                    Jh = n,
                    td = function(n) {
                        let e = 1;
                        this._ += n[0];
                        for (const r = n.length; e < r; ++e)
                            this._ += Math.round(arguments[e] * t) / t + n[e]
                    }
                }
                return td
            }(t),
            this._radius = 4.5,
            this._ = ""
        }
        pointRadius(t) {
            return this._radius = +t,
            this
        }
        polygonStart() {
            this._line = 0
        }
        polygonEnd() {
            this._line = NaN
        }
        lineStart() {
            this._point = 0
        }
        lineEnd() {
            0 === this._line && (this._ += "Z"),
            this._point = NaN
        }
        point(t, n) {
            switch (this._point) {
            case 0:
                this._append`M${t},${n}`,
                this._point = 1;
                break;
            case 1:
                this._append`L${t},${n}`;
                break;
            default:
                if (this._append`M${t},${n}`,
                this._radius !== nd || this._append !== td) {
                    const t = this._radius
                      , n = this._;
                    this._ = "",
                    this._append`m0,${t}a${t},${t} 0 1,1 0,${-2 * t}a${t},${t} 0 1,1 0,${2 * t}z`,
                    nd = t,
                    td = this._append,
                    ed = this._,
                    this._ = n
                }
                this._ += ed
            }
        }
        result() {
            const t = this._;
            return this._ = "",
            t.length ? t : null
        }
    }
    function id(t) {
        let n = 1;
        this._ += t[0];
        for (const e = t.length; n < e; ++n)
            this._ += arguments[n] + t[n]
    }
    function od(t) {
        return function(n) {
            var e = new ad;
            for (var r in t)
                e[r] = t[r];
            return e.stream = n,
            e
        }
    }
    function ad() {}
    function ud(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return t.scale(150).translate([0, 0]),
        null != r && t.clipExtent(null),
        jf(e, t.stream(xh)),
        n(xh.result()),
        null != r && t.clipExtent(r),
        t
    }
    function cd(t, n, e) {
        return ud(t, (function(e) {
            var r = n[1][0] - n[0][0]
              , i = n[1][1] - n[0][1]
              , o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1]))
              , a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2
              , u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([a, u])
        }
        ), e)
    }
    function fd(t, n, e) {
        return cd(t, [[0, 0], n], e)
    }
    function sd(t, n, e) {
        return ud(t, (function(e) {
            var r = +n
              , i = r / (e[1][0] - e[0][0])
              , o = (r - i * (e[1][0] + e[0][0])) / 2
              , a = -i * e[0][1];
            t.scale(150 * i).translate([o, a])
        }
        ), e)
    }
    function ld(t, n, e) {
        return ud(t, (function(e) {
            var r = +n
              , i = r / (e[1][1] - e[0][1])
              , o = -i * e[0][0]
              , a = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, a])
        }
        ), e)
    }
    ad.prototype = {
        constructor: ad,
        point: function(t, n) {
            this.stream.point(t, n)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    };
    var hd = 16
      , dd = Af(30 * xf);
    function pd(t, n) {
        return +n ? function(t, n) {
            function e(r, i, o, a, u, c, f, s, l, h, d, p, g, y) {
                var v = f - r
                  , _ = s - i
                  , b = v * v + _ * _;
                if (b > 4 * n && g--) {
                    var m = a + h
                      , x = u + d
                      , w = c + p
                      , M = $f(m * m + x * x + w * w)
                      , T = Ff(w /= M)
                      , A = wf(wf(w) - 1) < pf || wf(o - l) < pf ? (o + l) / 2 : Tf(x, m)
                      , S = t(A, T)
                      , E = S[0]
                      , N = S[1]
                      , k = E - r
                      , C = N - i
                      , P = _ * k - v * C;
                    (P * P / b > n || wf((v * k + _ * C) / b - .5) > .3 || a * h + u * d + c * p < dd) && (e(r, i, o, a, u, c, E, N, A, m /= M, x /= M, w, g, y),
                    y.point(E, N),
                    e(E, N, A, m, x, w, f, s, l, h, d, p, g, y))
                }
            }
            return function(n) {
                var r, i, o, a, u, c, f, s, l, h, d, p, g = {
                    point: y,
                    lineStart: v,
                    lineEnd: b,
                    polygonStart: function() {
                        n.polygonStart(),
                        g.lineStart = m
                    },
                    polygonEnd: function() {
                        n.polygonEnd(),
                        g.lineStart = v
                    }
                };
                function y(e, r) {
                    e = t(e, r),
                    n.point(e[0], e[1])
                }
                function v() {
                    s = NaN,
                    g.point = _,
                    n.lineStart()
                }
                function _(r, i) {
                    var o = gs([r, i])
                      , a = t(r, i);
                    e(s, l, f, h, d, p, s = a[0], l = a[1], f = r, h = o[0], d = o[1], p = o[2], hd, n),
                    n.point(s, l)
                }
                function b() {
                    g.point = y,
                    n.lineEnd()
                }
                function m() {
                    v(),
                    g.point = x,
                    g.lineEnd = w
                }
                function x(t, n) {
                    _(r = t, n),
                    i = s,
                    o = l,
                    a = h,
                    u = d,
                    c = p,
                    g.point = _
                }
                function w() {
                    e(s, l, f, h, d, p, i, o, r, a, u, c, hd, n),
                    g.lineEnd = b,
                    b()
                }
                return g
            }
        }(t, n) : function(t) {
            return od({
                point: function(n, e) {
                    n = t(n, e),
                    this.stream.point(n[0], n[1])
                }
            })
        }(t)
    }
    var gd = od({
        point: function(t, n) {
            this.stream.point(t * xf, n * xf)
        }
    });
    function yd(t, n, e, r, i, o) {
        if (!o)
            return function(t, n, e, r, i) {
                function o(o, a) {
                    return [n + t * (o *= r), e - t * (a *= i)]
                }
                return o.invert = function(o, a) {
                    return [(o - n) / t * r, (e - a) / t * i]
                }
                ,
                o
            }(t, n, e, r, i);
        var a = Af(o)
          , u = Pf(o)
          , c = a * t
          , f = u * t
          , s = a / t
          , l = u / t
          , h = (u * e - a * n) / t
          , d = (u * n + a * e) / t;
        function p(t, o) {
            return [c * (t *= r) - f * (o *= i) + n, e - f * t - c * o]
        }
        return p.invert = function(t, n) {
            return [r * (s * t - l * n + h), i * (d - l * t - s * n)]
        }
        ,
        p
    }
    function vd(t) {
        return _d((function() {
            return t
        }
        ))()
    }
    function _d(t) {
        var n, e, r, i, o, a, u, c, f, s, l = 150, h = 480, d = 250, p = 0, g = 0, y = 0, v = 0, _ = 0, b = 0, m = 1, x = 1, w = null, M = Al, T = null, A = rh, S = .5;
        function E(t) {
            return c(t[0] * xf, t[1] * xf)
        }
        function N(t) {
            return (t = c.invert(t[0], t[1])) && [t[0] * mf, t[1] * mf]
        }
        function k() {
            var t = yd(l, 0, 0, m, x, b).apply(null, n(p, g))
              , r = yd(l, h - t[0], d - t[1], m, x, b);
            return e = cl(y, v, _),
            u = al(n, r),
            c = al(e, u),
            a = pd(u, S),
            C()
        }
        function C() {
            return f = s = null,
            E
        }
        return E.stream = function(t) {
            return f && s === t ? f : f = gd(function(t) {
                return od({
                    point: function(n, e) {
                        var r = t(n, e);
                        return this.stream.point(r[0], r[1])
                    }
                })
            }(e)(M(a(A(s = t)))))
        }
        ,
        E.preclip = function(t) {
            return arguments.length ? (M = t,
            w = void 0,
            C()) : M
        }
        ,
        E.postclip = function(t) {
            return arguments.length ? (A = t,
            T = r = i = o = null,
            C()) : A
        }
        ,
        E.clipAngle = function(t) {
            return arguments.length ? (M = +t ? Sl(w = t * xf) : (w = null,
            Al),
            C()) : w * mf
        }
        ,
        E.clipExtent = function(t) {
            return arguments.length ? (A = null == t ? (T = r = i = o = null,
            rh) : $l(T = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]),
            C()) : null == T ? null : [[T, r], [i, o]]
        }
        ,
        E.scale = function(t) {
            return arguments.length ? (l = +t,
            k()) : l
        }
        ,
        E.translate = function(t) {
            return arguments.length ? (h = +t[0],
            d = +t[1],
            k()) : [h, d]
        }
        ,
        E.center = function(t) {
            return arguments.length ? (p = t[0] % 360 * xf,
            g = t[1] % 360 * xf,
            k()) : [p * mf, g * mf]
        }
        ,
        E.rotate = function(t) {
            return arguments.length ? (y = t[0] % 360 * xf,
            v = t[1] % 360 * xf,
            _ = t.length > 2 ? t[2] % 360 * xf : 0,
            k()) : [y * mf, v * mf, _ * mf]
        }
        ,
        E.angle = function(t) {
            return arguments.length ? (b = t % 360 * xf,
            k()) : b * mf
        }
        ,
        E.reflectX = function(t) {
            return arguments.length ? (m = t ? -1 : 1,
            k()) : m < 0
        }
        ,
        E.reflectY = function(t) {
            return arguments.length ? (x = t ? -1 : 1,
            k()) : x < 0
        }
        ,
        E.precision = function(t) {
            return arguments.length ? (a = pd(u, S = t * t),
            C()) : $f(S)
        }
        ,
        E.fitExtent = function(t, n) {
            return cd(E, t, n)
        }
        ,
        E.fitSize = function(t, n) {
            return fd(E, t, n)
        }
        ,
        E.fitWidth = function(t, n) {
            return sd(E, t, n)
        }
        ,
        E.fitHeight = function(t, n) {
            return ld(E, t, n)
        }
        ,
        function() {
            return n = t.apply(this, arguments),
            E.invert = n.invert && N,
            k()
        }
    }
    function bd(t) {
        var n = 0
          , e = yf / 3
          , r = _d(t)
          , i = r(n, e);
        return i.parallels = function(t) {
            return arguments.length ? r(n = t[0] * xf, e = t[1] * xf) : [n * mf, e * mf]
        }
        ,
        i
    }
    function md(t, n) {
        var e = Pf(t)
          , r = (e + Pf(n)) / 2;
        if (wf(r) < pf)
            return function(t) {
                var n = Af(t);
                function e(t, e) {
                    return [t * n, Pf(e) / n]
                }
                return e.invert = function(t, e) {
                    return [t / n, Ff(e * n)]
                }
                ,
                e
            }(t);
        var i = 1 + e * (2 * r - e)
          , o = $f(i) / r;
        function a(t, n) {
            var e = $f(i - 2 * r * Pf(n)) / r;
            return [e * Pf(t *= r), o - e * Af(t)]
        }
        return a.invert = function(t, n) {
            var e = o - n
              , a = Tf(t, wf(e)) * zf(e);
            return e * r < 0 && (a -= yf * zf(t) * zf(e)),
            [a / r, Ff((i - (t * t + e * e) * r * r) / (2 * r))]
        }
        ,
        a
    }
    function xd() {
        return bd(md).scale(155.424).center([0, 33.6442])
    }
    function wd() {
        return xd().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
    }
    function Md(t) {
        return function(n, e) {
            var r = Af(n)
              , i = Af(e)
              , o = t(r * i);
            return o === 1 / 0 ? [2, 0] : [o * i * Pf(n), o * Pf(e)]
        }
    }
    function Td(t) {
        return function(n, e) {
            var r = $f(n * n + e * e)
              , i = t(r)
              , o = Pf(i)
              , a = Af(i);
            return [Tf(n * o, r * a), Ff(r && e * o / r)]
        }
    }
    var Ad = Md((function(t) {
        return $f(2 / (1 + t))
    }
    ));
    Ad.invert = Td((function(t) {
        return 2 * Ff(t / 2)
    }
    ));
    var Sd = Md((function(t) {
        return (t = Rf(t)) && t / Pf(t)
    }
    ));
    function Ed(t, n) {
        return [t, kf(Df((vf + n) / 2))]
    }
    function Nd(t) {
        var n, e, r, i = vd(t), o = i.center, a = i.scale, u = i.translate, c = i.clipExtent, f = null;
        function s() {
            var o = yf * a()
              , u = i(hl(i.rotate()).invert([0, 0]));
            return c(null == f ? [[u[0] - o, u[1] - o], [u[0] + o, u[1] + o]] : t === Ed ? [[Math.max(u[0] - o, f), n], [Math.min(u[0] + o, e), r]] : [[f, Math.max(u[1] - o, n)], [e, Math.min(u[1] + o, r)]])
        }
        return i.scale = function(t) {
            return arguments.length ? (a(t),
            s()) : a()
        }
        ,
        i.translate = function(t) {
            return arguments.length ? (u(t),
            s()) : u()
        }
        ,
        i.center = function(t) {
            return arguments.length ? (o(t),
            s()) : o()
        }
        ,
        i.clipExtent = function(t) {
            return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0],
            n = +t[0][1],
            e = +t[1][0],
            r = +t[1][1]),
            s()) : null == f ? null : [[f, n], [e, r]]
        }
        ,
        s()
    }
    function kd(t) {
        return Df((vf + t) / 2)
    }
    function Cd(t, n) {
        var e = Af(t)
          , r = t === n ? Pf(t) : kf(e / Af(n)) / kf(kd(n) / kd(t))
          , i = e * Cf(kd(t), r) / r;
        if (!r)
            return Ed;
        function o(t, n) {
            i > 0 ? n < -vf + pf && (n = -vf + pf) : n > vf - pf && (n = vf - pf);
            var e = i / Cf(kd(n), r);
            return [e * Pf(r * t), i - e * Af(r * t)]
        }
        return o.invert = function(t, n) {
            var e = i - n
              , o = zf(r) * $f(t * t + e * e)
              , a = Tf(t, wf(e)) * zf(e);
            return e * r < 0 && (a -= yf * zf(t) * zf(e)),
            [a / r, 2 * Mf(Cf(i / o, 1 / r)) - vf]
        }
        ,
        o
    }
    function Pd(t, n) {
        return [t, n]
    }
    function zd(t, n) {
        var e = Af(t)
          , r = t === n ? Pf(t) : (e - Af(n)) / (n - t)
          , i = e / r + t;
        if (wf(r) < pf)
            return Pd;
        function o(t, n) {
            var e = i - n
              , o = r * t;
            return [e * Pf(o), i - e * Af(o)]
        }
        return o.invert = function(t, n) {
            var e = i - n
              , o = Tf(t, wf(e)) * zf(e);
            return e * r < 0 && (o -= yf * zf(t) * zf(e)),
            [o / r, i - zf(r) * $f(t * t + e * e)]
        }
        ,
        o
    }
    Sd.invert = Td((function(t) {
        return t
    }
    )),
    Ed.invert = function(t, n) {
        return [t, 2 * Mf(Ef(n)) - vf]
    }
    ,
    Pd.invert = Pd;
    var $d = 1.340264
      , Dd = -.081106
      , Rd = 893e-6
      , Fd = .003796
      , qd = $f(3) / 2;
    function Ud(t, n) {
        var e = Ff(qd * Pf(n))
          , r = e * e
          , i = r * r * r;
        return [t * Af(e) / (qd * ($d + 3 * Dd * r + i * (7 * Rd + 9 * Fd * r))), e * ($d + Dd * r + i * (Rd + Fd * r))]
    }
    function Id(t, n) {
        var e = Af(n)
          , r = Af(t) * e;
        return [e * Pf(t) / r, Pf(n) / r]
    }
    function Od(t, n) {
        var e = n * n
          , r = e * e;
        return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
    }
    function Bd(t, n) {
        return [Af(n) * Pf(t), Pf(n)]
    }
    function Yd(t, n) {
        var e = Af(n)
          , r = 1 + Af(t) * e;
        return [e * Pf(t) / r, Pf(n) / r]
    }
    function Ld(t, n) {
        return [kf(Df((vf + n) / 2)), -t]
    }
    function jd(t, n) {
        return t.parent === n.parent ? 1 : 2
    }
    function Hd(t, n) {
        return t + n.x
    }
    function Xd(t, n) {
        return Math.max(t, n.y)
    }
    function Gd(t) {
        var n = 0
          , e = t.children
          , r = e && e.length;
        if (r)
            for (; --r >= 0; )
                n += e[r].value;
        else
            n = 1;
        t.value = n
    }
    function Vd(t, n) {
        t instanceof Map ? (t = [void 0, t],
        void 0 === n && (n = Zd)) : void 0 === n && (n = Wd);
        for (var e, r, i, o, a, u = new Jd(t), c = [u]; e = c.pop(); )
            if ((i = n(e.data)) && (a = (i = Array.from(i)).length))
                for (e.children = i,
                o = a - 1; o >= 0; --o)
                    c.push(r = i[o] = new Jd(i[o])),
                    r.parent = e,
                    r.depth = e.depth + 1;
        return u.eachBefore(Qd)
    }
    function Wd(t) {
        return t.children
    }
    function Zd(t) {
        return Array.isArray(t) ? t[1] : null
    }
    function Kd(t) {
        void 0 !== t.data.value && (t.value = t.data.value),
        t.data = t.data.data
    }
    function Qd(t) {
        var n = 0;
        do {
            t.height = n
        } while ((t = t.parent) && t.height < ++n)
    }
    function Jd(t) {
        this.data = t,
        this.depth = this.height = 0,
        this.parent = null
    }
    function tp(t) {
        return null == t ? null : np(t)
    }
    function np(t) {
        if ("function" != typeof t)
            throw new Error;
        return t
    }
    function ep() {
        return 0
    }
    function rp(t) {
        return function() {
            return t
        }
    }
    Ud.invert = function(t, n) {
        for (var e, r = n, i = r * r, o = i * i * i, a = 0; a < 12 && (o = (i = (r -= e = (r * ($d + Dd * i + o * (Rd + Fd * i)) - n) / ($d + 3 * Dd * i + o * (7 * Rd + 9 * Fd * i))) * r) * i * i,
        !(wf(e) < gf)); ++a)
            ;
        return [qd * t * ($d + 3 * Dd * i + o * (7 * Rd + 9 * Fd * i)) / Af(r), Ff(Pf(r) / qd)]
    }
    ,
    Id.invert = Td(Mf),
    Od.invert = function(t, n) {
        var e, r = n, i = 25;
        do {
            var o = r * r
              , a = o * o;
            r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)))
        } while (wf(e) > pf && --i > 0);
        return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
    }
    ,
    Bd.invert = Td(Ff),
    Yd.invert = Td((function(t) {
        return 2 * Mf(t)
    }
    )),
    Ld.invert = function(t, n) {
        return [-n, 2 * Mf(Ef(t)) - vf]
    }
    ,
    Jd.prototype = Vd.prototype = {
        constructor: Jd,
        count: function() {
            return this.eachAfter(Gd)
        },
        each: function(t, n) {
            let e = -1;
            for (const r of this)
                t.call(n, r, ++e, this);
            return this
        },
        eachAfter: function(t, n) {
            for (var e, r, i, o = this, a = [o], u = [], c = -1; o = a.pop(); )
                if (u.push(o),
                e = o.children)
                    for (r = 0,
                    i = e.length; r < i; ++r)
                        a.push(e[r]);
            for (; o = u.pop(); )
                t.call(n, o, ++c, this);
            return this
        },
        eachBefore: function(t, n) {
            for (var e, r, i = this, o = [i], a = -1; i = o.pop(); )
                if (t.call(n, i, ++a, this),
                e = i.children)
                    for (r = e.length - 1; r >= 0; --r)
                        o.push(e[r]);
            return this
        },
        find: function(t, n) {
            let e = -1;
            for (const r of this)
                if (t.call(n, r, ++e, this))
                    return r
        },
        sum: function(t) {
            return this.eachAfter((function(n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; )
                    e += r[i].value;
                n.value = e
            }
            ))
        },
        sort: function(t) {
            return this.eachBefore((function(n) {
                n.children && n.children.sort(t)
            }
            ))
        },
        path: function(t) {
            for (var n = this, e = function(t, n) {
                if (t === n)
                    return t;
                var e = t.ancestors()
                  , r = n.ancestors()
                  , i = null;
                t = e.pop(),
                n = r.pop();
                for (; t === n; )
                    i = t,
                    t = e.pop(),
                    n = r.pop();
                return i
            }(n, t), r = [n]; n !== e; )
                n = n.parent,
                r.push(n);
            for (var i = r.length; t !== e; )
                r.splice(i, 0, t),
                t = t.parent;
            return r
        },
        ancestors: function() {
            for (var t = this, n = [t]; t = t.parent; )
                n.push(t);
            return n
        },
        descendants: function() {
            return Array.from(this)
        },
        leaves: function() {
            var t = [];
            return this.eachBefore((function(n) {
                n.children || t.push(n)
            }
            )),
            t
        },
        links: function() {
            var t = this
              , n = [];
            return t.each((function(e) {
                e !== t && n.push({
                    source: e.parent,
                    target: e
                })
            }
            )),
            n
        },
        copy: function() {
            return Vd(this).eachBefore(Kd)
        },
        [Symbol.iterator]: function*() {
            var t, n, e, r, i = this, o = [i];
            do {
                for (t = o.reverse(),
                o = []; i = t.pop(); )
                    if (yield i,
                    n = i.children)
                        for (e = 0,
                        r = n.length; e < r; ++e)
                            o.push(n[e])
            } while (o.length)
        }
    };
    const ip = 1664525
      , op = 1013904223
      , ap = 4294967296;
    function up() {
        let t = 1;
        return ()=>(t = (ip * t + op) % ap) / ap
    }
    function cp(t, n) {
        for (var e, r, i = 0, o = (t = function(t, n) {
            let e, r, i = t.length;
            for (; i; )
                r = n() * i-- | 0,
                e = t[i],
                t[i] = t[r],
                t[r] = e;
            return t
        }(Array.from(t), n)).length, a = []; i < o; )
            e = t[i],
            r && lp(r, e) ? ++i : (r = dp(a = fp(a, e)),
            i = 0);
        return r
    }
    function fp(t, n) {
        var e, r;
        if (hp(n, t))
            return [n];
        for (e = 0; e < t.length; ++e)
            if (sp(n, t[e]) && hp(pp(t[e], n), t))
                return [t[e], n];
        for (e = 0; e < t.length - 1; ++e)
            for (r = e + 1; r < t.length; ++r)
                if (sp(pp(t[e], t[r]), n) && sp(pp(t[e], n), t[r]) && sp(pp(t[r], n), t[e]) && hp(gp(t[e], t[r], n), t))
                    return [t[e], t[r], n];
        throw new Error
    }
    function sp(t, n) {
        var e = t.r - n.r
          , r = n.x - t.x
          , i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i
    }
    function lp(t, n) {
        var e = t.r - n.r + 1e-9 * Math.max(t.r, n.r, 1)
          , r = n.x - t.x
          , i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }
    function hp(t, n) {
        for (var e = 0; e < n.length; ++e)
            if (!lp(t, n[e]))
                return !1;
        return !0
    }
    function dp(t) {
        switch (t.length) {
        case 1:
            return function(t) {
                return {
                    x: t.x,
                    y: t.y,
                    r: t.r
                }
            }(t[0]);
        case 2:
            return pp(t[0], t[1]);
        case 3:
            return gp(t[0], t[1], t[2])
        }
    }
    function pp(t, n) {
        var e = t.x
          , r = t.y
          , i = t.r
          , o = n.x
          , a = n.y
          , u = n.r
          , c = o - e
          , f = a - r
          , s = u - i
          , l = Math.sqrt(c * c + f * f);
        return {
            x: (e + o + c / l * s) / 2,
            y: (r + a + f / l * s) / 2,
            r: (l + i + u) / 2
        }
    }
    function gp(t, n, e) {
        var r = t.x
          , i = t.y
          , o = t.r
          , a = n.x
          , u = n.y
          , c = n.r
          , f = e.x
          , s = e.y
          , l = e.r
          , h = r - a
          , d = r - f
          , p = i - u
          , g = i - s
          , y = c - o
          , v = l - o
          , _ = r * r + i * i - o * o
          , b = _ - a * a - u * u + c * c
          , m = _ - f * f - s * s + l * l
          , x = d * p - h * g
          , w = (p * m - g * b) / (2 * x) - r
          , M = (g * y - p * v) / x
          , T = (d * b - h * m) / (2 * x) - i
          , A = (h * v - d * y) / x
          , S = M * M + A * A - 1
          , E = 2 * (o + w * M + T * A)
          , N = w * w + T * T - o * o
          , k = -(Math.abs(S) > 1e-6 ? (E + Math.sqrt(E * E - 4 * S * N)) / (2 * S) : N / E);
        return {
            x: r + w + M * k,
            y: i + T + A * k,
            r: k
        }
    }
    function yp(t, n, e) {
        var r, i, o, a, u = t.x - n.x, c = t.y - n.y, f = u * u + c * c;
        f ? (i = n.r + e.r,
        i *= i,
        a = t.r + e.r,
        i > (a *= a) ? (r = (f + a - i) / (2 * f),
        o = Math.sqrt(Math.max(0, a / f - r * r)),
        e.x = t.x - r * u - o * c,
        e.y = t.y - r * c + o * u) : (r = (f + i - a) / (2 * f),
        o = Math.sqrt(Math.max(0, i / f - r * r)),
        e.x = n.x + r * u - o * c,
        e.y = n.y + r * c + o * u)) : (e.x = n.x + e.r,
        e.y = n.y)
    }
    function vp(t, n) {
        var e = t.r + n.r - 1e-6
          , r = n.x - t.x
          , i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }
    function _p(t) {
        var n = t._
          , e = t.next._
          , r = n.r + e.r
          , i = (n.x * e.r + e.x * n.r) / r
          , o = (n.y * e.r + e.y * n.r) / r;
        return i * i + o * o
    }
    function bp(t) {
        this._ = t,
        this.next = null,
        this.previous = null
    }
    function mp(t, n) {
        if (!(o = (t = function(t) {
            return "object" == typeof t && "length"in t ? t : Array.from(t)
        }(t)).length))
            return 0;
        var e, r, i, o, a, u, c, f, s, l, h;
        if ((e = t[0]).x = 0,
        e.y = 0,
        !(o > 1))
            return e.r;
        if (r = t[1],
        e.x = -r.r,
        r.x = e.r,
        r.y = 0,
        !(o > 2))
            return e.r + r.r;
        yp(r, e, i = t[2]),
        e = new bp(e),
        r = new bp(r),
        i = new bp(i),
        e.next = i.previous = r,
        r.next = e.previous = i,
        i.next = r.previous = e;
        t: for (c = 3; c < o; ++c) {
            yp(e._, r._, i = t[c]),
            i = new bp(i),
            f = r.next,
            s = e.previous,
            l = r._.r,
            h = e._.r;
            do {
                if (l <= h) {
                    if (vp(f._, i._)) {
                        r = f,
                        e.next = r,
                        r.previous = e,
                        --c;
                        continue t
                    }
                    l += f._.r,
                    f = f.next
                } else {
                    if (vp(s._, i._)) {
                        (e = s).next = r,
                        r.previous = e,
                        --c;
                        continue t
                    }
                    h += s._.r,
                    s = s.previous
                }
            } while (f !== s.next);
            for (i.previous = e,
            i.next = r,
            e.next = r.previous = r = i,
            a = _p(e); (i = i.next) !== r; )
                (u = _p(i)) < a && (e = i,
                a = u);
            r = e.next
        }
        for (e = [r._],
        i = r; (i = i.next) !== r; )
            e.push(i._);
        for (i = cp(e, n),
        c = 0; c < o; ++c)
            (e = t[c]).x -= i.x,
            e.y -= i.y;
        return i.r
    }
    function xp(t) {
        return Math.sqrt(t.value)
    }
    function wp(t) {
        return function(n) {
            n.children || (n.r = Math.max(0, +t(n) || 0))
        }
    }
    function Mp(t, n, e) {
        return function(r) {
            if (i = r.children) {
                var i, o, a, u = i.length, c = t(r) * n || 0;
                if (c)
                    for (o = 0; o < u; ++o)
                        i[o].r += c;
                if (a = mp(i, e),
                c)
                    for (o = 0; o < u; ++o)
                        i[o].r -= c;
                r.r = a + c
            }
        }
    }
    function Tp(t) {
        return function(n) {
            var e = n.parent;
            n.r *= t,
            e && (n.x = e.x + t * n.x,
            n.y = e.y + t * n.y)
        }
    }
    function Ap(t) {
        t.x0 = Math.round(t.x0),
        t.y0 = Math.round(t.y0),
        t.x1 = Math.round(t.x1),
        t.y1 = Math.round(t.y1)
    }
    function Sp(t, n, e, r, i) {
        for (var o, a = t.children, u = -1, c = a.length, f = t.value && (r - n) / t.value; ++u < c; )
            (o = a[u]).y0 = e,
            o.y1 = i,
            o.x0 = n,
            o.x1 = n += o.value * f
    }
    var Ep = {
        depth: -1
    }
      , Np = {}
      , kp = {};
    function Cp(t) {
        return t.id
    }
    function Pp(t) {
        return t.parentId
    }
    function zp(t) {
        let n = t.length;
        if (n < 2)
            return "";
        for (; --n > 1 && !$p(t, n); )
            ;
        return t.slice(0, n)
    }
    function $p(t, n) {
        if ("/" === t[n]) {
            let e = 0;
            for (; n > 0 && "\\" === t[--n]; )
                ++e;
            if (0 == (1 & e))
                return !0
        }
        return !1
    }
    function Dp(t, n) {
        return t.parent === n.parent ? 1 : 2
    }
    function Rp(t) {
        var n = t.children;
        return n ? n[0] : t.t
    }
    function Fp(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t
    }
    function qp(t, n, e) {
        var r = e / (n.i - t.i);
        n.c -= r,
        n.s += e,
        t.c += r,
        n.z += e,
        n.m += e
    }
    function Up(t, n, e) {
        return t.a.parent === n.parent ? t.a : e
    }
    function Ip(t, n) {
        this._ = t,
        this.parent = null,
        this.children = null,
        this.A = null,
        this.a = this,
        this.z = 0,
        this.m = 0,
        this.c = 0,
        this.s = 0,
        this.t = null,
        this.i = n
    }
    function Op(t, n, e, r, i) {
        for (var o, a = t.children, u = -1, c = a.length, f = t.value && (i - e) / t.value; ++u < c; )
            (o = a[u]).x0 = n,
            o.x1 = r,
            o.y0 = e,
            o.y1 = e += o.value * f
    }
    Ip.prototype = Object.create(Jd.prototype);
    var Bp = (1 + Math.sqrt(5)) / 2;
    function Yp(t, n, e, r, i, o) {
        for (var a, u, c, f, s, l, h, d, p, g, y, v = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x; ) {
            c = i - e,
            f = o - r;
            do {
                s = _[m++].value
            } while (!s && m < x);
            for (l = h = s,
            y = s * s * (g = Math.max(f / c, c / f) / (w * t)),
            p = Math.max(h / y, y / l); m < x; ++m) {
                if (s += u = _[m].value,
                u < l && (l = u),
                u > h && (h = u),
                y = s * s * g,
                (d = Math.max(h / y, y / l)) > p) {
                    s -= u;
                    break
                }
                p = d
            }
            v.push(a = {
                value: s,
                dice: c < f,
                children: _.slice(b, m)
            }),
            a.dice ? Sp(a, e, r, i, w ? r += f * s / w : o) : Op(a, e, r, w ? e += c * s / w : i, o),
            w -= s,
            b = m
        }
        return v
    }
    var Lp = function t(n) {
        function e(t, e, r, i, o) {
            Yp(n, t, e, r, i, o)
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n : 1)
        }
        ,
        e
    }(Bp);
    var jp = function t(n) {
        function e(t, e, r, i, o) {
            if ((a = t._squarify) && a.ratio === n)
                for (var a, u, c, f, s, l = -1, h = a.length, d = t.value; ++l < h; ) {
                    for (c = (u = a[l]).children,
                    f = u.value = 0,
                    s = c.length; f < s; ++f)
                        u.value += c[f].value;
                    u.dice ? Sp(u, e, r, i, d ? r += (o - r) * u.value / d : o) : Op(u, e, r, d ? e += (i - e) * u.value / d : i, o),
                    d -= u.value
                }
            else
                t._squarify = a = Yp(n, t, e, r, i, o),
                a.ratio = n
        }
        return e.ratio = function(n) {
            return t((n = +n) > 1 ? n : 1)
        }
        ,
        e
    }(Bp);
    function Hp(t, n, e) {
        return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
    }
    function Xp(t, n) {
        return t[0] - n[0] || t[1] - n[1]
    }
    function Gp(t) {
        const n = t.length
          , e = [0, 1];
        let r, i = 2;
        for (r = 2; r < n; ++r) {
            for (; i > 1 && Hp(t[e[i - 2]], t[e[i - 1]], t[r]) <= 0; )
                --i;
            e[i++] = r
        }
        return e.slice(0, i)
    }
    var Vp = Math.random
      , Wp = function t(n) {
        function e(t, e) {
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            1 === arguments.length ? (e = t,
            t = 0) : e -= t,
            function() {
                return n() * e + t
            }
        }
        return e.source = t,
        e
    }(Vp)
      , Zp = function t(n) {
        function e(t, e) {
            return arguments.length < 2 && (e = t,
            t = 0),
            t = Math.floor(t),
            e = Math.floor(e) - t,
            function() {
                return Math.floor(n() * e + t)
            }
        }
        return e.source = t,
        e
    }(Vp)
      , Kp = function t(n) {
        function e(t, e) {
            var r, i;
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            function() {
                var o;
                if (null != r)
                    o = r,
                    r = null;
                else
                    do {
                        r = 2 * n() - 1,
                        o = 2 * n() - 1,
                        i = r * r + o * o
                    } while (!i || i > 1);
                return t + e * o * Math.sqrt(-2 * Math.log(i) / i)
            }
        }
        return e.source = t,
        e
    }(Vp)
      , Qp = function t(n) {
        var e = Kp.source(n);
        function r() {
            var t = e.apply(this, arguments);
            return function() {
                return Math.exp(t())
            }
        }
        return r.source = t,
        r
    }(Vp)
      , Jp = function t(n) {
        function e(t) {
            return (t = +t) <= 0 ? ()=>0 : function() {
                for (var e = 0, r = t; r > 1; --r)
                    e += n();
                return e + r * n()
            }
        }
        return e.source = t,
        e
    }(Vp)
      , tg = function t(n) {
        var e = Jp.source(n);
        function r(t) {
            if (0 == (t = +t))
                return n;
            var r = e(t);
            return function() {
                return r() / t
            }
        }
        return r.source = t,
        r
    }(Vp)
      , ng = function t(n) {
        function e(t) {
            return function() {
                return -Math.log1p(-n()) / t
            }
        }
        return e.source = t,
        e
    }(Vp)
      , eg = function t(n) {
        function e(t) {
            if ((t = +t) < 0)
                throw new RangeError("invalid alpha");
            return t = 1 / -t,
            function() {
                return Math.pow(1 - n(), t)
            }
        }
        return e.source = t,
        e
    }(Vp)
      , rg = function t(n) {
        function e(t) {
            if ((t = +t) < 0 || t > 1)
                throw new RangeError("invalid p");
            return function() {
                return Math.floor(n() + t)
            }
        }
        return e.source = t,
        e
    }(Vp)
      , ig = function t(n) {
        function e(t) {
            if ((t = +t) < 0 || t > 1)
                throw new RangeError("invalid p");
            return 0 === t ? ()=>1 / 0 : 1 === t ? ()=>1 : (t = Math.log1p(-t),
            function() {
                return 1 + Math.floor(Math.log1p(-n()) / t)
            }
            )
        }
        return e.source = t,
        e
    }(Vp)
      , og = function t(n) {
        var e = Kp.source(n)();
        function r(t, r) {
            if ((t = +t) < 0)
                throw new RangeError("invalid k");
            if (0 === t)
                return ()=>0;
            if (r = null == r ? 1 : +r,
            1 === t)
                return ()=>-Math.log1p(-n()) * r;
            var i = (t < 1 ? t + 1 : t) - 1 / 3
              , o = 1 / (3 * Math.sqrt(i))
              , a = t < 1 ? ()=>Math.pow(n(), 1 / t) : ()=>1;
            return function() {
                do {
                    do {
                        var t = e()
                          , u = 1 + o * t
                    } while (u <= 0);
                    u *= u * u;
                    var c = 1 - n()
                } while (c >= 1 - .0331 * t * t * t * t && Math.log(c) >= .5 * t * t + i * (1 - u + Math.log(u)));
                return i * u * a() * r
            }
        }
        return r.source = t,
        r
    }(Vp)
      , ag = function t(n) {
        var e = og.source(n);
        function r(t, n) {
            var r = e(t)
              , i = e(n);
            return function() {
                var t = r();
                return 0 === t ? 0 : t / (t + i())
            }
        }
        return r.source = t,
        r
    }(Vp)
      , ug = function t(n) {
        var e = ig.source(n)
          , r = ag.source(n);
        function i(t, n) {
            return t = +t,
            (n = +n) >= 1 ? ()=>t : n <= 0 ? ()=>0 : function() {
                for (var i = 0, o = t, a = n; o * a > 16 && o * (1 - a) > 16; ) {
                    var u = Math.floor((o + 1) * a)
                      , c = r(u, o - u + 1)();
                    c <= a ? (i += u,
                    o -= u,
                    a = (a - c) / (1 - c)) : (o = u - 1,
                    a /= c)
                }
                for (var f = a < .5, s = e(f ? a : 1 - a), l = s(), h = 0; l <= o; ++h)
                    l += s();
                return i + (f ? h : o - h)
            }
        }
        return i.source = t,
        i
    }(Vp)
      , cg = function t(n) {
        function e(t, e, r) {
            var i;
            return 0 == (t = +t) ? i = t=>-Math.log(t) : (t = 1 / t,
            i = n=>Math.pow(n, t)),
            e = null == e ? 0 : +e,
            r = null == r ? 1 : +r,
            function() {
                return e + r * i(-Math.log1p(-n()))
            }
        }
        return e.source = t,
        e
    }(Vp)
      , fg = function t(n) {
        function e(t, e) {
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            function() {
                return t + e * Math.tan(Math.PI * n())
            }
        }
        return e.source = t,
        e
    }(Vp)
      , sg = function t(n) {
        function e(t, e) {
            return t = null == t ? 0 : +t,
            e = null == e ? 1 : +e,
            function() {
                var r = n();
                return t + e * Math.log(r / (1 - r))
            }
        }
        return e.source = t,
        e
    }(Vp)
      , lg = function t(n) {
        var e = og.source(n)
          , r = ug.source(n);
        function i(t) {
            return function() {
                for (var i = 0, o = t; o > 16; ) {
                    var a = Math.floor(.875 * o)
                      , u = e(a)();
                    if (u > o)
                        return i + r(a - 1, o / u)();
                    i += a,
                    o -= u
                }
                for (var c = -Math.log1p(-n()), f = 0; c <= o; ++f)
                    c -= Math.log1p(-n());
                return i + f
            }
        }
        return i.source = t,
        i
    }(Vp);
    const hg = 1 / 4294967296;
    function dg(t, n) {
        switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(t);
            break;
        default:
            this.range(n).domain(t)
        }
        return this
    }
    function pg(t, n) {
        switch (arguments.length) {
        case 0:
            break;
        case 1:
            "function" == typeof t ? this.interpolator(t) : this.range(t);
            break;
        default:
            this.domain(t),
            "function" == typeof n ? this.interpolator(n) : this.range(n)
        }
        return this
    }
    const gg = Symbol("implicit");
    function yg() {
        var t = new InternMap
          , n = []
          , e = []
          , r = gg;
        function i(i) {
            let o = t.get(i);
            if (void 0 === o) {
                if (r !== gg)
                    return r;
                t.set(i, o = n.push(i) - 1)
            }
            return e[o % e.length]
        }
        return i.domain = function(e) {
            if (!arguments.length)
                return n.slice();
            n = [],
            t = new InternMap;
            for (const r of e)
                t.has(r) || t.set(r, n.push(r) - 1);
            return i
        }
        ,
        i.range = function(t) {
            return arguments.length ? (e = Array.from(t),
            i) : e.slice()
        }
        ,
        i.unknown = function(t) {
            return arguments.length ? (r = t,
            i) : r
        }
        ,
        i.copy = function() {
            return yg(n, e).unknown(r)
        }
        ,
        dg.apply(i, arguments),
        i
    }
    function vg() {
        var t, n, e = yg().unknown(void 0), r = e.domain, i = e.range, o = 0, a = 1, u = !1, c = 0, f = 0, s = .5;
        function l() {
            var e = r().length
              , l = a < o
              , h = l ? a : o
              , d = l ? o : a;
            t = (d - h) / Math.max(1, e - c + 2 * f),
            u && (t = Math.floor(t)),
            h += (d - h - t * (e - c)) * s,
            n = t * (1 - c),
            u && (h = Math.round(h),
            n = Math.round(n));
            var p = ht(e).map((function(n) {
                return h + t * n
            }
            ));
            return i(l ? p.reverse() : p)
        }
        return delete e.unknown,
        e.domain = function(t) {
            return arguments.length ? (r(t),
            l()) : r()
        }
        ,
        e.range = function(t) {
            return arguments.length ? ([o,a] = t,
            o = +o,
            a = +a,
            l()) : [o, a]
        }
        ,
        e.rangeRound = function(t) {
            return [o,a] = t,
            o = +o,
            a = +a,
            u = !0,
            l()
        }
        ,
        e.bandwidth = function() {
            return n
        }
        ,
        e.step = function() {
            return t
        }
        ,
        e.round = function(t) {
            return arguments.length ? (u = !!t,
            l()) : u
        }
        ,
        e.padding = function(t) {
            return arguments.length ? (c = Math.min(1, f = +t),
            l()) : c
        }
        ,
        e.paddingInner = function(t) {
            return arguments.length ? (c = Math.min(1, t),
            l()) : c
        }
        ,
        e.paddingOuter = function(t) {
            return arguments.length ? (f = +t,
            l()) : f
        }
        ,
        e.align = function(t) {
            return arguments.length ? (s = Math.max(0, Math.min(1, t)),
            l()) : s
        }
        ,
        e.copy = function() {
            return vg(r(), [o, a]).round(u).paddingInner(c).paddingOuter(f).align(s)
        }
        ,
        dg.apply(l(), arguments)
    }
    function _g(t) {
        var n = t.copy;
        return t.padding = t.paddingOuter,
        delete t.paddingInner,
        delete t.paddingOuter,
        t.copy = function() {
            return _g(n())
        }
        ,
        t
    }
    function bg(t) {
        return +t
    }
    var mg = [0, 1];
    function xg(t) {
        return t
    }
    function wg(t, n) {
        return (n -= t = +t) ? function(e) {
            return (e - t) / n
        }
        : function(t) {
            return function() {
                return t
            }
        }(isNaN(n) ? NaN : .5)
    }
    function Mg(t, n, e) {
        var r = t[0]
          , i = t[1]
          , o = n[0]
          , a = n[1];
        return i < r ? (r = wg(i, r),
        o = e(a, o)) : (r = wg(r, i),
        o = e(o, a)),
        function(t) {
            return o(r(t))
        }
    }
    function Tg(t, n, e) {
        var r = Math.min(t.length, n.length) - 1
          , i = new Array(r)
          , o = new Array(r)
          , a = -1;
        for (t[r] < t[0] && (t = t.slice().reverse(),
        n = n.slice().reverse()); ++a < r; )
            i[a] = wg(t[a], t[a + 1]),
            o[a] = e(n[a], n[a + 1]);
        return function(n) {
            var e = l(t, n, 1, r) - 1;
            return o[e](i[e](n))
        }
    }
    function Ag(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
    }
    function Sg() {
        var t, n, e, r, i, o, a = mg, u = mg, c = Vr, f = xg;
        function s() {
            var t = Math.min(a.length, u.length);
            return f !== xg && (f = function(t, n) {
                var e;
                return t > n && (e = t,
                t = n,
                n = e),
                function(e) {
                    return Math.max(t, Math.min(n, e))
                }
            }(a[0], a[t - 1])),
            r = t > 2 ? Tg : Mg,
            i = o = null,
            l
        }
        function l(n) {
            return null == n || isNaN(n = +n) ? e : (i || (i = r(a.map(t), u, c)))(t(f(n)))
        }
        return l.invert = function(e) {
            return f(n((o || (o = r(u, a.map(t), Lr)))(e)))
        }
        ,
        l.domain = function(t) {
            return arguments.length ? (a = Array.from(t, bg),
            s()) : a.slice()
        }
        ,
        l.range = function(t) {
            return arguments.length ? (u = Array.from(t),
            s()) : u.slice()
        }
        ,
        l.rangeRound = function(t) {
            return u = Array.from(t),
            c = Wr,
            s()
        }
        ,
        l.clamp = function(t) {
            return arguments.length ? (f = !!t || xg,
            s()) : f !== xg
        }
        ,
        l.interpolate = function(t) {
            return arguments.length ? (c = t,
            s()) : c
        }
        ,
        l.unknown = function(t) {
            return arguments.length ? (e = t,
            l) : e
        }
        ,
        function(e, r) {
            return t = e,
            n = r,
            s()
        }
    }
    function Eg() {
        return Sg()(xg, xg)
    }
    function Ng(n, e, r, i) {
        var o, a = Z(n, e, r);
        switch ((i = tf(null == i ? ",f" : i)).type) {
        case "s":
            var u = Math.max(Math.abs(n), Math.abs(e));
            return null != i.precision || isNaN(o = hf(a, u)) || (i.precision = o),
            t.formatPrefix(i, u);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            null != i.precision || isNaN(o = df(a, Math.max(Math.abs(n), Math.abs(e)))) || (i.precision = o - ("e" === i.type));
            break;
        case "f":
        case "%":
            null != i.precision || isNaN(o = lf(a)) || (i.precision = o - 2 * ("%" === i.type))
        }
        return t.format(i)
    }
    function kg(t) {
        var n = t.domain;
        return t.ticks = function(t) {
            var e = n();
            return V(e[0], e[e.length - 1], null == t ? 10 : t)
        }
        ,
        t.tickFormat = function(t, e) {
            var r = n();
            return Ng(r[0], r[r.length - 1], null == t ? 10 : t, e)
        }
        ,
        t.nice = function(e) {
            null == e && (e = 10);
            var r, i, o = n(), a = 0, u = o.length - 1, c = o[a], f = o[u], s = 10;
            for (f < c && (i = c,
            c = f,
            f = i,
            i = a,
            a = u,
            u = i); s-- > 0; ) {
                if ((i = W(c, f, e)) === r)
                    return o[a] = c,
                    o[u] = f,
                    n(o);
                if (i > 0)
                    c = Math.floor(c / i) * i,
                    f = Math.ceil(f / i) * i;
                else {
                    if (!(i < 0))
                        break;
                    c = Math.ceil(c * i) / i,
                    f = Math.floor(f * i) / i
                }
                r = i
            }
            return t
        }
        ,
        t
    }
    function Cg(t, n) {
        var e, r = 0, i = (t = t.slice()).length - 1, o = t[r], a = t[i];
        return a < o && (e = r,
        r = i,
        i = e,
        e = o,
        o = a,
        a = e),
        t[r] = n.floor(o),
        t[i] = n.ceil(a),
        t
    }
    function Pg(t) {
        return Math.log(t)
    }
    function zg(t) {
        return Math.exp(t)
    }
    function $g(t) {
        return -Math.log(-t)
    }
    function Dg(t) {
        return -Math.exp(-t)
    }
    function Rg(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }
    function Fg(t) {
        return (n,e)=>-t(-n, e)
    }
    function qg(n) {
        const e = n(Pg, zg)
          , r = e.domain;
        let i, o, a = 10;
        function u() {
            return i = function(t) {
                return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t),
                n=>Math.log(n) / t)
            }(a),
            o = function(t) {
                return 10 === t ? Rg : t === Math.E ? Math.exp : n=>Math.pow(t, n)
            }(a),
            r()[0] < 0 ? (i = Fg(i),
            o = Fg(o),
            n($g, Dg)) : n(Pg, zg),
            e
        }
        return e.base = function(t) {
            return arguments.length ? (a = +t,
            u()) : a
        }
        ,
        e.domain = function(t) {
            return arguments.length ? (r(t),
            u()) : r()
        }
        ,
        e.ticks = t=>{
            const n = r();
            let e = n[0]
              , u = n[n.length - 1];
            const c = u < e;
            c && ([e,u] = [u, e]);
            let f, s, l = i(e), h = i(u);
            const d = null == t ? 10 : +t;
            let p = [];
            if (!(a % 1) && h - l < d) {
                if (l = Math.floor(l),
                h = Math.ceil(h),
                e > 0) {
                    for (; l <= h; ++l)
                        for (f = 1; f < a; ++f)
                            if (s = l < 0 ? f / o(-l) : f * o(l),
                            !(s < e)) {
                                if (s > u)
                                    break;
                                p.push(s)
                            }
                } else
                    for (; l <= h; ++l)
                        for (f = a - 1; f >= 1; --f)
                            if (s = l > 0 ? f / o(-l) : f * o(l),
                            !(s < e)) {
                                if (s > u)
                                    break;
                                p.push(s)
                            }
                2 * p.length < d && (p = V(e, u, d))
            } else
                p = V(l, h, Math.min(h - l, d)).map(o);
            return c ? p.reverse() : p
        }
        ,
        e.tickFormat = (n,r)=>{
            if (null == n && (n = 10),
            null == r && (r = 10 === a ? "s" : ","),
            "function" != typeof r && (a % 1 || null != (r = tf(r)).precision || (r.trim = !0),
            r = t.format(r)),
            n === 1 / 0)
                return r;
            const u = Math.max(1, a * n / e.ticks().length);
            return t=>{
                let n = t / o(Math.round(i(t)));
                return n * a < a - .5 && (n *= a),
                n <= u ? r(t) : ""
            }
        }
        ,
        e.nice = ()=>r(Cg(r(), {
            floor: t=>o(Math.floor(i(t))),
            ceil: t=>o(Math.ceil(i(t)))
        })),
        e
    }
    function Ug(t) {
        return function(n) {
            return Math.sign(n) * Math.log1p(Math.abs(n / t))
        }
    }
    function Ig(t) {
        return function(n) {
            return Math.sign(n) * Math.expm1(Math.abs(n)) * t
        }
    }
    function Og(t) {
        var n = 1
          , e = t(Ug(n), Ig(n));
        return e.constant = function(e) {
            return arguments.length ? t(Ug(n = +e), Ig(n)) : n
        }
        ,
        kg(e)
    }
    function Bg(t) {
        return function(n) {
            return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
        }
    }
    function Yg(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
    }
    function Lg(t) {
        return t < 0 ? -t * t : t * t
    }
    function jg(t) {
        var n = t(xg, xg)
          , e = 1;
        return n.exponent = function(n) {
            return arguments.length ? 1 === (e = +n) ? t(xg, xg) : .5 === e ? t(Yg, Lg) : t(Bg(e), Bg(1 / e)) : e
        }
        ,
        kg(n)
    }
    function Hg() {
        var t = jg(Sg());
        return t.copy = function() {
            return Ag(t, Hg()).exponent(t.exponent())
        }
        ,
        dg.apply(t, arguments),
        t
    }
    function Xg(t) {
        return Math.sign(t) * t * t
    }
    const Gg = new Date
      , Vg = new Date;
    function Wg(t, n, e, r) {
        function i(n) {
            return t(n = 0 === arguments.length ? new Date : new Date(+n)),
            n
        }
        return i.floor = n=>(t(n = new Date(+n)),
        n),
        i.ceil = e=>(t(e = new Date(e - 1)),
        n(e, 1),
        t(e),
        e),
        i.round = t=>{
            const n = i(t)
              , e = i.ceil(t);
            return t - n < e - t ? n : e
        }
        ,
        i.offset = (t,e)=>(n(t = new Date(+t), null == e ? 1 : Math.floor(e)),
        t),
        i.range = (e,r,o)=>{
            const a = [];
            if (e = i.ceil(e),
            o = null == o ? 1 : Math.floor(o),
            !(e < r && o > 0))
                return a;
            let u;
            do {
                a.push(u = new Date(+e)),
                n(e, o),
                t(e)
            } while (u < e && e < r);
            return a
        }
        ,
        i.filter = e=>Wg((n=>{
            if (n >= n)
                for (; t(n),
                !e(n); )
                    n.setTime(n - 1)
        }
        ), ((t,r)=>{
            if (t >= t)
                if (r < 0)
                    for (; ++r <= 0; )
                        for (; n(t, -1),
                        !e(t); )
                            ;
                else
                    for (; --r >= 0; )
                        for (; n(t, 1),
                        !e(t); )
                            ;
        }
        )),
        e && (i.count = (n,r)=>(Gg.setTime(+n),
        Vg.setTime(+r),
        t(Gg),
        t(Vg),
        Math.floor(e(Gg, Vg))),
        i.every = t=>(t = Math.floor(t),
        isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? n=>r(n) % t == 0 : n=>i.count(0, n) % t == 0) : i : null)),
        i
    }
    const Zg = Wg((()=>{}
    ), ((t,n)=>{
        t.setTime(+t + n)
    }
    ), ((t,n)=>n - t));
    Zg.every = t=>(t = Math.floor(t),
    isFinite(t) && t > 0 ? t > 1 ? Wg((n=>{
        n.setTime(Math.floor(n / t) * t)
    }
    ), ((n,e)=>{
        n.setTime(+n + e * t)
    }
    ), ((n,e)=>(e - n) / t)) : Zg : null);
    const Kg = Zg.range
      , Qg = 1e3
      , Jg = 6e4
      , ty = 60 * Jg
      , ny = 24 * ty
      , ey = 7 * ny
      , ry = 30 * ny
      , iy = 365 * ny
      , oy = Wg((t=>{
        t.setTime(t - t.getMilliseconds())
    }
    ), ((t,n)=>{
        t.setTime(+t + n * Qg)
    }
    ), ((t,n)=>(n - t) / Qg), (t=>t.getUTCSeconds()))
      , ay = oy.range
      , uy = Wg((t=>{
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * Qg)
    }
    ), ((t,n)=>{
        t.setTime(+t + n * Jg)
    }
    ), ((t,n)=>(n - t) / Jg), (t=>t.getMinutes()))
      , cy = uy.range
      , fy = Wg((t=>{
        t.setUTCSeconds(0, 0)
    }
    ), ((t,n)=>{
        t.setTime(+t + n * Jg)
    }
    ), ((t,n)=>(n - t) / Jg), (t=>t.getUTCMinutes()))
      , sy = fy.range
      , ly = Wg((t=>{
        t.setTime(t - t.getMilliseconds() - t.getSeconds() * Qg - t.getMinutes() * Jg)
    }
    ), ((t,n)=>{
        t.setTime(+t + n * ty)
    }
    ), ((t,n)=>(n - t) / ty), (t=>t.getHours()))
      , hy = ly.range
      , dy = Wg((t=>{
        t.setUTCMinutes(0, 0, 0)
    }
    ), ((t,n)=>{
        t.setTime(+t + n * ty)
    }
    ), ((t,n)=>(n - t) / ty), (t=>t.getUTCHours()))
      , py = dy.range
      , gy = Wg((t=>t.setHours(0, 0, 0, 0)), ((t,n)=>t.setDate(t.getDate() + n)), ((t,n)=>(n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Jg) / ny), (t=>t.getDate() - 1))
      , yy = gy.range
      , vy = Wg((t=>{
        t.setUTCHours(0, 0, 0, 0)
    }
    ), ((t,n)=>{
        t.setUTCDate(t.getUTCDate() + n)
    }
    ), ((t,n)=>(n - t) / ny), (t=>t.getUTCDate() - 1))
      , _y = vy.range
      , by = Wg((t=>{
        t.setUTCHours(0, 0, 0, 0)
    }
    ), ((t,n)=>{
        t.setUTCDate(t.getUTCDate() + n)
    }
    ), ((t,n)=>(n - t) / ny), (t=>Math.floor(t / ny)))
      , my = by.range;
    function xy(t) {
        return Wg((n=>{
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7),
            n.setHours(0, 0, 0, 0)
        }
        ), ((t,n)=>{
            t.setDate(t.getDate() + 7 * n)
        }
        ), ((t,n)=>(n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Jg) / ey))
    }
    const wy = xy(0)
      , My = xy(1)
      , Ty = xy(2)
      , Ay = xy(3)
      , Sy = xy(4)
      , Ey = xy(5)
      , Ny = xy(6)
      , ky = wy.range
      , Cy = My.range
      , Py = Ty.range
      , zy = Ay.range
      , $y = Sy.range
      , Dy = Ey.range
      , Ry = Ny.range;
    function Fy(t) {
        return Wg((n=>{
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7),
            n.setUTCHours(0, 0, 0, 0)
        }
        ), ((t,n)=>{
            t.setUTCDate(t.getUTCDate() + 7 * n)
        }
        ), ((t,n)=>(n - t) / ey))
    }
    const qy = Fy(0)
      , Uy = Fy(1)
      , Iy = Fy(2)
      , Oy = Fy(3)
      , By = Fy(4)
      , Yy = Fy(5)
      , Ly = Fy(6)
      , jy = qy.range
      , Hy = Uy.range
      , Xy = Iy.range
      , Gy = Oy.range
      , Vy = By.range
      , Wy = Yy.range
      , Zy = Ly.range
      , Ky = Wg((t=>{
        t.setDate(1),
        t.setHours(0, 0, 0, 0)
    }
    ), ((t,n)=>{
        t.setMonth(t.getMonth() + n)
    }
    ), ((t,n)=>n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())), (t=>t.getMonth()))
      , Qy = Ky.range
      , Jy = Wg((t=>{
        t.setUTCDate(1),
        t.setUTCHours(0, 0, 0, 0)
    }
    ), ((t,n)=>{
        t.setUTCMonth(t.getUTCMonth() + n)
    }
    ), ((t,n)=>n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())), (t=>t.getUTCMonth()))
      , tv = Jy.range
      , nv = Wg((t=>{
        t.setMonth(0, 1),
        t.setHours(0, 0, 0, 0)
    }
    ), ((t,n)=>{
        t.setFullYear(t.getFullYear() + n)
    }
    ), ((t,n)=>n.getFullYear() - t.getFullYear()), (t=>t.getFullYear()));
    nv.every = t=>isFinite(t = Math.floor(t)) && t > 0 ? Wg((n=>{
        n.setFullYear(Math.floor(n.getFullYear() / t) * t),
        n.setMonth(0, 1),
        n.setHours(0, 0, 0, 0)
    }
    ), ((n,e)=>{
        n.setFullYear(n.getFullYear() + e * t)
    }
    )) : null;
    const ev = nv.range
      , rv = Wg((t=>{
        t.setUTCMonth(0, 1),
        t.setUTCHours(0, 0, 0, 0)
    }
    ), ((t,n)=>{
        t.setUTCFullYear(t.getUTCFullYear() + n)
    }
    ), ((t,n)=>n.getUTCFullYear() - t.getUTCFullYear()), (t=>t.getUTCFullYear()));
    rv.every = t=>isFinite(t = Math.floor(t)) && t > 0 ? Wg((n=>{
        n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
        n.setUTCMonth(0, 1),
        n.setUTCHours(0, 0, 0, 0)
    }
    ), ((n,e)=>{
        n.setUTCFullYear(n.getUTCFullYear() + e * t)
    }
    )) : null;
    const iv = rv.range;
    function ov(t, n, e, i, o, a) {
        const u = [[oy, 1, Qg], [oy, 5, 5e3], [oy, 15, 15e3], [oy, 30, 3e4], [a, 1, Jg], [a, 5, 5 * Jg], [a, 15, 15 * Jg], [a, 30, 30 * Jg], [o, 1, ty], [o, 3, 3 * ty], [o, 6, 6 * ty], [o, 12, 12 * ty], [i, 1, ny], [i, 2, 2 * ny], [e, 1, ey], [n, 1, ry], [n, 3, 3 * ry], [t, 1, iy]];
        function c(n, e, i) {
            const o = Math.abs(e - n) / i
              , a = r((([,,t])=>t)).right(u, o);
            if (a === u.length)
                return t.every(Z(n / iy, e / iy, i));
            if (0 === a)
                return Zg.every(Math.max(Z(n, e, i), 1));
            const [c,f] = u[o / u[a - 1][2] < u[a][2] / o ? a - 1 : a];
            return c.every(f)
        }
        return [function(t, n, e) {
            const r = n < t;
            r && ([t,n] = [n, t]);
            const i = e && "function" == typeof e.range ? e : c(t, n, e)
              , o = i ? i.range(t, +n + 1) : [];
            return r ? o.reverse() : o
        }
        , c]
    }
    const [av,uv] = ov(rv, Jy, qy, by, dy, fy)
      , [cv,fv] = ov(nv, Ky, wy, gy, ly, uy);
    function sv(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);
            return n.setFullYear(t.y),
            n
        }
        return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)
    }
    function lv(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y),
            n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }
    function hv(t, n, e) {
        return {
            y: t,
            m: n,
            d: e,
            H: 0,
            M: 0,
            S: 0,
            L: 0
        }
    }
    function dv(t) {
        var n = t.dateTime
          , e = t.date
          , r = t.time
          , i = t.periods
          , o = t.days
          , a = t.shortDays
          , u = t.months
          , c = t.shortMonths
          , f = xv(i)
          , s = wv(i)
          , l = xv(o)
          , h = wv(o)
          , d = xv(a)
          , p = wv(a)
          , g = xv(u)
          , y = wv(u)
          , v = xv(c)
          , _ = wv(c)
          , b = {
            a: function(t) {
                return a[t.getDay()]
            },
            A: function(t) {
                return o[t.getDay()]
            },
            b: function(t) {
                return c[t.getMonth()]
            },
            B: function(t) {
                return u[t.getMonth()]
            },
            c: null,
            d: Lv,
            e: Lv,
            f: Vv,
            g: o_,
            G: u_,
            H: jv,
            I: Hv,
            j: Xv,
            L: Gv,
            m: Wv,
            M: Zv,
            p: function(t) {
                return i[+(t.getHours() >= 12)]
            },
            q: function(t) {
                return 1 + ~~(t.getMonth() / 3)
            },
            Q: C_,
            s: P_,
            S: Kv,
            u: Qv,
            U: Jv,
            V: n_,
            w: e_,
            W: r_,
            x: null,
            X: null,
            y: i_,
            Y: a_,
            Z: c_,
            "%": k_
        }
          , m = {
            a: function(t) {
                return a[t.getUTCDay()]
            },
            A: function(t) {
                return o[t.getUTCDay()]
            },
            b: function(t) {
                return c[t.getUTCMonth()]
            },
            B: function(t) {
                return u[t.getUTCMonth()]
            },
            c: null,
            d: f_,
            e: f_,
            f: p_,
            g: A_,
            G: E_,
            H: s_,
            I: l_,
            j: h_,
            L: d_,
            m: g_,
            M: y_,
            p: function(t) {
                return i[+(t.getUTCHours() >= 12)]
            },
            q: function(t) {
                return 1 + ~~(t.getUTCMonth() / 3)
            },
            Q: C_,
            s: P_,
            S: v_,
            u: __,
            U: b_,
            V: x_,
            w: w_,
            W: M_,
            x: null,
            X: null,
            y: T_,
            Y: S_,
            Z: N_,
            "%": k_
        }
          , x = {
            a: function(t, n, e) {
                var r = d.exec(n.slice(e));
                return r ? (t.w = p.get(r[0].toLowerCase()),
                e + r[0].length) : -1
            },
            A: function(t, n, e) {
                var r = l.exec(n.slice(e));
                return r ? (t.w = h.get(r[0].toLowerCase()),
                e + r[0].length) : -1
            },
            b: function(t, n, e) {
                var r = v.exec(n.slice(e));
                return r ? (t.m = _.get(r[0].toLowerCase()),
                e + r[0].length) : -1
            },
            B: function(t, n, e) {
                var r = g.exec(n.slice(e));
                return r ? (t.m = y.get(r[0].toLowerCase()),
                e + r[0].length) : -1
            },
            c: function(t, e, r) {
                return T(t, n, e, r)
            },
            d: $v,
            e: $v,
            f: Iv,
            g: kv,
            G: Nv,
            H: Rv,
            I: Rv,
            j: Dv,
            L: Uv,
            m: zv,
            M: Fv,
            p: function(t, n, e) {
                var r = f.exec(n.slice(e));
                return r ? (t.p = s.get(r[0].toLowerCase()),
                e + r[0].length) : -1
            },
            q: Pv,
            Q: Bv,
            s: Yv,
            S: qv,
            u: Tv,
            U: Av,
            V: Sv,
            w: Mv,
            W: Ev,
            x: function(t, n, r) {
                return T(t, e, n, r)
            },
            X: function(t, n, e) {
                return T(t, r, n, e)
            },
            y: kv,
            Y: Nv,
            Z: Cv,
            "%": Ov
        };
        function w(t, n) {
            return function(e) {
                var r, i, o, a = [], u = -1, c = 0, f = t.length;
                for (e instanceof Date || (e = new Date(+e)); ++u < f; )
                    37 === t.charCodeAt(u) && (a.push(t.slice(c, u)),
                    null != (i = gv[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0",
                    (o = n[r]) && (r = o(e, i)),
                    a.push(r),
                    c = u + 1);
                return a.push(t.slice(c, u)),
                a.join("")
            }
        }
        function M(t, n) {
            return function(e) {
                var r, i, o = hv(1900, void 0, 1);
                if (T(o, t, e += "", 0) != e.length)
                    return null;
                if ("Q"in o)
                    return new Date(o.Q);
                if ("s"in o)
                    return new Date(1e3 * o.s + ("L"in o ? o.L : 0));
                if (n && !("Z"in o) && (o.Z = 0),
                "p"in o && (o.H = o.H % 12 + 12 * o.p),
                void 0 === o.m && (o.m = "q"in o ? o.q : 0),
                "V"in o) {
                    if (o.V < 1 || o.V > 53)
                        return null;
                    "w"in o || (o.w = 1),
                    "Z"in o ? (i = (r = lv(hv(o.y, 0, 1))).getUTCDay(),
                    r = i > 4 || 0 === i ? Uy.ceil(r) : Uy(r),
                    r = vy.offset(r, 7 * (o.V - 1)),
                    o.y = r.getUTCFullYear(),
                    o.m = r.getUTCMonth(),
                    o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = sv(hv(o.y, 0, 1))).getDay(),
                    r = i > 4 || 0 === i ? My.ceil(r) : My(r),
                    r = gy.offset(r, 7 * (o.V - 1)),
                    o.y = r.getFullYear(),
                    o.m = r.getMonth(),
                    o.d = r.getDate() + (o.w + 6) % 7)
                } else
                    ("W"in o || "U"in o) && ("w"in o || (o.w = "u"in o ? o.u % 7 : "W"in o ? 1 : 0),
                    i = "Z"in o ? lv(hv(o.y, 0, 1)).getUTCDay() : sv(hv(o.y, 0, 1)).getDay(),
                    o.m = 0,
                    o.d = "W"in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7);
                return "Z"in o ? (o.H += o.Z / 100 | 0,
                o.M += o.Z % 100,
                lv(o)) : sv(o)
            }
        }
        function T(t, n, e, r) {
            for (var i, o, a = 0, u = n.length, c = e.length; a < u; ) {
                if (r >= c)
                    return -1;
                if (37 === (i = n.charCodeAt(a++))) {
                    if (i = n.charAt(a++),
                    !(o = x[i in gv ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0)
                        return -1
                } else if (i != e.charCodeAt(r++))
                    return -1
            }
            return r
        }
        return b.x = w(e, b),
        b.X = w(r, b),
        b.c = w(n, b),
        m.x = w(e, m),
        m.X = w(r, m),
        m.c = w(n, m),
        {
            format: function(t) {
                var n = w(t += "", b);
                return n.toString = function() {
                    return t
                }
                ,
                n
            },
            parse: function(t) {
                var n = M(t += "", !1);
                return n.toString = function() {
                    return t
                }
                ,
                n
            },
            utcFormat: function(t) {
                var n = w(t += "", m);
                return n.toString = function() {
                    return t
                }
                ,
                n
            },
            utcParse: function(t) {
                var n = M(t += "", !0);
                return n.toString = function() {
                    return t
                }
                ,
                n
            }
        }
    }
    var pv, gv = {
        "-": "",
        _: " ",
        0: "0"
    }, yv = /^\s*\d+/, vv = /^%/, _v = /[\\^$*+?|[\]().{}]/g;
    function bv(t, n, e) {
        var r = t < 0 ? "-" : ""
          , i = (r ? -t : t) + ""
          , o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
    }
    function mv(t) {
        return t.replace(_v, "\\$&")
    }
    function xv(t) {
        return new RegExp("^(?:" + t.map(mv).join("|") + ")","i")
    }
    function wv(t) {
        return new Map(t.map(((t,n)=>[t.toLowerCase(), n])))
    }
    function Mv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0],
        e + r[0].length) : -1
    }
    function Tv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 1));
        return r ? (t.u = +r[0],
        e + r[0].length) : -1
    }
    function Av(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.U = +r[0],
        e + r[0].length) : -1
    }
    function Sv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.V = +r[0],
        e + r[0].length) : -1
    }
    function Ev(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.W = +r[0],
        e + r[0].length) : -1
    }
    function Nv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0],
        e + r[0].length) : -1
    }
    function kv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3),
        e + r[0].length) : -1
    }
    function Cv(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")),
        e + r[0].length) : -1
    }
    function Pv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 1));
        return r ? (t.q = 3 * r[0] - 3,
        e + r[0].length) : -1
    }
    function zv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1,
        e + r[0].length) : -1
    }
    function $v(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0],
        e + r[0].length) : -1
    }
    function Dv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 3));
        return r ? (t.m = 0,
        t.d = +r[0],
        e + r[0].length) : -1
    }
    function Rv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0],
        e + r[0].length) : -1
    }
    function Fv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0],
        e + r[0].length) : -1
    }
    function qv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0],
        e + r[0].length) : -1
    }
    function Uv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0],
        e + r[0].length) : -1
    }
    function Iv(t, n, e) {
        var r = yv.exec(n.slice(e, e + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3),
        e + r[0].length) : -1
    }
    function Ov(t, n, e) {
        var r = vv.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }
    function Bv(t, n, e) {
        var r = yv.exec(n.slice(e));
        return r ? (t.Q = +r[0],
        e + r[0].length) : -1
    }
    function Yv(t, n, e) {
        var r = yv.exec(n.slice(e));
        return r ? (t.s = +r[0],
        e + r[0].length) : -1
    }
    function Lv(t, n) {
        return bv(t.getDate(), n, 2)
    }
    function jv(t, n) {
        return bv(t.getHours(), n, 2)
    }
    function Hv(t, n) {
        return bv(t.getHours() % 12 || 12, n, 2)
    }
    function Xv(t, n) {
        return bv(1 + gy.count(nv(t), t), n, 3)
    }
    function Gv(t, n) {
        return bv(t.getMilliseconds(), n, 3)
    }
    function Vv(t, n) {
        return Gv(t, n) + "000"
    }
    function Wv(t, n) {
        return bv(t.getMonth() + 1, n, 2)
    }
    function Zv(t, n) {
        return bv(t.getMinutes(), n, 2)
    }
    function Kv(t, n) {
        return bv(t.getSeconds(), n, 2)
    }
    function Qv(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n
    }
    function Jv(t, n) {
        return bv(wy.count(nv(t) - 1, t), n, 2)
    }
    function t_(t) {
        var n = t.getDay();
        return n >= 4 || 0 === n ? Sy(t) : Sy.ceil(t)
    }
    function n_(t, n) {
        return t = t_(t),
        bv(Sy.count(nv(t), t) + (4 === nv(t).getDay()), n, 2)
    }
    function e_(t) {
        return t.getDay()
    }
    function r_(t, n) {
        return bv(My.count(nv(t) - 1, t), n, 2)
    }
    function i_(t, n) {
        return bv(t.getFullYear() % 100, n, 2)
    }
    function o_(t, n) {
        return bv((t = t_(t)).getFullYear() % 100, n, 2)
    }
    function a_(t, n) {
        return bv(t.getFullYear() % 1e4, n, 4)
    }
    function u_(t, n) {
        var e = t.getDay();
        return bv((t = e >= 4 || 0 === e ? Sy(t) : Sy.ceil(t)).getFullYear() % 1e4, n, 4)
    }
    function c_(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : (n *= -1,
        "+")) + bv(n / 60 | 0, "0", 2) + bv(n % 60, "0", 2)
    }
    function f_(t, n) {
        return bv(t.getUTCDate(), n, 2)
    }
    function s_(t, n) {
        return bv(t.getUTCHours(), n, 2)
    }
    function l_(t, n) {
        return bv(t.getUTCHours() % 12 || 12, n, 2)
    }
    function h_(t, n) {
        return bv(1 + vy.count(rv(t), t), n, 3)
    }
    function d_(t, n) {
        return bv(t.getUTCMilliseconds(), n, 3)
    }
    function p_(t, n) {
        return d_(t, n) + "000"
    }
    function g_(t, n) {
        return bv(t.getUTCMonth() + 1, n, 2)
    }
    function y_(t, n) {
        return bv(t.getUTCMinutes(), n, 2)
    }
    function v_(t, n) {
        return bv(t.getUTCSeconds(), n, 2)
    }
    function __(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n
    }
    function b_(t, n) {
        return bv(qy.count(rv(t) - 1, t), n, 2)
    }
    function m_(t) {
        var n = t.getUTCDay();
        return n >= 4 || 0 === n ? By(t) : By.ceil(t)
    }
    function x_(t, n) {
        return t = m_(t),
        bv(By.count(rv(t), t) + (4 === rv(t).getUTCDay()), n, 2)
    }
    function w_(t) {
        return t.getUTCDay()
    }
    function M_(t, n) {
        return bv(Uy.count(rv(t) - 1, t), n, 2)
    }
    function T_(t, n) {
        return bv(t.getUTCFullYear() % 100, n, 2)
    }
    function A_(t, n) {
        return bv((t = m_(t)).getUTCFullYear() % 100, n, 2)
    }
    function S_(t, n) {
        return bv(t.getUTCFullYear() % 1e4, n, 4)
    }
    function E_(t, n) {
        var e = t.getUTCDay();
        return bv((t = e >= 4 || 0 === e ? By(t) : By.ceil(t)).getUTCFullYear() % 1e4, n, 4)
    }
    function N_() {
        return "+0000"
    }
    function k_() {
        return "%"
    }
    function C_(t) {
        return +t
    }
    function P_(t) {
        return Math.floor(+t / 1e3)
    }
    function z_(n) {
        return pv = dv(n),
        t.timeFormat = pv.format,
        t.timeParse = pv.parse,
        t.utcFormat = pv.utcFormat,
        t.utcParse = pv.utcParse,
        pv
    }
    t.timeFormat = void 0,
    t.timeParse = void 0,
    t.utcFormat = void 0,
    t.utcParse = void 0,
    z_({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var $_ = "%Y-%m-%dT%H:%M:%S.%LZ";
    var D_ = Date.prototype.toISOString ? function(t) {
        return t.toISOString()
    }
    : t.utcFormat($_)
      , R_ = D_;
    var F_ = +new Date("2000-01-01T00:00:00.000Z") ? function(t) {
        var n = new Date(t);
        return isNaN(n) ? null : n
    }
    : t.utcParse($_)
      , q_ = F_;
    function U_(t) {
        return new Date(t)
    }
    function I_(t) {
        return t instanceof Date ? +t : +new Date(+t)
    }
    function O_(t, n, e, r, i, o, a, u, c, f) {
        var s = Eg()
          , l = s.invert
          , h = s.domain
          , d = f(".%L")
          , p = f(":%S")
          , g = f("%I:%M")
          , y = f("%I %p")
          , v = f("%a %d")
          , _ = f("%b %d")
          , b = f("%B")
          , m = f("%Y");
        function x(t) {
            return (c(t) < t ? d : u(t) < t ? p : a(t) < t ? g : o(t) < t ? y : r(t) < t ? i(t) < t ? v : _ : e(t) < t ? b : m)(t)
        }
        return s.invert = function(t) {
            return new Date(l(t))
        }
        ,
        s.domain = function(t) {
            return arguments.length ? h(Array.from(t, I_)) : h().map(U_)
        }
        ,
        s.ticks = function(n) {
            var e = h();
            return t(e[0], e[e.length - 1], null == n ? 10 : n)
        }
        ,
        s.tickFormat = function(t, n) {
            return null == n ? x : f(n)
        }
        ,
        s.nice = function(t) {
            var e = h();
            return t && "function" == typeof t.range || (t = n(e[0], e[e.length - 1], null == t ? 10 : t)),
            t ? h(Cg(e, t)) : s
        }
        ,
        s.copy = function() {
            return Ag(s, O_(t, n, e, r, i, o, a, u, c, f))
        }
        ,
        s
    }
    function B_() {
        var t, n, e, r, i, o = 0, a = 1, u = xg, c = !1;
        function f(n) {
            return null == n || isNaN(n = +n) ? i : u(0 === e ? .5 : (n = (r(n) - t) * e,
            c ? Math.max(0, Math.min(1, n)) : n))
        }
        function s(t) {
            return function(n) {
                var e, r;
                return arguments.length ? ([e,r] = n,
                u = t(e, r),
                f) : [u(0), u(1)]
            }
        }
        return f.domain = function(i) {
            return arguments.length ? ([o,a] = i,
            t = r(o = +o),
            n = r(a = +a),
            e = t === n ? 0 : 1 / (n - t),
            f) : [o, a]
        }
        ,
        f.clamp = function(t) {
            return arguments.length ? (c = !!t,
            f) : c
        }
        ,
        f.interpolator = function(t) {
            return arguments.length ? (u = t,
            f) : u
        }
        ,
        f.range = s(Vr),
        f.rangeRound = s(Wr),
        f.unknown = function(t) {
            return arguments.length ? (i = t,
            f) : i
        }
        ,
        function(i) {
            return r = i,
            t = i(o),
            n = i(a),
            e = t === n ? 0 : 1 / (n - t),
            f
        }
    }
    function Y_(t, n) {
        return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())
    }
    function L_() {
        var t = jg(B_());
        return t.copy = function() {
            return Y_(t, L_()).exponent(t.exponent())
        }
        ,
        pg.apply(t, arguments)
    }
    function j_() {
        var t, n, e, r, i, o, a, u = 0, c = .5, f = 1, s = 1, l = xg, h = !1;
        function d(t) {
            return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - n) * (s * t < s * n ? r : i),
            l(h ? Math.max(0, Math.min(1, t)) : t))
        }
        function p(t) {
            return function(n) {
                var e, r, i;
                return arguments.length ? ([e,r,i] = n,
                l = pi(t, [e, r, i]),
                d) : [l(0), l(.5), l(1)]
            }
        }
        return d.domain = function(a) {
            return arguments.length ? ([u,c,f] = a,
            t = o(u = +u),
            n = o(c = +c),
            e = o(f = +f),
            r = t === n ? 0 : .5 / (n - t),
            i = n === e ? 0 : .5 / (e - n),
            s = n < t ? -1 : 1,
            d) : [u, c, f]
        }
        ,
        d.clamp = function(t) {
            return arguments.length ? (h = !!t,
            d) : h
        }
        ,
        d.interpolator = function(t) {
            return arguments.length ? (l = t,
            d) : l
        }
        ,
        d.range = p(Vr),
        d.rangeRound = p(Wr),
        d.unknown = function(t) {
            return arguments.length ? (a = t,
            d) : a
        }
        ,
        function(a) {
            return o = a,
            t = a(u),
            n = a(c),
            e = a(f),
            r = t === n ? 0 : .5 / (n - t),
            i = n === e ? 0 : .5 / (e - n),
            s = n < t ? -1 : 1,
            d
        }
    }
    function H_() {
        var t = jg(j_());
        return t.copy = function() {
            return Y_(t, H_()).exponent(t.exponent())
        }
        ,
        pg.apply(t, arguments)
    }
    function X_(t) {
        for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n; )
            e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e
    }
    var G_ = X_("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf")
      , V_ = X_("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666")
      , W_ = X_("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666")
      , Z_ = X_("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928")
      , K_ = X_("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2")
      , Q_ = X_("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc")
      , J_ = X_("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999")
      , tb = X_("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3")
      , nb = X_("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f")
      , eb = X_("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab")
      , rb = t=>qr(t[t.length - 1])
      , ib = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(X_)
      , ob = rb(ib)
      , ab = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(X_)
      , ub = rb(ab)
      , cb = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(X_)
      , fb = rb(cb)
      , sb = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(X_)
      , lb = rb(sb)
      , hb = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(X_)
      , db = rb(hb)
      , pb = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(X_)
      , gb = rb(pb)
      , yb = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(X_)
      , vb = rb(yb)
      , _b = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(X_)
      , bb = rb(_b)
      , mb = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(X_)
      , xb = rb(mb)
      , wb = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(X_)
      , Mb = rb(wb)
      , Tb = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(X_)
      , Ab = rb(Tb)
      , Sb = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(X_)
      , Eb = rb(Sb)
      , Nb = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(X_)
      , kb = rb(Nb)
      , Cb = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(X_)
      , Pb = rb(Cb)
      , zb = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(X_)
      , $b = rb(zb)
      , Db = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(X_)
      , Rb = rb(Db)
      , Fb = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(X_)
      , qb = rb(Fb)
      , Ub = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(X_)
      , Ib = rb(Ub)
      , Ob = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(X_)
      , Bb = rb(Ob)
      , Yb = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(X_)
      , Lb = rb(Yb)
      , jb = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(X_)
      , Hb = rb(jb)
      , Xb = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(X_)
      , Gb = rb(Xb)
      , Vb = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(X_)
      , Wb = rb(Vb)
      , Zb = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(X_)
      , Kb = rb(Zb)
      , Qb = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(X_)
      , Jb = rb(Qb)
      , tm = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(X_)
      , nm = rb(tm)
      , em = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(X_)
      , rm = rb(em);
    var im = di(Ar(300, .5, 0), Ar(-240, .5, 1))
      , om = di(Ar(-100, .75, .35), Ar(80, 1.5, .8))
      , am = di(Ar(260, .75, .35), Ar(80, 1.5, .8))
      , um = Ar();
    var cm = qe()
      , fm = Math.PI / 3
      , sm = 2 * Math.PI / 3;
    function lm(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }
    var hm = lm(X_("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"))
      , dm = lm(X_("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"))
      , pm = lm(X_("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"))
      , gm = lm(X_("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    function ym(t) {
        return function() {
            return t
        }
    }
    const vm = Math.abs
      , _m = Math.atan2
      , bm = Math.cos
      , mm = Math.max
      , xm = Math.min
      , wm = Math.sin
      , Mm = Math.sqrt
      , Tm = 1e-12
      , Am = Math.PI
      , Sm = Am / 2
      , Em = 2 * Am;
    function Nm(t) {
        return t >= 1 ? Sm : t <= -1 ? -Sm : Math.asin(t)
    }
    function km(t) {
        let n = 3;
        return t.digits = function(e) {
            if (!arguments.length)
                return n;
            if (null == e)
                n = null;
            else {
                const t = Math.floor(e);
                if (!(t >= 0))
                    throw new RangeError(`invalid digits: ${e}`);
                n = t
            }
            return t
        }
        ,
        ()=>new Ia(n)
    }
    function Cm(t) {
        return t.innerRadius
    }
    function Pm(t) {
        return t.outerRadius
    }
    function zm(t) {
        return t.startAngle
    }
    function $m(t) {
        return t.endAngle
    }
    function Dm(t) {
        return t && t.padAngle
    }
    function Rm(t, n, e, r, i, o, a) {
        var u = t - e
          , c = n - r
          , f = (a ? o : -o) / Mm(u * u + c * c)
          , s = f * c
          , l = -f * u
          , h = t + s
          , d = n + l
          , p = e + s
          , g = r + l
          , y = (h + p) / 2
          , v = (d + g) / 2
          , _ = p - h
          , b = g - d
          , m = _ * _ + b * b
          , x = i - o
          , w = h * g - p * d
          , M = (b < 0 ? -1 : 1) * Mm(mm(0, x * x * m - w * w))
          , T = (w * b - _ * M) / m
          , A = (-w * _ - b * M) / m
          , S = (w * b + _ * M) / m
          , E = (-w * _ + b * M) / m
          , N = T - y
          , k = A - v
          , C = S - y
          , P = E - v;
        return N * N + k * k > C * C + P * P && (T = S,
        A = E),
        {
            cx: T,
            cy: A,
            x01: -s,
            y01: -l,
            x11: T * (i / x - 1),
            y11: A * (i / x - 1)
        }
    }
    var Fm = Array.prototype.slice;
    function qm(t) {
        return "object" == typeof t && "length"in t ? t : Array.from(t)
    }
    function Um(t) {
        this._context = t
    }
    function Im(t) {
        return new Um(t)
    }
    function Om(t) {
        return t[0]
    }
    function Bm(t) {
        return t[1]
    }
    function Ym(t, n) {
        var e = ym(!0)
          , r = null
          , i = Im
          , o = null
          , a = km(u);
        function u(u) {
            var c, f, s, l = (u = qm(u)).length, h = !1;
            for (null == r && (o = i(s = a())),
            c = 0; c <= l; ++c)
                !(c < l && e(f = u[c], c, u)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()),
                h && o.point(+t(f, c, u), +n(f, c, u));
            if (s)
                return o = null,
                s + "" || null
        }
        return t = "function" == typeof t ? t : void 0 === t ? Om : ym(t),
        n = "function" == typeof n ? n : void 0 === n ? Bm : ym(n),
        u.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : ym(+n),
            u) : t
        }
        ,
        u.y = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : ym(+t),
            u) : n
        }
        ,
        u.defined = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : ym(!!t),
            u) : e
        }
        ,
        u.curve = function(t) {
            return arguments.length ? (i = t,
            null != r && (o = i(r)),
            u) : i
        }
        ,
        u.context = function(t) {
            return arguments.length ? (null == t ? r = o = null : o = i(r = t),
            u) : r
        }
        ,
        u
    }
    function Lm(t, n, e) {
        var r = null
          , i = ym(!0)
          , o = null
          , a = Im
          , u = null
          , c = km(f);
        function f(f) {
            var s, l, h, d, p, g = (f = qm(f)).length, y = !1, v = new Array(g), _ = new Array(g);
            for (null == o && (u = a(p = c())),
            s = 0; s <= g; ++s) {
                if (!(s < g && i(d = f[s], s, f)) === y)
                    if (y = !y)
                        l = s,
                        u.areaStart(),
                        u.lineStart();
                    else {
                        for (u.lineEnd(),
                        u.lineStart(),
                        h = s - 1; h >= l; --h)
                            u.point(v[h], _[h]);
                        u.lineEnd(),
                        u.areaEnd()
                    }
                y && (v[s] = +t(d, s, f),
                _[s] = +n(d, s, f),
                u.point(r ? +r(d, s, f) : v[s], e ? +e(d, s, f) : _[s]))
            }
            if (p)
                return u = null,
                p + "" || null
        }
        function s() {
            return Ym().defined(i).curve(a).context(o)
        }
        return t = "function" == typeof t ? t : void 0 === t ? Om : ym(+t),
        n = "function" == typeof n ? n : ym(void 0 === n ? 0 : +n),
        e = "function" == typeof e ? e : void 0 === e ? Bm : ym(+e),
        f.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : ym(+n),
            r = null,
            f) : t
        }
        ,
        f.x0 = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : ym(+n),
            f) : t
        }
        ,
        f.x1 = function(t) {
            return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : ym(+t),
            f) : r
        }
        ,
        f.y = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : ym(+t),
            e = null,
            f) : n
        }
        ,
        f.y0 = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : ym(+t),
            f) : n
        }
        ,
        f.y1 = function(t) {
            return arguments.length ? (e = null == t ? null : "function" == typeof t ? t : ym(+t),
            f) : e
        }
        ,
        f.lineX0 = f.lineY0 = function() {
            return s().x(t).y(n)
        }
        ,
        f.lineY1 = function() {
            return s().x(t).y(e)
        }
        ,
        f.lineX1 = function() {
            return s().x(r).y(n)
        }
        ,
        f.defined = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : ym(!!t),
            f) : i
        }
        ,
        f.curve = function(t) {
            return arguments.length ? (a = t,
            null != o && (u = a(o)),
            f) : a
        }
        ,
        f.context = function(t) {
            return arguments.length ? (null == t ? o = u = null : u = a(o = t),
            f) : o
        }
        ,
        f
    }
    function jm(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }
    function Hm(t) {
        return t
    }
    Um.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(t, n)
            }
        }
    };
    var Xm = Vm(Im);
    function Gm(t) {
        this._curve = t
    }
    function Vm(t) {
        function n(n) {
            return new Gm(t(n))
        }
        return n._curve = t,
        n
    }
    function Wm(t) {
        var n = t.curve;
        return t.angle = t.x,
        delete t.x,
        t.radius = t.y,
        delete t.y,
        t.curve = function(t) {
            return arguments.length ? n(Vm(t)) : n()._curve
        }
        ,
        t
    }
    function Zm() {
        return Wm(Ym().curve(Xm))
    }
    function Km() {
        var t = Lm().curve(Xm)
          , n = t.curve
          , e = t.lineX0
          , r = t.lineX1
          , i = t.lineY0
          , o = t.lineY1;
        return t.angle = t.x,
        delete t.x,
        t.startAngle = t.x0,
        delete t.x0,
        t.endAngle = t.x1,
        delete t.x1,
        t.radius = t.y,
        delete t.y,
        t.innerRadius = t.y0,
        delete t.y0,
        t.outerRadius = t.y1,
        delete t.y1,
        t.lineStartAngle = function() {
            return Wm(e())
        }
        ,
        delete t.lineX0,
        t.lineEndAngle = function() {
            return Wm(r())
        }
        ,
        delete t.lineX1,
        t.lineInnerRadius = function() {
            return Wm(i())
        }
        ,
        delete t.lineY0,
        t.lineOuterRadius = function() {
            return Wm(o())
        }
        ,
        delete t.lineY1,
        t.curve = function(t) {
            return arguments.length ? n(Vm(t)) : n()._curve
        }
        ,
        t
    }
    function Qm(t, n) {
        return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
    }
    Gm.prototype = {
        areaStart: function() {
            this._curve.areaStart()
        },
        areaEnd: function() {
            this._curve.areaEnd()
        },
        lineStart: function() {
            this._curve.lineStart()
        },
        lineEnd: function() {
            this._curve.lineEnd()
        },
        point: function(t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        }
    };
    class Jm {
        constructor(t, n) {
            this._context = t,
            this._x = n
        }
        areaStart() {
            this._line = 0
        }
        areaEnd() {
            this._line = NaN
        }
        lineStart() {
            this._point = 0
        }
        lineEnd() {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        }
        point(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, n, t, n) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + n) / 2, t, this._y0, t, n)
            }
            this._x0 = t,
            this._y0 = n
        }
    }
    class tx {
        constructor(t) {
            this._context = t
        }
        lineStart() {
            this._point = 0
        }
        lineEnd() {}
        point(t, n) {
            if (t = +t,
            n = +n,
            0 === this._point)
                this._point = 1;
            else {
                const e = Qm(this._x0, this._y0)
                  , r = Qm(this._x0, this._y0 = (this._y0 + n) / 2)
                  , i = Qm(t, this._y0)
                  , o = Qm(t, n);
                this._context.moveTo(...e),
                this._context.bezierCurveTo(...r, ...i, ...o)
            }
            this._x0 = t,
            this._y0 = n
        }
    }
    function nx(t) {
        return new Jm(t,!0)
    }
    function ex(t) {
        return new Jm(t,!1)
    }
    function rx(t) {
        return new tx(t)
    }
    function ix(t) {
        return t.source
    }
    function ox(t) {
        return t.target
    }
    function ax(t) {
        let n = ix
          , e = ox
          , r = Om
          , i = Bm
          , o = null
          , a = null
          , u = km(c);
        function c() {
            let c;
            const f = Fm.call(arguments)
              , s = n.apply(this, f)
              , l = e.apply(this, f);
            if (null == o && (a = t(c = u())),
            a.lineStart(),
            f[0] = s,
            a.point(+r.apply(this, f), +i.apply(this, f)),
            f[0] = l,
            a.point(+r.apply(this, f), +i.apply(this, f)),
            a.lineEnd(),
            c)
                return a = null,
                c + "" || null
        }
        return c.source = function(t) {
            return arguments.length ? (n = t,
            c) : n
        }
        ,
        c.target = function(t) {
            return arguments.length ? (e = t,
            c) : e
        }
        ,
        c.x = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : ym(+t),
            c) : r
        }
        ,
        c.y = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : ym(+t),
            c) : i
        }
        ,
        c.context = function(n) {
            return arguments.length ? (null == n ? o = a = null : a = t(o = n),
            c) : o
        }
        ,
        c
    }
    const ux = Mm(3);
    var cx = {
        draw(t, n) {
            const e = .59436 * Mm(n + xm(n / 28, .75))
              , r = e / 2
              , i = r * ux;
            t.moveTo(0, e),
            t.lineTo(0, -e),
            t.moveTo(-i, -r),
            t.lineTo(i, r),
            t.moveTo(-i, r),
            t.lineTo(i, -r)
        }
    }
      , fx = {
        draw(t, n) {
            const e = Mm(n / Am);
            t.moveTo(e, 0),
            t.arc(0, 0, e, 0, Em)
        }
    }
      , sx = {
        draw(t, n) {
            const e = Mm(n / 5) / 2;
            t.moveTo(-3 * e, -e),
            t.lineTo(-e, -e),
            t.lineTo(-e, -3 * e),
            t.lineTo(e, -3 * e),
            t.lineTo(e, -e),
            t.lineTo(3 * e, -e),
            t.lineTo(3 * e, e),
            t.lineTo(e, e),
            t.lineTo(e, 3 * e),
            t.lineTo(-e, 3 * e),
            t.lineTo(-e, e),
            t.lineTo(-3 * e, e),
            t.closePath()
        }
    };
    const lx = Mm(1 / 3)
      , hx = 2 * lx;
    var dx = {
        draw(t, n) {
            const e = Mm(n / hx)
              , r = e * lx;
            t.moveTo(0, -e),
            t.lineTo(r, 0),
            t.lineTo(0, e),
            t.lineTo(-r, 0),
            t.closePath()
        }
    }
      , px = {
        draw(t, n) {
            const e = .62625 * Mm(n);
            t.moveTo(0, -e),
            t.lineTo(e, 0),
            t.lineTo(0, e),
            t.lineTo(-e, 0),
            t.closePath()
        }
    }
      , gx = {
        draw(t, n) {
            const e = .87559 * Mm(n - xm(n / 7, 2));
            t.moveTo(-e, 0),
            t.lineTo(e, 0),
            t.moveTo(0, e),
            t.lineTo(0, -e)
        }
    }
      , yx = {
        draw(t, n) {
            const e = Mm(n)
              , r = -e / 2;
            t.rect(r, r, e, e)
        }
    }
      , vx = {
        draw(t, n) {
            const e = .4431 * Mm(n);
            t.moveTo(e, e),
            t.lineTo(e, -e),
            t.lineTo(-e, -e),
            t.lineTo(-e, e),
            t.closePath()
        }
    };
    const _x = wm(Am / 10) / wm(7 * Am / 10)
      , bx = wm(Em / 10) * _x
      , mx = -bm(Em / 10) * _x;
    var xx = {
        draw(t, n) {
            const e = Mm(.8908130915292852 * n)
              , r = bx * e
              , i = mx * e;
            t.moveTo(0, -e),
            t.lineTo(r, i);
            for (let n = 1; n < 5; ++n) {
                const o = Em * n / 5
                  , a = bm(o)
                  , u = wm(o);
                t.lineTo(u * e, -a * e),
                t.lineTo(a * r - u * i, u * r + a * i)
            }
            t.closePath()
        }
    };
    const wx = Mm(3);
    var Mx = {
        draw(t, n) {
            const e = -Mm(n / (3 * wx));
            t.moveTo(0, 2 * e),
            t.lineTo(-wx * e, -e),
            t.lineTo(wx * e, -e),
            t.closePath()
        }
    };
    const Tx = Mm(3);
    var Ax = {
        draw(t, n) {
            const e = .6824 * Mm(n)
              , r = e / 2
              , i = e * Tx / 2;
            t.moveTo(0, -e),
            t.lineTo(i, r),
            t.lineTo(-i, r),
            t.closePath()
        }
    };
    const Sx = -.5
      , Ex = Mm(3) / 2
      , Nx = 1 / Mm(12)
      , kx = 3 * (Nx / 2 + 1);
    var Cx = {
        draw(t, n) {
            const e = Mm(n / kx)
              , r = e / 2
              , i = e * Nx
              , o = r
              , a = e * Nx + e
              , u = -o
              , c = a;
            t.moveTo(r, i),
            t.lineTo(o, a),
            t.lineTo(u, c),
            t.lineTo(Sx * r - Ex * i, Ex * r + Sx * i),
            t.lineTo(Sx * o - Ex * a, Ex * o + Sx * a),
            t.lineTo(Sx * u - Ex * c, Ex * u + Sx * c),
            t.lineTo(Sx * r + Ex * i, Sx * i - Ex * r),
            t.lineTo(Sx * o + Ex * a, Sx * a - Ex * o),
            t.lineTo(Sx * u + Ex * c, Sx * c - Ex * u),
            t.closePath()
        }
    }
      , Px = {
        draw(t, n) {
            const e = .6189 * Mm(n - xm(n / 6, 1.7));
            t.moveTo(-e, -e),
            t.lineTo(e, e),
            t.moveTo(-e, e),
            t.lineTo(e, -e)
        }
    };
    const zx = [fx, sx, dx, yx, xx, Mx, Cx]
      , $x = [fx, gx, Px, Ax, cx, vx, px];
    function Dx() {}
    function Rx(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }
    function Fx(t) {
        this._context = t
    }
    function qx(t) {
        this._context = t
    }
    function Ux(t) {
        this._context = t
    }
    function Ix(t, n) {
        this._basis = new Fx(t),
        this._beta = n
    }
    Fx.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 3:
                Rx(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                Rx(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    },
    qx.prototype = {
        areaStart: Dx,
        areaEnd: Dx,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4)
            }
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1,
                this._x2 = t,
                this._y2 = n;
                break;
            case 1:
                this._point = 2,
                this._x3 = t,
                this._y3 = n;
                break;
            case 2:
                this._point = 3,
                this._x4 = t,
                this._y4 = n,
                this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                break;
            default:
                Rx(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    },
    Ux.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var e = (this._x0 + 4 * this._x1 + t) / 6
                  , r = (this._y0 + 4 * this._y1 + n) / 6;
                this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                break;
            case 3:
                this._point = 4;
            default:
                Rx(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = t,
            this._y0 = this._y1,
            this._y1 = n
        }
    },
    Ix.prototype = {
        lineStart: function() {
            this._x = [],
            this._y = [],
            this._basis.lineStart()
        },
        lineEnd: function() {
            var t = this._x
              , n = this._y
              , e = t.length - 1;
            if (e > 0)
                for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, c = -1; ++c <= e; )
                    r = c / e,
                    this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * a), this._beta * n[c] + (1 - this._beta) * (o + r * u));
            this._x = this._y = null,
            this._basis.lineEnd()
        },
        point: function(t, n) {
            this._x.push(+t),
            this._y.push(+n)
        }
    };
    var Ox = function t(n) {
        function e(t) {
            return 1 === n ? new Fx(t) : new Ix(t,n)
        }
        return e.beta = function(n) {
            return t(+n)
        }
        ,
        e
    }(.85);
    function Bx(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }
    function Yx(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    Yx.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                Bx(this, this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2,
                this._x1 = t,
                this._y1 = n;
                break;
            case 2:
                this._point = 3;
            default:
                Bx(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Lx = function t(n) {
        function e(t) {
            return new Yx(t,n)
        }
        return e.tension = function(n) {
            return t(+n)
        }
        ,
        e
    }(0);
    function jx(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    jx.prototype = {
        areaStart: Dx,
        areaEnd: Dx,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                Bx(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Hx = function t(n) {
        function e(t) {
            return new jx(t,n)
        }
        return e.tension = function(n) {
            return t(+n)
        }
        ,
        e
    }(0);
    function Xx(t, n) {
        this._context = t,
        this._k = (1 - n) / 6
    }
    Xx.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Bx(this, t, n)
            }
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Gx = function t(n) {
        function e(t) {
            return new Xx(t,n)
        }
        return e.tension = function(n) {
            return t(+n)
        }
        ,
        e
    }(0);
    function Vx(t, n, e) {
        var r = t._x1
          , i = t._y1
          , o = t._x2
          , a = t._y2;
        if (t._l01_a > Tm) {
            var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a
              , c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c,
            i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > Tm) {
            var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a
              , s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s,
            a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
        }
        t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2)
    }
    function Wx(t, n) {
        this._context = t,
        this._alpha = n
    }
    Wx.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t,
            n = +n,
            this._point) {
                var e = this._x2 - t
                  , r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                Vx(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Zx = function t(n) {
        function e(t) {
            return n ? new Wx(t,n) : new Yx(t,0)
        }
        return e.alpha = function(n) {
            return t(+n)
        }
        ,
        e
    }(.5);
    function Kx(t, n) {
        this._context = t,
        this._alpha = n
    }
    Kx.prototype = {
        areaStart: Dx,
        areaEnd: Dx,
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 1:
                this._context.moveTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3),
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5)
            }
        },
        point: function(t, n) {
            if (t = +t,
            n = +n,
            this._point) {
                var e = this._x2 - t
                  , r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1,
                this._x3 = t,
                this._y3 = n;
                break;
            case 1:
                this._point = 2,
                this._context.moveTo(this._x4 = t, this._y4 = n);
                break;
            case 2:
                this._point = 3,
                this._x5 = t,
                this._y5 = n;
                break;
            default:
                Vx(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var Qx = function t(n) {
        function e(t) {
            return n ? new Kx(t,n) : new jx(t,0)
        }
        return e.alpha = function(n) {
            return t(+n)
        }
        ,
        e
    }(.5);
    function Jx(t, n) {
        this._context = t,
        this._alpha = n
    }
    Jx.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
            this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        },
        lineEnd: function() {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            if (t = +t,
            n = +n,
            this._point) {
                var e = this._x2 - t
                  , r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4;
            default:
                Vx(this, t, n)
            }
            this._l01_a = this._l12_a,
            this._l12_a = this._l23_a,
            this._l01_2a = this._l12_2a,
            this._l12_2a = this._l23_2a,
            this._x0 = this._x1,
            this._x1 = this._x2,
            this._x2 = t,
            this._y0 = this._y1,
            this._y1 = this._y2,
            this._y2 = n
        }
    };
    var tw = function t(n) {
        function e(t) {
            return n ? new Jx(t,n) : new Xx(t,0)
        }
        return e.alpha = function(n) {
            return t(+n)
        }
        ,
        e
    }(.5);
    function nw(t) {
        this._context = t
    }
    function ew(t) {
        return t < 0 ? -1 : 1
    }
    function rw(t, n, e) {
        var r = t._x1 - t._x0
          , i = n - t._x1
          , o = (t._y1 - t._y0) / (r || i < 0 && -0)
          , a = (e - t._y1) / (i || r < 0 && -0)
          , u = (o * i + a * r) / (r + i);
        return (ew(o) + ew(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0
    }
    function iw(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }
    function ow(t, n, e) {
        var r = t._x0
          , i = t._y0
          , o = t._x1
          , a = t._y1
          , u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a)
    }
    function aw(t) {
        this._context = t
    }
    function uw(t) {
        this._context = new cw(t)
    }
    function cw(t) {
        this._context = t
    }
    function fw(t) {
        this._context = t
    }
    function sw(t) {
        var n, e, r = t.length - 1, i = new Array(r), o = new Array(r), a = new Array(r);
        for (i[0] = 0,
        o[0] = 2,
        a[0] = t[0] + 2 * t[1],
        n = 1; n < r - 1; ++n)
            i[n] = 1,
            o[n] = 4,
            a[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2,
        o[r - 1] = 7,
        a[r - 1] = 8 * t[r - 1] + t[r],
        n = 1; n < r; ++n)
            e = i[n] / o[n - 1],
            o[n] -= e,
            a[n] -= e * a[n - 1];
        for (i[r - 1] = a[r - 1] / o[r - 1],
        n = r - 2; n >= 0; --n)
            i[n] = (a[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2,
        n = 0; n < r - 1; ++n)
            o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o]
    }
    function lw(t, n) {
        this._context = t,
        this._t = n
    }
    function hw(t, n) {
        if ((i = t.length) > 1)
            for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o)
                for (r = a,
                a = t[n[o]],
                e = 0; e < u; ++e)
                    a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
    }
    function dw(t) {
        for (var n = t.length, e = new Array(n); --n >= 0; )
            e[n] = n;
        return e
    }
    function pw(t, n) {
        return t[n]
    }
    function gw(t) {
        const n = [];
        return n.key = t,
        n
    }
    function yw(t) {
        var n = t.map(vw);
        return dw(t).sort((function(t, e) {
            return n[t] - n[e]
        }
        ))
    }
    function vw(t) {
        for (var n, e = -1, r = 0, i = t.length, o = -1 / 0; ++e < i; )
            (n = +t[e][1]) > o && (o = n,
            r = e);
        return r
    }
    function _w(t) {
        var n = t.map(bw);
        return dw(t).sort((function(t, e) {
            return n[t] - n[e]
        }
        ))
    }
    function bw(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i; )
            (n = +t[r][1]) && (e += n);
        return e
    }
    nw.prototype = {
        areaStart: Dx,
        areaEnd: Dx,
        lineStart: function() {
            this._point = 0
        },
        lineEnd: function() {
            this._point && this._context.closePath()
        },
        point: function(t, n) {
            t = +t,
            n = +n,
            this._point ? this._context.lineTo(t, n) : (this._point = 1,
            this._context.moveTo(t, n))
        }
    },
    aw.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
            this._point = 0
        },
        lineEnd: function() {
            switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                ow(this, this._t0, iw(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line = 1 - this._line
        },
        point: function(t, n) {
            var e = NaN;
            if (n = +n,
            (t = +t) !== this._x1 || n !== this._y1) {
                switch (this._point) {
                case 0:
                    this._point = 1,
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3,
                    ow(this, iw(this, e = rw(this, t, n)), e);
                    break;
                default:
                    ow(this, this._t0, e = rw(this, t, n))
                }
                this._x0 = this._x1,
                this._x1 = t,
                this._y0 = this._y1,
                this._y1 = n,
                this._t0 = e
            }
        }
    },
    (uw.prototype = Object.create(aw.prototype)).point = function(t, n) {
        aw.prototype.point.call(this, n, t)
    }
    ,
    cw.prototype = {
        moveTo: function(t, n) {
            this._context.moveTo(n, t)
        },
        closePath: function() {
            this._context.closePath()
        },
        lineTo: function(t, n) {
            this._context.lineTo(n, t)
        },
        bezierCurveTo: function(t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i)
        }
    },
    fw.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = [],
            this._y = []
        },
        lineEnd: function() {
            var t = this._x
              , n = this._y
              , e = t.length;
            if (e)
                if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]),
                2 === e)
                    this._context.lineTo(t[1], n[1]);
                else
                    for (var r = sw(t), i = sw(n), o = 0, a = 1; a < e; ++o,
                    ++a)
                        this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
            (this._line || 0 !== this._line && 1 === e) && this._context.closePath(),
            this._line = 1 - this._line,
            this._x = this._y = null
        },
        point: function(t, n) {
            this._x.push(+t),
            this._y.push(+n)
        }
    },
    lw.prototype = {
        areaStart: function() {
            this._line = 0
        },
        areaEnd: function() {
            this._line = NaN
        },
        lineStart: function() {
            this._x = this._y = NaN,
            this._point = 0
        },
        lineEnd: function() {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y),
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(),
            this._line >= 0 && (this._t = 1 - this._t,
            this._line = 1 - this._line)
        },
        point: function(t, n) {
            switch (t = +t,
            n = +n,
            this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0)
                    this._context.lineTo(this._x, n),
                    this._context.lineTo(t, n);
                else {
                    var e = this._x * (1 - this._t) + t * this._t;
                    this._context.lineTo(e, this._y),
                    this._context.lineTo(e, n)
                }
            }
            this._x = t,
            this._y = n
        }
    };
    var mw = t=>()=>t;
    function xw(t, {sourceEvent: n, target: e, transform: r, dispatch: i}) {
        Object.defineProperties(this, {
            type: {
                value: t,
                enumerable: !0,
                configurable: !0
            },
            sourceEvent: {
                value: n,
                enumerable: !0,
                configurable: !0
            },
            target: {
                value: e,
                enumerable: !0,
                configurable: !0
            },
            transform: {
                value: r,
                enumerable: !0,
                configurable: !0
            },
            _: {
                value: i
            }
        })
    }
    function ww(t, n, e) {
        this.k = t,
        this.x = n,
        this.y = e
    }
    ww.prototype = {
        constructor: ww,
        scale: function(t) {
            return 1 === t ? this : new ww(this.k * t,this.x,this.y)
        },
        translate: function(t, n) {
            return 0 === t & 0 === n ? this : new ww(this.k,this.x + this.k * t,this.y + this.k * n)
        },
        apply: function(t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        },
        applyX: function(t) {
            return t * this.k + this.x
        },
        applyY: function(t) {
            return t * this.k + this.y
        },
        invert: function(t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        },
        invertX: function(t) {
            return (t - this.x) / this.k
        },
        invertY: function(t) {
            return (t - this.y) / this.k
        },
        rescaleX: function(t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        },
        rescaleY: function(t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        },
        toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var Mw = new ww(1,0,0);
    function Tw(t) {
        for (; !t.__zoom; )
            if (!(t = t.parentNode))
                return Mw;
        return t.__zoom
    }
    function Aw(t) {
        t.stopImmediatePropagation()
    }
    function Sw(t) {
        t.preventDefault(),
        t.stopImmediatePropagation()
    }
    function Ew(t) {
        return !(t.ctrlKey && "wheel" !== t.type || t.button)
    }
    function Nw() {
        var t = this;
        return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]] : [[0, 0], [t.clientWidth, t.clientHeight]]
    }
    function kw() {
        return this.__zoom || Mw
    }
    function Cw(t) {
        return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1)
    }
    function Pw() {
        return navigator.maxTouchPoints || "ontouchstart"in this
    }
    function zw(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0]
          , i = t.invertX(n[1][0]) - e[1][0]
          , o = t.invertY(n[0][1]) - e[0][1]
          , a = t.invertY(n[1][1]) - e[1][1];
        return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a))
    }
    Tw.prototype = ww.prototype,
    t.Adder = A,
    t.Delaunay = ju,
    t.FormatSpecifier = nf,
    t.InternMap = InternMap,
    t.InternSet = InternSet,
    t.Node = Jd,
    t.Path = Ia,
    t.Voronoi = Uu,
    t.ZoomTransform = ww,
    t.active = function(t, n) {
        var e, r, i = t.__transition;
        if (i)
            for (r in n = null == n ? null : n + "",
            i)
                if ((e = i[r]).state > Ui && e.name === n)
                    return new go([[t]],Ko,n,+r);
        return null
    }
    ,
    t.arc = function() {
        var t = Cm
          , n = Pm
          , e = ym(0)
          , r = null
          , i = zm
          , o = $m
          , a = Dm
          , u = null
          , c = km(f);
        function f() {
            var f, s, l = +t.apply(this, arguments), h = +n.apply(this, arguments), d = i.apply(this, arguments) - Sm, p = o.apply(this, arguments) - Sm, g = vm(p - d), y = p > d;
            if (u || (u = f = c()),
            h < l && (s = h,
            h = l,
            l = s),
            h > Tm)
                if (g > Em - Tm)
                    u.moveTo(h * bm(d), h * wm(d)),
                    u.arc(0, 0, h, d, p, !y),
                    l > Tm && (u.moveTo(l * bm(p), l * wm(p)),
                    u.arc(0, 0, l, p, d, y));
                else {
                    var v, _, b = d, m = p, x = d, w = p, M = g, T = g, A = a.apply(this, arguments) / 2, S = A > Tm && (r ? +r.apply(this, arguments) : Mm(l * l + h * h)), E = xm(vm(h - l) / 2, +e.apply(this, arguments)), N = E, k = E;
                    if (S > Tm) {
                        var C = Nm(S / l * wm(A))
                          , P = Nm(S / h * wm(A));
                        (M -= 2 * C) > Tm ? (x += C *= y ? 1 : -1,
                        w -= C) : (M = 0,
                        x = w = (d + p) / 2),
                        (T -= 2 * P) > Tm ? (b += P *= y ? 1 : -1,
                        m -= P) : (T = 0,
                        b = m = (d + p) / 2)
                    }
                    var z = h * bm(b)
                      , $ = h * wm(b)
                      , D = l * bm(w)
                      , R = l * wm(w);
                    if (E > Tm) {
                        var F, q = h * bm(m), U = h * wm(m), I = l * bm(x), O = l * wm(x);
                        if (g < Am)
                            if (F = function(t, n, e, r, i, o, a, u) {
                                var c = e - t
                                  , f = r - n
                                  , s = a - i
                                  , l = u - o
                                  , h = l * c - s * f;
                                if (!(h * h < Tm))
                                    return [t + (h = (s * (n - o) - l * (t - i)) / h) * c, n + h * f]
                            }(z, $, I, O, q, U, D, R)) {
                                var B = z - F[0]
                                  , Y = $ - F[1]
                                  , L = q - F[0]
                                  , j = U - F[1]
                                  , H = 1 / wm(function(t) {
                                    return t > 1 ? 0 : t < -1 ? Am : Math.acos(t)
                                }((B * L + Y * j) / (Mm(B * B + Y * Y) * Mm(L * L + j * j))) / 2)
                                  , X = Mm(F[0] * F[0] + F[1] * F[1]);
                                N = xm(E, (l - X) / (H - 1)),
                                k = xm(E, (h - X) / (H + 1))
                            } else
                                N = k = 0
                    }
                    T > Tm ? k > Tm ? (v = Rm(I, O, z, $, h, k, y),
                    _ = Rm(q, U, D, R, h, k, y),
                    u.moveTo(v.cx + v.x01, v.cy + v.y01),
                    k < E ? u.arc(v.cx, v.cy, k, _m(v.y01, v.x01), _m(_.y01, _.x01), !y) : (u.arc(v.cx, v.cy, k, _m(v.y01, v.x01), _m(v.y11, v.x11), !y),
                    u.arc(0, 0, h, _m(v.cy + v.y11, v.cx + v.x11), _m(_.cy + _.y11, _.cx + _.x11), !y),
                    u.arc(_.cx, _.cy, k, _m(_.y11, _.x11), _m(_.y01, _.x01), !y))) : (u.moveTo(z, $),
                    u.arc(0, 0, h, b, m, !y)) : u.moveTo(z, $),
                    l > Tm && M > Tm ? N > Tm ? (v = Rm(D, R, q, U, l, -N, y),
                    _ = Rm(z, $, I, O, l, -N, y),
                    u.lineTo(v.cx + v.x01, v.cy + v.y01),
                    N < E ? u.arc(v.cx, v.cy, N, _m(v.y01, v.x01), _m(_.y01, _.x01), !y) : (u.arc(v.cx, v.cy, N, _m(v.y01, v.x01), _m(v.y11, v.x11), !y),
                    u.arc(0, 0, l, _m(v.cy + v.y11, v.cx + v.x11), _m(_.cy + _.y11, _.cx + _.x11), y),
                    u.arc(_.cx, _.cy, N, _m(_.y11, _.x11), _m(_.y01, _.x01), !y))) : u.arc(0, 0, l, w, x, y) : u.lineTo(D, R)
                }
            else
                u.moveTo(0, 0);
            if (u.closePath(),
            f)
                return u = null,
                f + "" || null
        }
        return f.centroid = function() {
            var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2
              , r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Am / 2;
            return [bm(r) * e, wm(r) * e]
        }
        ,
        f.innerRadius = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : ym(+n),
            f) : t
        }
        ,
        f.outerRadius = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : ym(+t),
            f) : n
        }
        ,
        f.cornerRadius = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : ym(+t),
            f) : e
        }
        ,
        f.padRadius = function(t) {
            return arguments.length ? (r = null == t ? null : "function" == typeof t ? t : ym(+t),
            f) : r
        }
        ,
        f.startAngle = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : ym(+t),
            f) : i
        }
        ,
        f.endAngle = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : ym(+t),
            f) : o
        }
        ,
        f.padAngle = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : ym(+t),
            f) : a
        }
        ,
        f.context = function(t) {
            return arguments.length ? (u = null == t ? null : t,
            f) : u
        }
        ,
        f
    }
    ,
    t.area = Lm,
    t.areaRadial = Km,
    t.ascending = n,
    t.autoType = function(t) {
        for (var n in t) {
            var e, r, i = t[n].trim();
            if (i)
                if ("true" === i)
                    i = !0;
                else if ("false" === i)
                    i = !1;
                else if ("NaN" === i)
                    i = NaN;
                else if (isNaN(e = +i)) {
                    if (!(r = i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))
                        continue;
                    vc && r[4] && !r[7] && (i = i.replace(/-/g, "/").replace(/T/, " ")),
                    i = new Date(i)
                } else
                    i = e;
            else
                i = null;
            t[n] = i
        }
        return t
    }
    ,
    t.axisBottom = function(t) {
        return zt(Tt, t)
    }
    ,
    t.axisLeft = function(t) {
        return zt(At, t)
    }
    ,
    t.axisRight = function(t) {
        return zt(Mt, t)
    }
    ,
    t.axisTop = function(t) {
        return zt(wt, t)
    }
    ,
    t.bin = J,
    t.bisect = l,
    t.bisectCenter = s,
    t.bisectLeft = f,
    t.bisectRight = c,
    t.bisector = r,
    t.blob = function(t, n) {
        return fetch(t, n).then(_c)
    }
    ,
    t.blur = function(t, n) {
        if (!((n = +n) >= 0))
            throw new RangeError("invalid r");
        let e = t.length;
        if (!((e = Math.floor(e)) >= 0))
            throw new RangeError("invalid length");
        if (!e || !n)
            return t;
        const r = v(n)
          , i = t.slice();
        return r(t, i, 0, e, 1),
        r(i, t, 0, e, 1),
        r(t, i, 0, e, 1),
        t
    }
    ,
    t.blur2 = h,
    t.blurImage = d,
    t.brush = function() {
        return Ma(ha)
    }
    ,
    t.brushSelection = function(t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null
    }
    ,
    t.brushX = function() {
        return Ma(sa)
    }
    ,
    t.brushY = function() {
        return Ma(la)
    }
    ,
    t.buffer = function(t, n) {
        return fetch(t, n).then(bc)
    }
    ,
    t.chord = function() {
        return $a(!1, !1)
    }
    ,
    t.chordDirected = function() {
        return $a(!0, !1)
    }
    ,
    t.chordTranspose = function() {
        return $a(!1, !0)
    }
    ,
    t.cluster = function() {
        var t = jd
          , n = 1
          , e = 1
          , r = !1;
        function i(i) {
            var o, a = 0;
            i.eachAfter((function(n) {
                var e = n.children;
                e ? (n.x = function(t) {
                    return t.reduce(Hd, 0) / t.length
                }(e),
                n.y = function(t) {
                    return 1 + t.reduce(Xd, 0)
                }(e)) : (n.x = o ? a += t(n, o) : 0,
                n.y = 0,
                o = n)
            }
            ));
            var u = function(t) {
                for (var n; n = t.children; )
                    t = n[0];
                return t
            }(i)
              , c = function(t) {
                for (var n; n = t.children; )
                    t = n[n.length - 1];
                return t
            }(i)
              , f = u.x - t(u, c) / 2
              , s = c.x + t(c, u) / 2;
            return i.eachAfter(r ? function(t) {
                t.x = (t.x - i.x) * n,
                t.y = (i.y - t.y) * e
            }
            : function(t) {
                t.x = (t.x - f) / (s - f) * n,
                t.y = (1 - (i.y ? t.y / i.y : 1)) * e
            }
            )
        }
        return i.separation = function(n) {
            return arguments.length ? (t = n,
            i) : t
        }
        ,
        i.size = function(t) {
            return arguments.length ? (r = !1,
            n = +t[0],
            e = +t[1],
            i) : r ? null : [n, e]
        }
        ,
        i.nodeSize = function(t) {
            return arguments.length ? (r = !0,
            n = +t[0],
            e = +t[1],
            i) : r ? [n, e] : null
        }
        ,
        i
    }
    ,
    t.color = $e,
    t.contourDensity = function() {
        var t = su
          , n = lu
          , e = hu
          , r = 960
          , i = 500
          , o = 20
          , a = 2
          , u = 3 * o
          , c = r + 2 * u >> a
          , f = i + 2 * u >> a
          , s = Ja(20);
        function l(r) {
            var i = new Float32Array(c * f)
              , s = Math.pow(2, -a)
              , l = -1;
            for (const o of r) {
                var d = (t(o, ++l, r) + u) * s
                  , p = (n(o, l, r) + u) * s
                  , g = +e(o, l, r);
                if (g && d >= 0 && d < c && p >= 0 && p < f) {
                    var y = Math.floor(d)
                      , v = Math.floor(p)
                      , _ = d - y - .5
                      , b = p - v - .5;
                    i[y + v * c] += (1 - _) * (1 - b) * g,
                    i[y + 1 + v * c] += _ * (1 - b) * g,
                    i[y + 1 + (v + 1) * c] += _ * b * g,
                    i[y + (v + 1) * c] += (1 - _) * b * g
                }
            }
            return h({
                data: i,
                width: c,
                height: f
            }, o * s),
            i
        }
        function d(t) {
            var n = l(t)
              , e = s(n)
              , r = Math.pow(2, 2 * a);
            return Array.isArray(e) || (e = V(Number.MIN_VALUE, tt(n) / r, e)),
            ou().size([c, f]).thresholds(e.map((t=>t * r)))(n).map(((t,n)=>(t.value = +e[n],
            p(t))))
        }
        function p(t) {
            return t.coordinates.forEach(g),
            t
        }
        function g(t) {
            t.forEach(y)
        }
        function y(t) {
            t.forEach(v)
        }
        function v(t) {
            t[0] = t[0] * Math.pow(2, a) - u,
            t[1] = t[1] * Math.pow(2, a) - u
        }
        function _() {
            return c = r + 2 * (u = 3 * o) >> a,
            f = i + 2 * u >> a,
            d
        }
        return d.contours = function(t) {
            var n = l(t)
              , e = ou().size([c, f])
              , r = Math.pow(2, 2 * a)
              , i = t=>{
                t = +t;
                var i = p(e.contour(n, t * r));
                return i.value = t,
                i
            }
            ;
            return Object.defineProperty(i, "max", {
                get: ()=>tt(n) / r
            }),
            i
        }
        ,
        d.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : Ja(+n),
            d) : t
        }
        ,
        d.y = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : Ja(+t),
            d) : n
        }
        ,
        d.weight = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : Ja(+t),
            d) : e
        }
        ,
        d.size = function(t) {
            if (!arguments.length)
                return [r, i];
            var n = +t[0]
              , e = +t[1];
            if (!(n >= 0 && e >= 0))
                throw new Error("invalid size");
            return r = n,
            i = e,
            _()
        }
        ,
        d.cellSize = function(t) {
            if (!arguments.length)
                return 1 << a;
            if (!((t = +t) >= 1))
                throw new Error("invalid cell size");
            return a = Math.floor(Math.log(t) / Math.LN2),
            _()
        }
        ,
        d.thresholds = function(t) {
            return arguments.length ? (s = "function" == typeof t ? t : Array.isArray(t) ? Ja(Ka.call(t)) : Ja(t),
            d) : s
        }
        ,
        d.bandwidth = function(t) {
            if (!arguments.length)
                return Math.sqrt(o * (o + 1));
            if (!((t = +t) >= 0))
                throw new Error("invalid bandwidth");
            return o = (Math.sqrt(4 * t * t + 1) - 1) / 2,
            _()
        }
        ,
        d
    }
    ,
    t.contours = ou,
    t.count = _,
    t.create = function(t) {
        return Kn(Lt(t).call(document.documentElement))
    }
    ,
    t.creator = Lt,
    t.cross = function(...t) {
        const n = "function" == typeof t[t.length - 1] && function(t) {
            return n=>t(...n)
        }(t.pop())
          , e = (t = t.map(x)).map(b)
          , r = t.length - 1
          , i = new Array(r + 1).fill(0)
          , o = [];
        if (r < 0 || e.some(m))
            return o;
        for (; ; ) {
            o.push(i.map(((n,e)=>t[e][n])));
            let a = r;
            for (; ++i[a] === e[a]; ) {
                if (0 === a)
                    return n ? o.map(n) : o;
                i[a--] = 0
            }
        }
    }
    ,
    t.csv = Mc,
    t.csvFormat = ic,
    t.csvFormatBody = oc,
    t.csvFormatRow = uc,
    t.csvFormatRows = ac,
    t.csvFormatValue = cc,
    t.csvParse = ec,
    t.csvParseRows = rc,
    t.cubehelix = Ar,
    t.cumsum = function(t, n) {
        var e = 0
          , r = 0;
        return Float64Array.from(t, void 0 === n ? t=>e += +t || 0 : i=>e += +n(i, r++, t) || 0)
    }
    ,
    t.curveBasis = function(t) {
        return new Fx(t)
    }
    ,
    t.curveBasisClosed = function(t) {
        return new qx(t)
    }
    ,
    t.curveBasisOpen = function(t) {
        return new Ux(t)
    }
    ,
    t.curveBumpX = nx,
    t.curveBumpY = ex,
    t.curveBundle = Ox,
    t.curveCardinal = Lx,
    t.curveCardinalClosed = Hx,
    t.curveCardinalOpen = Gx,
    t.curveCatmullRom = Zx,
    t.curveCatmullRomClosed = Qx,
    t.curveCatmullRomOpen = tw,
    t.curveLinear = Im,
    t.curveLinearClosed = function(t) {
        return new nw(t)
    }
    ,
    t.curveMonotoneX = function(t) {
        return new aw(t)
    }
    ,
    t.curveMonotoneY = function(t) {
        return new uw(t)
    }
    ,
    t.curveNatural = function(t) {
        return new fw(t)
    }
    ,
    t.curveStep = function(t) {
        return new lw(t,.5)
    }
    ,
    t.curveStepAfter = function(t) {
        return new lw(t,1)
    }
    ,
    t.curveStepBefore = function(t) {
        return new lw(t,0)
    }
    ,
    t.descending = e,
    t.deviation = M,
    t.difference = function(t, ...n) {
        t = new InternSet(t);
        for (const e of n)
            for (const n of e)
                t.delete(n);
        return t
    }
    ,
    t.disjoint = function(t, n) {
        const e = n[Symbol.iterator]()
          , r = new InternSet;
        for (const n of t) {
            if (r.has(n))
                return !1;
            let t, i;
            for (; ({value: t, done: i} = e.next()) && !i; ) {
                if (Object.is(n, t))
                    return !1;
                r.add(t)
            }
        }
        return !0
    }
    ,
    t.dispatch = Dt,
    t.drag = function() {
        var t, n, e, r, i = le, o = he, a = de, u = pe, c = {}, f = Dt("start", "drag", "end"), s = 0, l = 0;
        function h(t) {
            t.on("mousedown.drag", d).filter(u).on("touchstart.drag", y).on("touchmove.drag", v, re).on("touchend.drag touchcancel.drag", _).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function d(a, u) {
            if (!r && i.call(this, a, u)) {
                var c = b(this, o.call(this, a, u), a, u, "mouse");
                c && (Kn(a.view).on("mousemove.drag", p, ie).on("mouseup.drag", g, ie),
                ue(a.view),
                oe(a),
                e = !1,
                t = a.clientX,
                n = a.clientY,
                c("start", a))
            }
        }
        function p(r) {
            if (ae(r),
            !e) {
                var i = r.clientX - t
                  , o = r.clientY - n;
                e = i * i + o * o > l
            }
            c.mouse("drag", r)
        }
        function g(t) {
            Kn(t.view).on("mousemove.drag mouseup.drag", null),
            ce(t.view, e),
            ae(t),
            c.mouse("end", t)
        }
        function y(t, n) {
            if (i.call(this, t, n)) {
                var e, r, a = t.changedTouches, u = o.call(this, t, n), c = a.length;
                for (e = 0; e < c; ++e)
                    (r = b(this, u, t, n, a[e].identifier, a[e])) && (oe(t),
                    r("start", t, a[e]))
            }
        }
        function v(t) {
            var n, e, r = t.changedTouches, i = r.length;
            for (n = 0; n < i; ++n)
                (e = c[r[n].identifier]) && (ae(t),
                e("drag", t, r[n]))
        }
        function _(t) {
            var n, e, i = t.changedTouches, o = i.length;
            for (r && clearTimeout(r),
            r = setTimeout((function() {
                r = null
            }
            ), 500),
            n = 0; n < o; ++n)
                (e = c[i[n].identifier]) && (oe(t),
                e("end", t, i[n]))
        }
        function b(t, n, e, r, i, o) {
            var u, l, d, p = f.copy(), g = ee(o || e, n);
            if (null != (d = a.call(t, new se("beforestart",{
                sourceEvent: e,
                target: h,
                identifier: i,
                active: s,
                x: g[0],
                y: g[1],
                dx: 0,
                dy: 0,
                dispatch: p
            }), r)))
                return u = d.x - g[0] || 0,
                l = d.y - g[1] || 0,
                function e(o, a, f) {
                    var y, v = g;
                    switch (o) {
                    case "start":
                        c[i] = e,
                        y = s++;
                        break;
                    case "end":
                        delete c[i],
                        --s;
                    case "drag":
                        g = ee(f || a, n),
                        y = s
                    }
                    p.call(o, t, new se(o,{
                        sourceEvent: a,
                        subject: d,
                        target: h,
                        identifier: i,
                        active: y,
                        x: g[0] + u,
                        y: g[1] + l,
                        dx: g[0] - v[0],
                        dy: g[1] - v[1],
                        dispatch: p
                    }), r)
                }
        }
        return h.filter = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : fe(!!t),
            h) : i
        }
        ,
        h.container = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : fe(t),
            h) : o
        }
        ,
        h.subject = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : fe(t),
            h) : a
        }
        ,
        h.touchable = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t : fe(!!t),
            h) : u
        }
        ,
        h.on = function() {
            var t = f.on.apply(f, arguments);
            return t === f ? h : t
        }
        ,
        h.clickDistance = function(t) {
            return arguments.length ? (l = (t = +t) * t,
            h) : Math.sqrt(l)
        }
        ,
        h
    }
    ,
    t.dragDisable = ue,
    t.dragEnable = ce,
    t.dsv = function(t, n, e, r) {
        3 === arguments.length && "function" == typeof e && (r = e,
        e = void 0);
        var i = tc(t);
        return xc(n, e).then((function(t) {
            return i.parse(t, r)
        }
        ))
    }
    ,
    t.dsvFormat = tc,
    t.easeBack = jo,
    t.easeBackIn = Yo,
    t.easeBackInOut = jo,
    t.easeBackOut = Lo,
    t.easeBounce = Oo,
    t.easeBounceIn = function(t) {
        return 1 - Oo(1 - t)
    }
    ,
    t.easeBounceInOut = function(t) {
        return ((t *= 2) <= 1 ? 1 - Oo(1 - t) : Oo(t - 1) + 1) / 2
    }
    ,
    t.easeBounceOut = Oo,
    t.easeCircle = ko,
    t.easeCircleIn = function(t) {
        return 1 - Math.sqrt(1 - t * t)
    }
    ,
    t.easeCircleInOut = ko,
    t.easeCircleOut = function(t) {
        return Math.sqrt(1 - --t * t)
    }
    ,
    t.easeCubic = mo,
    t.easeCubicIn = function(t) {
        return t * t * t
    }
    ,
    t.easeCubicInOut = mo,
    t.easeCubicOut = function(t) {
        return --t * t * t + 1
    }
    ,
    t.easeElastic = Go,
    t.easeElasticIn = Xo,
    t.easeElasticInOut = Vo,
    t.easeElasticOut = Go,
    t.easeExp = No,
    t.easeExpIn = function(t) {
        return Eo(1 - +t)
    }
    ,
    t.easeExpInOut = No,
    t.easeExpOut = function(t) {
        return 1 - Eo(t)
    }
    ,
    t.easeLinear = t=>+t,
    t.easePoly = Mo,
    t.easePolyIn = xo,
    t.easePolyInOut = Mo,
    t.easePolyOut = wo,
    t.easeQuad = bo,
    t.easeQuadIn = function(t) {
        return t * t
    }
    ,
    t.easeQuadInOut = bo,
    t.easeQuadOut = function(t) {
        return t * (2 - t)
    }
    ,
    t.easeSin = So,
    t.easeSinIn = function(t) {
        return 1 == +t ? 1 : 1 - Math.cos(t * Ao)
    }
    ,
    t.easeSinInOut = So,
    t.easeSinOut = function(t) {
        return Math.sin(t * Ao)
    }
    ,
    t.every = function(t, n) {
        if ("function" != typeof n)
            throw new TypeError("test is not a function");
        let e = -1;
        for (const r of t)
            if (!n(r, ++e, t))
                return !1;
        return !0
    }
    ,
    t.extent = T,
    t.fcumsum = function(t, n) {
        const e = new A;
        let r = -1;
        return Float64Array.from(t, void 0 === n ? t=>e.add(+t || 0) : i=>e.add(+n(i, ++r, t) || 0))
    }
    ,
    t.filter = function(t, n) {
        if ("function" != typeof n)
            throw new TypeError("test is not a function");
        const e = [];
        let r = -1;
        for (const i of t)
            n(i, ++r, t) && e.push(i);
        return e
    }
    ,
    t.flatGroup = function(t, ...n) {
        return $(z(t, ...n), n)
    }
    ,
    t.flatRollup = function(t, n, ...e) {
        return $(R(t, n, ...e), e)
    }
    ,
    t.forceCenter = function(t, n) {
        var e, r = 1;
        function i() {
            var i, o, a = e.length, u = 0, c = 0;
            for (i = 0; i < a; ++i)
                u += (o = e[i]).x,
                c += o.y;
            for (u = (u / a - t) * r,
            c = (c / a - n) * r,
            i = 0; i < a; ++i)
                (o = e[i]).x -= u,
                o.y -= c
        }
        return null == t && (t = 0),
        null == n && (n = 0),
        i.initialize = function(t) {
            e = t
        }
        ,
        i.x = function(n) {
            return arguments.length ? (t = +n,
            i) : t
        }
        ,
        i.y = function(t) {
            return arguments.length ? (n = +t,
            i) : n
        }
        ,
        i.strength = function(t) {
            return arguments.length ? (r = +t,
            i) : r
        }
        ,
        i
    }
    ,
    t.forceCollide = function(t) {
        var n, e, r, i = 1, o = 1;
        function a() {
            for (var t, a, c, f, s, l, h, d = n.length, p = 0; p < o; ++p)
                for (a = Dc(n, Oc, Bc).visitAfter(u),
                t = 0; t < d; ++t)
                    c = n[t],
                    l = e[c.index],
                    h = l * l,
                    f = c.x + c.vx,
                    s = c.y + c.vy,
                    a.visit(g);
            function g(t, n, e, o, a) {
                var u = t.data
                  , d = t.r
                  , p = l + d;
                if (!u)
                    return n > f + p || o < f - p || e > s + p || a < s - p;
                if (u.index > c.index) {
                    var g = f - u.x - u.vx
                      , y = s - u.y - u.vy
                      , v = g * g + y * y;
                    v < p * p && (0 === g && (v += (g = Ic(r)) * g),
                    0 === y && (v += (y = Ic(r)) * y),
                    v = (p - (v = Math.sqrt(v))) / v * i,
                    c.vx += (g *= v) * (p = (d *= d) / (h + d)),
                    c.vy += (y *= v) * p,
                    u.vx -= g * (p = 1 - p),
                    u.vy -= y * p)
                }
            }
        }
        function u(t) {
            if (t.data)
                return t.r = e[t.data.index];
            for (var n = t.r = 0; n < 4; ++n)
                t[n] && t[n].r > t.r && (t.r = t[n].r)
        }
        function c() {
            if (n) {
                var r, i, o = n.length;
                for (e = new Array(o),
                r = 0; r < o; ++r)
                    i = n[r],
                    e[i.index] = +t(i, r, n)
            }
        }
        return "function" != typeof t && (t = Uc(null == t ? 1 : +t)),
        a.initialize = function(t, e) {
            n = t,
            r = e,
            c()
        }
        ,
        a.iterations = function(t) {
            return arguments.length ? (o = +t,
            a) : o
        }
        ,
        a.strength = function(t) {
            return arguments.length ? (i = +t,
            a) : i
        }
        ,
        a.radius = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : Uc(+n),
            c(),
            a) : t
        }
        ,
        a
    }
    ,
    t.forceLink = function(t) {
        var n, e, r, i, o, a, u = Yc, c = function(t) {
            return 1 / Math.min(i[t.source.index], i[t.target.index])
        }, f = Uc(30), s = 1;
        function l(r) {
            for (var i = 0, u = t.length; i < s; ++i)
                for (var c, f, l, h, d, p, g, y = 0; y < u; ++y)
                    f = (c = t[y]).source,
                    h = (l = c.target).x + l.vx - f.x - f.vx || Ic(a),
                    d = l.y + l.vy - f.y - f.vy || Ic(a),
                    h *= p = ((p = Math.sqrt(h * h + d * d)) - e[y]) / p * r * n[y],
                    d *= p,
                    l.vx -= h * (g = o[y]),
                    l.vy -= d * g,
                    f.vx += h * (g = 1 - g),
                    f.vy += d * g
        }
        function h() {
            if (r) {
                var a, c, f = r.length, s = t.length, l = new Map(r.map(((t,n)=>[u(t, n, r), t])));
                for (a = 0,
                i = new Array(f); a < s; ++a)
                    (c = t[a]).index = a,
                    "object" != typeof c.source && (c.source = Lc(l, c.source)),
                    "object" != typeof c.target && (c.target = Lc(l, c.target)),
                    i[c.source.index] = (i[c.source.index] || 0) + 1,
                    i[c.target.index] = (i[c.target.index] || 0) + 1;
                for (a = 0,
                o = new Array(s); a < s; ++a)
                    c = t[a],
                    o[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
                n = new Array(s),
                d(),
                e = new Array(s),
                p()
            }
        }
        function d() {
            if (r)
                for (var e = 0, i = t.length; e < i; ++e)
                    n[e] = +c(t[e], e, t)
        }
        function p() {
            if (r)
                for (var n = 0, i = t.length; n < i; ++n)
                    e[n] = +f(t[n], n, t)
        }
        return null == t && (t = []),
        l.initialize = function(t, n) {
            r = t,
            a = n,
            h()
        }
        ,
        l.links = function(n) {
            return arguments.length ? (t = n,
            h(),
            l) : t
        }
        ,
        l.id = function(t) {
            return arguments.length ? (u = t,
            l) : u
        }
        ,
        l.iterations = function(t) {
            return arguments.length ? (s = +t,
            l) : s
        }
        ,
        l.strength = function(t) {
            return arguments.length ? (c = "function" == typeof t ? t : Uc(+t),
            d(),
            l) : c
        }
        ,
        l.distance = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : Uc(+t),
            p(),
            l) : f
        }
        ,
        l
    }
    ,
    t.forceManyBody = function() {
        var t, n, e, r, i, o = Uc(-30), a = 1, u = 1 / 0, c = .81;
        function f(e) {
            var i, o = t.length, a = Dc(t, Gc, Vc).visitAfter(l);
            for (r = e,
            i = 0; i < o; ++i)
                n = t[i],
                a.visit(h)
        }
        function s() {
            if (t) {
                var n, e, r = t.length;
                for (i = new Array(r),
                n = 0; n < r; ++n)
                    e = t[n],
                    i[e.index] = +o(e, n, t)
            }
        }
        function l(t) {
            var n, e, r, o, a, u = 0, c = 0;
            if (t.length) {
                for (r = o = a = 0; a < 4; ++a)
                    (n = t[a]) && (e = Math.abs(n.value)) && (u += n.value,
                    c += e,
                    r += e * n.x,
                    o += e * n.y);
                t.x = r / c,
                t.y = o / c
            } else {
                (n = t).x = n.data.x,
                n.y = n.data.y;
                do {
                    u += i[n.data.index]
                } while (n = n.next)
            }
            t.value = u
        }
        function h(t, o, f, s) {
            if (!t.value)
                return !0;
            var l = t.x - n.x
              , h = t.y - n.y
              , d = s - o
              , p = l * l + h * h;
            if (d * d / c < p)
                return p < u && (0 === l && (p += (l = Ic(e)) * l),
                0 === h && (p += (h = Ic(e)) * h),
                p < a && (p = Math.sqrt(a * p)),
                n.vx += l * t.value * r / p,
                n.vy += h * t.value * r / p),
                !0;
            if (!(t.length || p >= u)) {
                (t.data !== n || t.next) && (0 === l && (p += (l = Ic(e)) * l),
                0 === h && (p += (h = Ic(e)) * h),
                p < a && (p = Math.sqrt(a * p)));
                do {
                    t.data !== n && (d = i[t.data.index] * r / p,
                    n.vx += l * d,
                    n.vy += h * d)
                } while (t = t.next)
            }
        }
        return f.initialize = function(n, r) {
            t = n,
            e = r,
            s()
        }
        ,
        f.strength = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : Uc(+t),
            s(),
            f) : o
        }
        ,
        f.distanceMin = function(t) {
            return arguments.length ? (a = t * t,
            f) : Math.sqrt(a)
        }
        ,
        f.distanceMax = function(t) {
            return arguments.length ? (u = t * t,
            f) : Math.sqrt(u)
        }
        ,
        f.theta = function(t) {
            return arguments.length ? (c = t * t,
            f) : Math.sqrt(c)
        }
        ,
        f
    }
    ,
    t.forceRadial = function(t, n, e) {
        var r, i, o, a = Uc(.1);
        function u(t) {
            for (var a = 0, u = r.length; a < u; ++a) {
                var c = r[a]
                  , f = c.x - n || 1e-6
                  , s = c.y - e || 1e-6
                  , l = Math.sqrt(f * f + s * s)
                  , h = (o[a] - l) * i[a] * t / l;
                c.vx += f * h,
                c.vy += s * h
            }
        }
        function c() {
            if (r) {
                var n, e = r.length;
                for (i = new Array(e),
                o = new Array(e),
                n = 0; n < e; ++n)
                    o[n] = +t(r[n], n, r),
                    i[n] = isNaN(o[n]) ? 0 : +a(r[n], n, r)
            }
        }
        return "function" != typeof t && (t = Uc(+t)),
        null == n && (n = 0),
        null == e && (e = 0),
        u.initialize = function(t) {
            r = t,
            c()
        }
        ,
        u.strength = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : Uc(+t),
            c(),
            u) : a
        }
        ,
        u.radius = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : Uc(+n),
            c(),
            u) : t
        }
        ,
        u.x = function(t) {
            return arguments.length ? (n = +t,
            u) : n
        }
        ,
        u.y = function(t) {
            return arguments.length ? (e = +t,
            u) : e
        }
        ,
        u
    }
    ,
    t.forceSimulation = function(t) {
        var n, e = 1, r = .001, i = 1 - Math.pow(r, 1 / 300), o = 0, a = .6, u = new Map, c = ki(l), f = Dt("tick", "end"), s = function() {
            let t = 1;
            return ()=>(t = (jc * t + Hc) % Xc) / Xc
        }();
        function l() {
            h(),
            f.call("tick", n),
            e < r && (c.stop(),
            f.call("end", n))
        }
        function h(r) {
            var c, f, s = t.length;
            void 0 === r && (r = 1);
            for (var l = 0; l < r; ++l)
                for (e += (o - e) * i,
                u.forEach((function(t) {
                    t(e)
                }
                )),
                c = 0; c < s; ++c)
                    null == (f = t[c]).fx ? f.x += f.vx *= a : (f.x = f.fx,
                    f.vx = 0),
                    null == f.fy ? f.y += f.vy *= a : (f.y = f.fy,
                    f.vy = 0);
            return n
        }
        function d() {
            for (var n, e = 0, r = t.length; e < r; ++e) {
                if ((n = t[e]).index = e,
                null != n.fx && (n.x = n.fx),
                null != n.fy && (n.y = n.fy),
                isNaN(n.x) || isNaN(n.y)) {
                    var i = 10 * Math.sqrt(.5 + e)
                      , o = e * Wc;
                    n.x = i * Math.cos(o),
                    n.y = i * Math.sin(o)
                }
                (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
            }
        }
        function p(n) {
            return n.initialize && n.initialize(t, s),
            n
        }
        return null == t && (t = []),
        d(),
        n = {
            tick: h,
            restart: function() {
                return c.restart(l),
                n
            },
            stop: function() {
                return c.stop(),
                n
            },
            nodes: function(e) {
                return arguments.length ? (t = e,
                d(),
                u.forEach(p),
                n) : t
            },
            alpha: function(t) {
                return arguments.length ? (e = +t,
                n) : e
            },
            alphaMin: function(t) {
                return arguments.length ? (r = +t,
                n) : r
            },
            alphaDecay: function(t) {
                return arguments.length ? (i = +t,
                n) : +i
            },
            alphaTarget: function(t) {
                return arguments.length ? (o = +t,
                n) : o
            },
            velocityDecay: function(t) {
                return arguments.length ? (a = 1 - t,
                n) : 1 - a
            },
            randomSource: function(t) {
                return arguments.length ? (s = t,
                u.forEach(p),
                n) : s
            },
            force: function(t, e) {
                return arguments.length > 1 ? (null == e ? u.delete(t) : u.set(t, p(e)),
                n) : u.get(t)
            },
            find: function(n, e, r) {
                var i, o, a, u, c, f = 0, s = t.length;
                for (null == r ? r = 1 / 0 : r *= r,
                f = 0; f < s; ++f)
                    (a = (i = n - (u = t[f]).x) * i + (o = e - u.y) * o) < r && (c = u,
                    r = a);
                return c
            },
            on: function(t, e) {
                return arguments.length > 1 ? (f.on(t, e),
                n) : f.on(t)
            }
        }
    }
    ,
    t.forceX = function(t) {
        var n, e, r, i = Uc(.1);
        function o(t) {
            for (var i, o = 0, a = n.length; o < a; ++o)
                (i = n[o]).vx += (r[o] - i.x) * e[o] * t
        }
        function a() {
            if (n) {
                var o, a = n.length;
                for (e = new Array(a),
                r = new Array(a),
                o = 0; o < a; ++o)
                    e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
            }
        }
        return "function" != typeof t && (t = Uc(null == t ? 0 : +t)),
        o.initialize = function(t) {
            n = t,
            a()
        }
        ,
        o.strength = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : Uc(+t),
            a(),
            o) : i
        }
        ,
        o.x = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : Uc(+n),
            a(),
            o) : t
        }
        ,
        o
    }
    ,
    t.forceY = function(t) {
        var n, e, r, i = Uc(.1);
        function o(t) {
            for (var i, o = 0, a = n.length; o < a; ++o)
                (i = n[o]).vy += (r[o] - i.y) * e[o] * t
        }
        function a() {
            if (n) {
                var o, a = n.length;
                for (e = new Array(a),
                r = new Array(a),
                o = 0; o < a; ++o)
                    e[o] = isNaN(r[o] = +t(n[o], o, n)) ? 0 : +i(n[o], o, n)
            }
        }
        return "function" != typeof t && (t = Uc(null == t ? 0 : +t)),
        o.initialize = function(t) {
            n = t,
            a()
        }
        ,
        o.strength = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : Uc(+t),
            a(),
            o) : i
        }
        ,
        o.y = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : Uc(+n),
            a(),
            o) : t
        }
        ,
        o
    }
    ,
    t.formatDefaultLocale = sf,
    t.formatLocale = ff,
    t.formatSpecifier = tf,
    t.fsum = function(t, n) {
        const e = new A;
        if (void 0 === n)
            for (let n of t)
                (n = +n) && e.add(n);
        else {
            let r = -1;
            for (let i of t)
                (i = +n(i, ++r, t)) && e.add(i)
        }
        return +e
    }
    ,
    t.geoAlbers = wd,
    t.geoAlbersUsa = function() {
        var t, n, e, r, i, o, a = wd(), u = xd().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), c = xd().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), f = {
            point: function(t, n) {
                o = [t, n]
            }
        };
        function s(t) {
            var n = t[0]
              , a = t[1];
            return o = null,
            e.point(n, a),
            o || (r.point(n, a),
            o) || (i.point(n, a),
            o)
        }
        function l() {
            return t = n = null,
            s
        }
        return s.invert = function(t) {
            var n = a.scale()
              , e = a.translate()
              , r = (t[0] - e[0]) / n
              , i = (t[1] - e[1]) / n;
            return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? u : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : a).invert(t)
        }
        ,
        s.stream = function(e) {
            return t && n === e ? t : (r = [a.stream(n = e), u.stream(e), c.stream(e)],
            i = r.length,
            t = {
                point: function(t, n) {
                    for (var e = -1; ++e < i; )
                        r[e].point(t, n)
                },
                sphere: function() {
                    for (var t = -1; ++t < i; )
                        r[t].sphere()
                },
                lineStart: function() {
                    for (var t = -1; ++t < i; )
                        r[t].lineStart()
                },
                lineEnd: function() {
                    for (var t = -1; ++t < i; )
                        r[t].lineEnd()
                },
                polygonStart: function() {
                    for (var t = -1; ++t < i; )
                        r[t].polygonStart()
                },
                polygonEnd: function() {
                    for (var t = -1; ++t < i; )
                        r[t].polygonEnd()
                }
            });
            var r, i
        }
        ,
        s.precision = function(t) {
            return arguments.length ? (a.precision(t),
            u.precision(t),
            c.precision(t),
            l()) : a.precision()
        }
        ,
        s.scale = function(t) {
            return arguments.length ? (a.scale(t),
            u.scale(.35 * t),
            c.scale(t),
            s.translate(a.translate())) : a.scale()
        }
        ,
        s.translate = function(t) {
            if (!arguments.length)
                return a.translate();
            var n = a.scale()
              , o = +t[0]
              , s = +t[1];
            return e = a.translate(t).clipExtent([[o - .455 * n, s - .238 * n], [o + .455 * n, s + .238 * n]]).stream(f),
            r = u.translate([o - .307 * n, s + .201 * n]).clipExtent([[o - .425 * n + pf, s + .12 * n + pf], [o - .214 * n - pf, s + .234 * n - pf]]).stream(f),
            i = c.translate([o - .205 * n, s + .212 * n]).clipExtent([[o - .214 * n + pf, s + .166 * n + pf], [o - .115 * n - pf, s + .234 * n - pf]]).stream(f),
            l()
        }
        ,
        s.fitExtent = function(t, n) {
            return cd(s, t, n)
        }
        ,
        s.fitSize = function(t, n) {
            return fd(s, t, n)
        }
        ,
        s.fitWidth = function(t, n) {
            return sd(s, t, n)
        }
        ,
        s.fitHeight = function(t, n) {
            return ld(s, t, n)
        }
        ,
        s.scale(1070)
    }
    ,
    t.geoArea = function(t) {
        return cs = new A,
        jf(t, fs),
        2 * cs
    }
    ,
    t.geoAzimuthalEqualArea = function() {
        return vd(Ad).scale(124.75).clipAngle(179.999)
    }
    ,
    t.geoAzimuthalEqualAreaRaw = Ad,
    t.geoAzimuthalEquidistant = function() {
        return vd(Sd).scale(79.4188).clipAngle(179.999)
    }
    ,
    t.geoAzimuthalEquidistantRaw = Sd,
    t.geoBounds = function(t) {
        var n, e, r, i, o, a, u;
        if (Jf = Qf = -(Zf = Kf = 1 / 0),
        os = [],
        jf(t, qs),
        e = os.length) {
            for (os.sort(Xs),
            n = 1,
            o = [r = os[0]]; n < e; ++n)
                Gs(r, (i = os[n])[0]) || Gs(r, i[1]) ? (Hs(r[0], i[1]) > Hs(r[0], r[1]) && (r[1] = i[1]),
                Hs(i[0], r[1]) > Hs(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
            for (a = -1 / 0,
            n = 0,
            r = o[e = o.length - 1]; n <= e; r = i,
            ++n)
                i = o[n],
                (u = Hs(r[1], i[0])) > a && (a = u,
                Zf = i[0],
                Qf = r[1])
        }
        return os = as = null,
        Zf === 1 / 0 || Kf === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Zf, Kf], [Qf, Jf]]
    }
    ,
    t.geoCentroid = function(t) {
        xs = ws = Ms = Ts = As = Ss = Es = Ns = 0,
        ks = new A,
        Cs = new A,
        Ps = new A,
        jf(t, Vs);
        var n = +ks
          , e = +Cs
          , r = +Ps
          , i = Nf(n, e, r);
        return i < gf && (n = Ss,
        e = Es,
        r = Ns,
        ws < pf && (n = Ms,
        e = Ts,
        r = As),
        (i = Nf(n, e, r)) < gf) ? [NaN, NaN] : [Tf(e, n) * mf, Ff(r / i) * mf]
    }
    ,
    t.geoCircle = function() {
        var t, n, e = ol([0, 0]), r = ol(90), i = ol(6), o = {
            point: function(e, r) {
                t.push(e = n(e, r)),
                e[0] *= mf,
                e[1] *= mf
            }
        };
        function a() {
            var a = e.apply(this, arguments)
              , u = r.apply(this, arguments) * xf
              , c = i.apply(this, arguments) * xf;
            return t = [],
            n = cl(-a[0] * xf, -a[1] * xf, 0).invert,
            dl(o, u, c, 1),
            a = {
                type: "Polygon",
                coordinates: [t]
            },
            t = n = null,
            a
        }
        return a.center = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : ol([+t[0], +t[1]]),
            a) : e
        }
        ,
        a.radius = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : ol(+t),
            a) : r
        }
        ,
        a.precision = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : ol(+t),
            a) : i
        }
        ,
        a
    }
    ,
    t.geoClipAntimeridian = Al,
    t.geoClipCircle = Sl,
    t.geoClipExtent = function() {
        var t, n, e, r = 0, i = 0, o = 960, a = 500;
        return e = {
            stream: function(e) {
                return t && n === e ? t : t = $l(r, i, o, a)(n = e)
            },
            extent: function(u) {
                return arguments.length ? (r = +u[0][0],
                i = +u[0][1],
                o = +u[1][0],
                a = +u[1][1],
                t = n = null,
                e) : [[r, i], [o, a]]
            }
        }
    }
    ,
    t.geoClipRectangle = $l,
    t.geoConicConformal = function() {
        return bd(Cd).scale(109.5).parallels([30, 30])
    }
    ,
    t.geoConicConformalRaw = Cd,
    t.geoConicEqualArea = xd,
    t.geoConicEqualAreaRaw = md,
    t.geoConicEquidistant = function() {
        return bd(zd).scale(131.154).center([0, 13.9389])
    }
    ,
    t.geoConicEquidistantRaw = zd,
    t.geoContains = function(t, n) {
        return (t && Yl.hasOwnProperty(t.type) ? Yl[t.type] : jl)(t, n)
    }
    ,
    t.geoDistance = Bl,
    t.geoEqualEarth = function() {
        return vd(Ud).scale(177.158)
    }
    ,
    t.geoEqualEarthRaw = Ud,
    t.geoEquirectangular = function() {
        return vd(Pd).scale(152.63)
    }
    ,
    t.geoEquirectangularRaw = Pd,
    t.geoGnomonic = function() {
        return vd(Id).scale(144.049).clipAngle(60)
    }
    ,
    t.geoGnomonicRaw = Id,
    t.geoGraticule = Ql,
    t.geoGraticule10 = function() {
        return Ql()()
    }
    ,
    t.geoIdentity = function() {
        var t, n, e, r, i, o, a, u = 1, c = 0, f = 0, s = 1, l = 1, h = 0, d = null, p = 1, g = 1, y = od({
            point: function(t, n) {
                var e = b([t, n]);
                this.stream.point(e[0], e[1])
            }
        }), v = rh;
        function _() {
            return p = u * s,
            g = u * l,
            o = a = null,
            b
        }
        function b(e) {
            var r = e[0] * p
              , i = e[1] * g;
            if (h) {
                var o = i * t - r * n;
                r = r * t + i * n,
                i = o
            }
            return [r + c, i + f]
        }
        return b.invert = function(e) {
            var r = e[0] - c
              , i = e[1] - f;
            if (h) {
                var o = i * t + r * n;
                r = r * t - i * n,
                i = o
            }
            return [r / p, i / g]
        }
        ,
        b.stream = function(t) {
            return o && a === t ? o : o = y(v(a = t))
        }
        ,
        b.postclip = function(t) {
            return arguments.length ? (v = t,
            d = e = r = i = null,
            _()) : v
        }
        ,
        b.clipExtent = function(t) {
            return arguments.length ? (v = null == t ? (d = e = r = i = null,
            rh) : $l(d = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]),
            _()) : null == d ? null : [[d, e], [r, i]]
        }
        ,
        b.scale = function(t) {
            return arguments.length ? (u = +t,
            _()) : u
        }
        ,
        b.translate = function(t) {
            return arguments.length ? (c = +t[0],
            f = +t[1],
            _()) : [c, f]
        }
        ,
        b.angle = function(e) {
            return arguments.length ? (n = Pf(h = e % 360 * xf),
            t = Af(h),
            _()) : h * mf
        }
        ,
        b.reflectX = function(t) {
            return arguments.length ? (s = t ? -1 : 1,
            _()) : s < 0
        }
        ,
        b.reflectY = function(t) {
            return arguments.length ? (l = t ? -1 : 1,
            _()) : l < 0
        }
        ,
        b.fitExtent = function(t, n) {
            return cd(b, t, n)
        }
        ,
        b.fitSize = function(t, n) {
            return fd(b, t, n)
        }
        ,
        b.fitWidth = function(t, n) {
            return sd(b, t, n)
        }
        ,
        b.fitHeight = function(t, n) {
            return ld(b, t, n)
        }
        ,
        b
    }
    ,
    t.geoInterpolate = function(t, n) {
        var e = t[0] * xf
          , r = t[1] * xf
          , i = n[0] * xf
          , o = n[1] * xf
          , a = Af(r)
          , u = Pf(r)
          , c = Af(o)
          , f = Pf(o)
          , s = a * Af(e)
          , l = a * Pf(e)
          , h = c * Af(i)
          , d = c * Pf(i)
          , p = 2 * Ff($f(qf(o - r) + a * c * qf(i - e)))
          , g = Pf(p)
          , y = p ? function(t) {
            var n = Pf(t *= p) / g
              , e = Pf(p - t) / g
              , r = e * s + n * h
              , i = e * l + n * d
              , o = e * u + n * f;
            return [Tf(i, r) * mf, Tf(o, $f(r * r + i * i)) * mf]
        }
        : function() {
            return [e * mf, r * mf]
        }
        ;
        return y.distance = p,
        y
    }
    ,
    t.geoLength = Ul,
    t.geoMercator = function() {
        return Nd(Ed).scale(961 / bf)
    }
    ,
    t.geoMercatorRaw = Ed,
    t.geoNaturalEarth1 = function() {
        return vd(Od).scale(175.295)
    }
    ,
    t.geoNaturalEarth1Raw = Od,
    t.geoOrthographic = function() {
        return vd(Bd).scale(249.5).clipAngle(90 + pf)
    }
    ,
    t.geoOrthographicRaw = Bd,
    t.geoPath = function(t, n) {
        let e, r, i = 3, o = 4.5;
        function a(t) {
            return t && ("function" == typeof o && r.pointRadius(+o.apply(this, arguments)),
            jf(t, e(r))),
            r.result()
        }
        return a.area = function(t) {
            return jf(t, e(lh)),
            lh.result()
        }
        ,
        a.measure = function(t) {
            return jf(t, e(Qh)),
            Qh.result()
        }
        ,
        a.bounds = function(t) {
            return jf(t, e(xh)),
            xh.result()
        }
        ,
        a.centroid = function(t) {
            return jf(t, e(Bh)),
            Bh.result()
        }
        ,
        a.projection = function(n) {
            return arguments.length ? (e = null == n ? (t = null,
            rh) : (t = n).stream,
            a) : t
        }
        ,
        a.context = function(t) {
            return arguments.length ? (r = null == t ? (n = null,
            new rd(i)) : new Yh(n = t),
            "function" != typeof o && r.pointRadius(o),
            a) : n
        }
        ,
        a.pointRadius = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : (r.pointRadius(+t),
            +t),
            a) : o
        }
        ,
        a.digits = function(t) {
            if (!arguments.length)
                return i;
            if (null == t)
                i = null;
            else {
                const n = Math.floor(t);
                if (!(n >= 0))
                    throw new RangeError(`invalid digits: ${t}`);
                i = n
            }
            return null === n && (r = new rd(i)),
            a
        }
        ,
        a.projection(t).digits(i).context(n)
    }
    ,
    t.geoProjection = vd,
    t.geoProjectionMutator = _d,
    t.geoRotation = hl,
    t.geoStereographic = function() {
        return vd(Yd).scale(250).clipAngle(142)
    }
    ,
    t.geoStereographicRaw = Yd,
    t.geoStream = jf,
    t.geoTransform = function(t) {
        return {
            stream: od(t)
        }
    }
    ,
    t.geoTransverseMercator = function() {
        var t = Nd(Ld)
          , n = t.center
          , e = t.rotate;
        return t.center = function(t) {
            return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
        }
        ,
        t.rotate = function(t) {
            return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
        }
        ,
        e([0, 0, 90]).scale(159.155)
    }
    ,
    t.geoTransverseMercatorRaw = Ld,
    t.gray = function(t, n) {
        return new cr(t,0,0,null == n ? 1 : n)
    }
    ,
    t.greatest = at,
    t.greatestIndex = function(t, e=n) {
        if (1 === e.length)
            return nt(t, e);
        let r, i = -1, o = -1;
        for (const n of t)
            ++o,
            (i < 0 ? 0 === e(n, n) : e(n, r) > 0) && (r = n,
            i = o);
        return i
    }
    ,
    t.group = P,
    t.groupSort = function(t, e, r) {
        return (2 !== e.length ? I(D(t, e, r), (([t,e],[r,i])=>n(e, i) || n(t, r))) : I(P(t, r), (([t,r],[i,o])=>e(r, o) || n(t, i)))).map((([t])=>t))
    }
    ,
    t.groups = z,
    t.hcl = pr,
    t.hierarchy = Vd,
    t.histogram = J,
    t.hsl = Xe,
    t.html = Nc,
    t.image = function(t, n) {
        return new Promise((function(e, r) {
            var i = new Image;
            for (var o in n)
                i[o] = n[o];
            i.onerror = r,
            i.onload = function() {
                e(i)
            }
            ,
            i.src = t
        }
        ))
    }
    ,
    t.index = function(t, ...n) {
        return q(t, C, F, n)
    }
    ,
    t.indexes = function(t, ...n) {
        return q(t, Array.from, F, n)
    }
    ,
    t.interpolate = Vr,
    t.interpolateArray = function(t, n) {
        return (Or(n) ? Ir : Br)(t, n)
    }
    ,
    t.interpolateBasis = Nr,
    t.interpolateBasisClosed = kr,
    t.interpolateBlues = Gb,
    t.interpolateBrBG = ob,
    t.interpolateBuGn = Mb,
    t.interpolateBuPu = Ab,
    t.interpolateCividis = function(t) {
        return t = Math.max(0, Math.min(1, t)),
        "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - 2710.57 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - 67.37 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - 2475.67 * t))))))) + ")"
    }
    ,
    t.interpolateCool = am,
    t.interpolateCubehelix = hi,
    t.interpolateCubehelixDefault = im,
    t.interpolateCubehelixLong = di,
    t.interpolateDate = Yr,
    t.interpolateDiscrete = function(t) {
        var n = t.length;
        return function(e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }
    ,
    t.interpolateGnBu = Eb,
    t.interpolateGreens = Wb,
    t.interpolateGreys = Kb,
    t.interpolateHcl = fi,
    t.interpolateHclLong = si,
    t.interpolateHsl = ai,
    t.interpolateHslLong = ui,
    t.interpolateHue = function(t, n) {
        var e = zr(+t, +n);
        return function(t) {
            var n = e(t);
            return n - 360 * Math.floor(n / 360)
        }
    }
    ,
    t.interpolateInferno = pm,
    t.interpolateLab = function(t, n) {
        var e = Dr((t = ur(t)).l, (n = ur(n)).l)
          , r = Dr(t.a, n.a)
          , i = Dr(t.b, n.b)
          , o = Dr(t.opacity, n.opacity);
        return function(n) {
            return t.l = e(n),
            t.a = r(n),
            t.b = i(n),
            t.opacity = o(n),
            t + ""
        }
    }
    ,
    t.interpolateMagma = dm,
    t.interpolateNumber = Lr,
    t.interpolateNumberArray = Ir,
    t.interpolateObject = jr,
    t.interpolateOrRd = kb,
    t.interpolateOranges = rm,
    t.interpolatePRGn = ub,
    t.interpolatePiYG = fb,
    t.interpolatePlasma = gm,
    t.interpolatePuBu = $b,
    t.interpolatePuBuGn = Pb,
    t.interpolatePuOr = lb,
    t.interpolatePuRd = Rb,
    t.interpolatePurples = Jb,
    t.interpolateRainbow = function(t) {
        (t < 0 || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - .5);
        return um.h = 360 * t - 100,
        um.s = 1.5 - 1.5 * n,
        um.l = .8 - .9 * n,
        um + ""
    }
    ,
    t.interpolateRdBu = db,
    t.interpolateRdGy = gb,
    t.interpolateRdPu = qb,
    t.interpolateRdYlBu = vb,
    t.interpolateRdYlGn = bb,
    t.interpolateReds = nm,
    t.interpolateRgb = Rr,
    t.interpolateRgbBasis = qr,
    t.interpolateRgbBasisClosed = Ur,
    t.interpolateRound = Wr,
    t.interpolateSinebow = function(t) {
        var n;
        return t = (.5 - t) * Math.PI,
        cm.r = 255 * (n = Math.sin(t)) * n,
        cm.g = 255 * (n = Math.sin(t + fm)) * n,
        cm.b = 255 * (n = Math.sin(t + sm)) * n,
        cm + ""
    }
    ,
    t.interpolateSpectral = xb,
    t.interpolateString = Gr,
    t.interpolateTransformCss = ni,
    t.interpolateTransformSvg = ei,
    t.interpolateTurbo = function(t) {
        return t = Math.max(0, Math.min(1, t)),
        "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - 14825.05 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + 707.56 * t))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - 6838.66 * t))))))) + ")"
    }
    ,
    t.interpolateViridis = hm,
    t.interpolateWarm = om,
    t.interpolateYlGn = Bb,
    t.interpolateYlGnBu = Ib,
    t.interpolateYlOrBr = Lb,
    t.interpolateYlOrRd = Hb,
    t.interpolateZoom = ii,
    t.interrupt = Vi,
    t.intersection = function(t, ...n) {
        t = new InternSet(t),
        n = n.map(_t);
        t: for (const e of t)
            for (const r of n)
                if (!r.has(e)) {
                    t.delete(e);
                    continue t
                }
        return t
    }
    ,
    t.interval = function(t, n, e) {
        var r = new Ni
          , i = n;
        return null == n ? (r.restart(t, n, e),
        r) : (r._restart = r.restart,
        r.restart = function(t, n, e) {
            n = +n,
            e = null == e ? Si() : +e,
            r._restart((function o(a) {
                a += i,
                r._restart(o, i += n, e),
                t(a)
            }
            ), n, e)
        }
        ,
        r.restart(t, n, e),
        r)
    }
    ,
    t.isoFormat = R_,
    t.isoParse = q_,
    t.json = function(t, n) {
        return fetch(t, n).then(Ac)
    }
    ,
    t.lab = ur,
    t.lch = function(t, n, e, r) {
        return 1 === arguments.length ? dr(t) : new gr(e,n,t,null == r ? 1 : r)
    }
    ,
    t.least = function(t, e=n) {
        let r, i = !1;
        if (1 === e.length) {
            let o;
            for (const a of t) {
                const t = e(a);
                (i ? n(t, o) < 0 : 0 === n(t, t)) && (r = a,
                o = t,
                i = !0)
            }
        } else
            for (const n of t)
                (i ? e(n, r) < 0 : 0 === e(n, n)) && (r = n,
                i = !0);
        return r
    }
    ,
    t.leastIndex = dt,
    t.line = Ym,
    t.lineRadial = Zm,
    t.link = ax,
    t.linkHorizontal = function() {
        return ax(nx)
    }
    ,
    t.linkRadial = function() {
        const t = ax(rx);
        return t.angle = t.x,
        delete t.x,
        t.radius = t.y,
        delete t.y,
        t
    }
    ,
    t.linkVertical = function() {
        return ax(ex)
    }
    ,
    t.local = Jn,
    t.map = function(t, n) {
        if ("function" != typeof t[Symbol.iterator])
            throw new TypeError("values is not iterable");
        if ("function" != typeof n)
            throw new TypeError("mapper is not a function");
        return Array.from(t, ((e,r)=>n(e, r, t)))
    }
    ,
    t.matcher = Wt,
    t.max = tt,
    t.maxIndex = nt,
    t.mean = function(t, n) {
        let e = 0
          , r = 0;
        if (void 0 === n)
            for (let n of t)
                null != n && (n = +n) >= n && (++e,
                r += n);
        else {
            let i = -1;
            for (let o of t)
                null != (o = n(o, ++i, t)) && (o = +o) >= o && (++e,
                r += o)
        }
        if (e)
            return r / e
    }
    ,
    t.median = function(t, n) {
        return ut(t, .5, n)
    }
    ,
    t.medianIndex = function(t, n) {
        return ft(t, .5, n)
    }
    ,
    t.merge = st,
    t.min = et,
    t.minIndex = rt,
    t.mode = function(t, n) {
        const e = new InternMap;
        if (void 0 === n)
            for (let n of t)
                null != n && n >= n && e.set(n, (e.get(n) || 0) + 1);
        else {
            let r = -1;
            for (let i of t)
                null != (i = n(i, ++r, t)) && i >= i && e.set(i, (e.get(i) || 0) + 1)
        }
        let r, i = 0;
        for (const [t,n] of e)
            n > i && (i = n,
            r = t);
        return r
    }
    ,
    t.namespace = Ot,
    t.namespaces = It,
    t.nice = K,
    t.now = Si,
    t.pack = function() {
        var t = null
          , n = 1
          , e = 1
          , r = ep;
        function i(i) {
            const o = up();
            return i.x = n / 2,
            i.y = e / 2,
            t ? i.eachBefore(wp(t)).eachAfter(Mp(r, .5, o)).eachBefore(Tp(1)) : i.eachBefore(wp(xp)).eachAfter(Mp(ep, 1, o)).eachAfter(Mp(r, i.r / Math.min(n, e), o)).eachBefore(Tp(Math.min(n, e) / (2 * i.r))),
            i
        }
        return i.radius = function(n) {
            return arguments.length ? (t = tp(n),
            i) : t
        }
        ,
        i.size = function(t) {
            return arguments.length ? (n = +t[0],
            e = +t[1],
            i) : [n, e]
        }
        ,
        i.padding = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : rp(+t),
            i) : r
        }
        ,
        i
    }
    ,
    t.packEnclose = function(t) {
        return cp(t, up())
    }
    ,
    t.packSiblings = function(t) {
        return mp(t, up()),
        t
    }
    ,
    t.pairs = function(t, n=lt) {
        const e = [];
        let r, i = !1;
        for (const o of t)
            i && e.push(n(r, o)),
            r = o,
            i = !0;
        return e
    }
    ,
    t.partition = function() {
        var t = 1
          , n = 1
          , e = 0
          , r = !1;
        function i(i) {
            var o = i.height + 1;
            return i.x0 = i.y0 = e,
            i.x1 = t,
            i.y1 = n / o,
            i.eachBefore(function(t, n) {
                return function(r) {
                    r.children && Sp(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
                    var i = r.x0
                      , o = r.y0
                      , a = r.x1 - e
                      , u = r.y1 - e;
                    a < i && (i = a = (i + a) / 2),
                    u < o && (o = u = (o + u) / 2),
                    r.x0 = i,
                    r.y0 = o,
                    r.x1 = a,
                    r.y1 = u
                }
            }(n, o)),
            r && i.eachBefore(Ap),
            i
        }
        return i.round = function(t) {
            return arguments.length ? (r = !!t,
            i) : r
        }
        ,
        i.size = function(e) {
            return arguments.length ? (t = +e[0],
            n = +e[1],
            i) : [t, n]
        }
        ,
        i.padding = function(t) {
            return arguments.length ? (e = +t,
            i) : e
        }
        ,
        i
    }
    ,
    t.path = Oa,
    t.pathRound = function(t=3) {
        return new Ia(+t)
    }
    ,
    t.permute = U,
    t.pie = function() {
        var t = Hm
          , n = jm
          , e = null
          , r = ym(0)
          , i = ym(Em)
          , o = ym(0);
        function a(a) {
            var u, c, f, s, l, h = (a = qm(a)).length, d = 0, p = new Array(h), g = new Array(h), y = +r.apply(this, arguments), v = Math.min(Em, Math.max(-Em, i.apply(this, arguments) - y)), _ = Math.min(Math.abs(v) / h, o.apply(this, arguments)), b = _ * (v < 0 ? -1 : 1);
            for (u = 0; u < h; ++u)
                (l = g[p[u] = u] = +t(a[u], u, a)) > 0 && (d += l);
            for (null != n ? p.sort((function(t, e) {
                return n(g[t], g[e])
            }
            )) : null != e && p.sort((function(t, n) {
                return e(a[t], a[n])
            }
            )),
            u = 0,
            f = d ? (v - h * b) / d : 0; u < h; ++u,
            y = s)
                c = p[u],
                s = y + ((l = g[c]) > 0 ? l * f : 0) + b,
                g[c] = {
                    data: a[c],
                    index: u,
                    value: l,
                    startAngle: y,
                    endAngle: s,
                    padAngle: _
                };
            return g
        }
        return a.value = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : ym(+n),
            a) : t
        }
        ,
        a.sortValues = function(t) {
            return arguments.length ? (n = t,
            e = null,
            a) : n
        }
        ,
        a.sort = function(t) {
            return arguments.length ? (e = t,
            n = null,
            a) : e
        }
        ,
        a.startAngle = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : ym(+t),
            a) : r
        }
        ,
        a.endAngle = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : ym(+t),
            a) : i
        }
        ,
        a.padAngle = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : ym(+t),
            a) : o
        }
        ,
        a
    }
    ,
    t.piecewise = pi,
    t.pointRadial = Qm,
    t.pointer = ee,
    t.pointers = function(t, n) {
        return t.target && (t = ne(t),
        void 0 === n && (n = t.currentTarget),
        t = t.touches || [t]),
        Array.from(t, (t=>ee(t, n)))
    }
    ,
    t.polygonArea = function(t) {
        for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r; )
            n = i,
            i = t[e],
            o += n[1] * i[0] - n[0] * i[1];
        return o / 2
    }
    ,
    t.polygonCentroid = function(t) {
        for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], c = 0; ++r < i; )
            n = u,
            u = t[r],
            c += e = n[0] * u[1] - u[0] * n[1],
            o += (n[0] + u[0]) * e,
            a += (n[1] + u[1]) * e;
        return [o / (c *= 3), a / c]
    }
    ,
    t.polygonContains = function(t, n) {
        for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l)
            e = (o = t[l])[0],
            (r = o[1]) > u != f > u && a < (c - e) * (u - r) / (f - r) + e && (s = !s),
            c = e,
            f = r;
        return s
    }
    ,
    t.polygonHull = function(t) {
        if ((e = t.length) < 3)
            return null;
        var n, e, r = new Array(e), i = new Array(e);
        for (n = 0; n < e; ++n)
            r[n] = [+t[n][0], +t[n][1], n];
        for (r.sort(Xp),
        n = 0; n < e; ++n)
            i[n] = [r[n][0], -r[n][1]];
        var o = Gp(r)
          , a = Gp(i)
          , u = a[0] === o[0]
          , c = a[a.length - 1] === o[o.length - 1]
          , f = [];
        for (n = o.length - 1; n >= 0; --n)
            f.push(t[r[o[n]][2]]);
        for (n = +u; n < a.length - c; ++n)
            f.push(t[r[a[n]][2]]);
        return f
    }
    ,
    t.polygonLength = function(t) {
        for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], c = 0; ++r < i; )
            n = a,
            e = u,
            n -= a = (o = t[r])[0],
            e -= u = o[1],
            c += Math.hypot(n, e);
        return c
    }
    ,
    t.precisionFixed = lf,
    t.precisionPrefix = hf,
    t.precisionRound = df,
    t.quadtree = Dc,
    t.quantile = ut,
    t.quantileIndex = ft,
    t.quantileSorted = ct,
    t.quantize = function(t, n) {
        for (var e = new Array(n), r = 0; r < n; ++r)
            e[r] = t(r / (n - 1));
        return e
    }
    ,
    t.quickselect = it,
    t.radialArea = Km,
    t.radialLine = Zm,
    t.randomBates = tg,
    t.randomBernoulli = rg,
    t.randomBeta = ag,
    t.randomBinomial = ug,
    t.randomCauchy = fg,
    t.randomExponential = ng,
    t.randomGamma = og,
    t.randomGeometric = ig,
    t.randomInt = Zp,
    t.randomIrwinHall = Jp,
    t.randomLcg = function(t=Math.random()) {
        let n = 0 | (0 <= t && t < 1 ? t / hg : Math.abs(t));
        return ()=>(n = 1664525 * n + 1013904223 | 0,
        hg * (n >>> 0))
    }
    ,
    t.randomLogNormal = Qp,
    t.randomLogistic = sg,
    t.randomNormal = Kp,
    t.randomPareto = eg,
    t.randomPoisson = lg,
    t.randomUniform = Wp,
    t.randomWeibull = cg,
    t.range = ht,
    t.rank = function(t, e=n) {
        if ("function" != typeof t[Symbol.iterator])
            throw new TypeError("values is not iterable");
        let r = Array.from(t);
        const i = new Float64Array(r.length);
        2 !== e.length && (r = r.map(e),
        e = n);
        const o = (t,n)=>e(r[t], r[n]);
        let a, u;
        return (t = Uint32Array.from(r, ((t,n)=>n))).sort(e === n ? (t,n)=>B(r[t], r[n]) : O(o)),
        t.forEach(((t,n)=>{
            const e = o(t, void 0 === a ? t : a);
            e >= 0 ? ((void 0 === a || e > 0) && (a = t,
            u = n),
            i[t] = u) : i[t] = NaN
        }
        )),
        i
    }
    ,
    t.reduce = function(t, n, e) {
        if ("function" != typeof n)
            throw new TypeError("reducer is not a function");
        const r = t[Symbol.iterator]();
        let i, o, a = -1;
        if (arguments.length < 3) {
            if (({done: i, value: e} = r.next()),
            i)
                return;
            ++a
        }
        for (; ({done: i, value: o} = r.next()),
        !i; )
            e = n(e, o, ++a, t);
        return e
    }
    ,
    t.reverse = function(t) {
        if ("function" != typeof t[Symbol.iterator])
            throw new TypeError("values is not iterable");
        return Array.from(t).reverse()
    }
    ,
    t.rgb = qe,
    t.ribbon = function() {
        return Za()
    }
    ,
    t.ribbonArrow = function() {
        return Za(Wa)
    }
    ,
    t.rollup = D,
    t.rollups = R,
    t.scaleBand = vg,
    t.scaleDiverging = function t() {
        var n = kg(j_()(xg));
        return n.copy = function() {
            return Y_(n, t())
        }
        ,
        pg.apply(n, arguments)
    }
    ,
    t.scaleDivergingLog = function t() {
        var n = qg(j_()).domain([.1, 1, 10]);
        return n.copy = function() {
            return Y_(n, t()).base(n.base())
        }
        ,
        pg.apply(n, arguments)
    }
    ,
    t.scaleDivergingPow = H_,
    t.scaleDivergingSqrt = function() {
        return H_.apply(null, arguments).exponent(.5)
    }
    ,
    t.scaleDivergingSymlog = function t() {
        var n = Og(j_());
        return n.copy = function() {
            return Y_(n, t()).constant(n.constant())
        }
        ,
        pg.apply(n, arguments)
    }
    ,
    t.scaleIdentity = function t(n) {
        var e;
        function r(t) {
            return null == t || isNaN(t = +t) ? e : t
        }
        return r.invert = r,
        r.domain = r.range = function(t) {
            return arguments.length ? (n = Array.from(t, bg),
            r) : n.slice()
        }
        ,
        r.unknown = function(t) {
            return arguments.length ? (e = t,
            r) : e
        }
        ,
        r.copy = function() {
            return t(n).unknown(e)
        }
        ,
        n = arguments.length ? Array.from(n, bg) : [0, 1],
        kg(r)
    }
    ,
    t.scaleImplicit = gg,
    t.scaleLinear = function t() {
        var n = Eg();
        return n.copy = function() {
            return Ag(n, t())
        }
        ,
        dg.apply(n, arguments),
        kg(n)
    }
    ,
    t.scaleLog = function t() {
        const n = qg(Sg()).domain([1, 10]);
        return n.copy = ()=>Ag(n, t()).base(n.base()),
        dg.apply(n, arguments),
        n
    }
    ,
    t.scaleOrdinal = yg,
    t.scalePoint = function() {
        return _g(vg.apply(null, arguments).paddingInner(1))
    }
    ,
    t.scalePow = Hg,
    t.scaleQuantile = function t() {
        var e, r = [], i = [], o = [];
        function a() {
            var t = 0
              , n = Math.max(1, i.length);
            for (o = new Array(n - 1); ++t < n; )
                o[t - 1] = ct(r, t / n);
            return u
        }
        function u(t) {
            return null == t || isNaN(t = +t) ? e : i[l(o, t)]
        }
        return u.invertExtent = function(t) {
            var n = i.indexOf(t);
            return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]]
        }
        ,
        u.domain = function(t) {
            if (!arguments.length)
                return r.slice();
            r = [];
            for (let n of t)
                null == n || isNaN(n = +n) || r.push(n);
            return r.sort(n),
            a()
        }
        ,
        u.range = function(t) {
            return arguments.length ? (i = Array.from(t),
            a()) : i.slice()
        }
        ,
        u.unknown = function(t) {
            return arguments.length ? (e = t,
            u) : e
        }
        ,
        u.quantiles = function() {
            return o.slice()
        }
        ,
        u.copy = function() {
            return t().domain(r).range(i).unknown(e)
        }
        ,
        dg.apply(u, arguments)
    }
    ,
    t.scaleQuantize = function t() {
        var n, e = 0, r = 1, i = 1, o = [.5], a = [0, 1];
        function u(t) {
            return null != t && t <= t ? a[l(o, t, 0, i)] : n
        }
        function c() {
            var t = -1;
            for (o = new Array(i); ++t < i; )
                o[t] = ((t + 1) * r - (t - i) * e) / (i + 1);
            return u
        }
        return u.domain = function(t) {
            return arguments.length ? ([e,r] = t,
            e = +e,
            r = +r,
            c()) : [e, r]
        }
        ,
        u.range = function(t) {
            return arguments.length ? (i = (a = Array.from(t)).length - 1,
            c()) : a.slice()
        }
        ,
        u.invertExtent = function(t) {
            var n = a.indexOf(t);
            return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
        }
        ,
        u.unknown = function(t) {
            return arguments.length ? (n = t,
            u) : u
        }
        ,
        u.thresholds = function() {
            return o.slice()
        }
        ,
        u.copy = function() {
            return t().domain([e, r]).range(a).unknown(n)
        }
        ,
        dg.apply(kg(u), arguments)
    }
    ,
    t.scaleRadial = function t() {
        var n, e = Eg(), r = [0, 1], i = !1;
        function o(t) {
            var r = function(t) {
                return Math.sign(t) * Math.sqrt(Math.abs(t))
            }(e(t));
            return isNaN(r) ? n : i ? Math.round(r) : r
        }
        return o.invert = function(t) {
            return e.invert(Xg(t))
        }
        ,
        o.domain = function(t) {
            return arguments.length ? (e.domain(t),
            o) : e.domain()
        }
        ,
        o.range = function(t) {
            return arguments.length ? (e.range((r = Array.from(t, bg)).map(Xg)),
            o) : r.slice()
        }
        ,
        o.rangeRound = function(t) {
            return o.range(t).round(!0)
        }
        ,
        o.round = function(t) {
            return arguments.length ? (i = !!t,
            o) : i
        }
        ,
        o.clamp = function(t) {
            return arguments.length ? (e.clamp(t),
            o) : e.clamp()
        }
        ,
        o.unknown = function(t) {
            return arguments.length ? (n = t,
            o) : n
        }
        ,
        o.copy = function() {
            return t(e.domain(), r).round(i).clamp(e.clamp()).unknown(n)
        }
        ,
        dg.apply(o, arguments),
        kg(o)
    }
    ,
    t.scaleSequential = function t() {
        var n = kg(B_()(xg));
        return n.copy = function() {
            return Y_(n, t())
        }
        ,
        pg.apply(n, arguments)
    }
    ,
    t.scaleSequentialLog = function t() {
        var n = qg(B_()).domain([1, 10]);
        return n.copy = function() {
            return Y_(n, t()).base(n.base())
        }
        ,
        pg.apply(n, arguments)
    }
    ,
    t.scaleSequentialPow = L_,
    t.scaleSequentialQuantile = function t() {
        var e = []
          , r = xg;
        function i(t) {
            if (null != t && !isNaN(t = +t))
                return r((l(e, t, 1) - 1) / (e.length - 1))
        }
        return i.domain = function(t) {
            if (!arguments.length)
                return e.slice();
            e = [];
            for (let n of t)
                null == n || isNaN(n = +n) || e.push(n);
            return e.sort(n),
            i
        }
        ,
        i.interpolator = function(t) {
            return arguments.length ? (r = t,
            i) : r
        }
        ,
        i.range = function() {
            return e.map(((t,n)=>r(n / (e.length - 1))))
        }
        ,
        i.quantiles = function(t) {
            return Array.from({
                length: t + 1
            }, ((n,r)=>ut(e, r / t)))
        }
        ,
        i.copy = function() {
            return t(r).domain(e)
        }
        ,
        pg.apply(i, arguments)
    }
    ,
    t.scaleSequentialSqrt = function() {
        return L_.apply(null, arguments).exponent(.5)
    }
    ,
    t.scaleSequentialSymlog = function t() {
        var n = Og(B_());
        return n.copy = function() {
            return Y_(n, t()).constant(n.constant())
        }
        ,
        pg.apply(n, arguments)
    }
    ,
    t.scaleSqrt = function() {
        return Hg.apply(null, arguments).exponent(.5)
    }
    ,
    t.scaleSymlog = function t() {
        var n = Og(Sg());
        return n.copy = function() {
            return Ag(n, t()).constant(n.constant())
        }
        ,
        dg.apply(n, arguments)
    }
    ,
    t.scaleThreshold = function t() {
        var n, e = [.5], r = [0, 1], i = 1;
        function o(t) {
            return null != t && t <= t ? r[l(e, t, 0, i)] : n
        }
        return o.domain = function(t) {
            return arguments.length ? (e = Array.from(t),
            i = Math.min(e.length, r.length - 1),
            o) : e.slice()
        }
        ,
        o.range = function(t) {
            return arguments.length ? (r = Array.from(t),
            i = Math.min(e.length, r.length - 1),
            o) : r.slice()
        }
        ,
        o.invertExtent = function(t) {
            var n = r.indexOf(t);
            return [e[n - 1], e[n]]
        }
        ,
        o.unknown = function(t) {
            return arguments.length ? (n = t,
            o) : n
        }
        ,
        o.copy = function() {
            return t().domain(e).range(r).unknown(n)
        }
        ,
        dg.apply(o, arguments)
    }
    ,
    t.scaleTime = function() {
        return dg.apply(O_(cv, fv, nv, Ky, wy, gy, ly, uy, oy, t.timeFormat).domain([new Date(2e3,0,1), new Date(2e3,0,2)]), arguments)
    }
    ,
    t.scaleUtc = function() {
        return dg.apply(O_(av, uv, rv, Jy, qy, vy, dy, fy, oy, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }
    ,
    t.scan = function(t, n) {
        const e = dt(t, n);
        return e < 0 ? void 0 : e
    }
    ,
    t.schemeAccent = V_,
    t.schemeBlues = Xb,
    t.schemeBrBG = ib,
    t.schemeBuGn = wb,
    t.schemeBuPu = Tb,
    t.schemeCategory10 = G_,
    t.schemeDark2 = W_,
    t.schemeGnBu = Sb,
    t.schemeGreens = Vb,
    t.schemeGreys = Zb,
    t.schemeOrRd = Nb,
    t.schemeOranges = em,
    t.schemePRGn = ab,
    t.schemePaired = Z_,
    t.schemePastel1 = K_,
    t.schemePastel2 = Q_,
    t.schemePiYG = cb,
    t.schemePuBu = zb,
    t.schemePuBuGn = Cb,
    t.schemePuOr = sb,
    t.schemePuRd = Db,
    t.schemePurples = Qb,
    t.schemeRdBu = hb,
    t.schemeRdGy = pb,
    t.schemeRdPu = Fb,
    t.schemeRdYlBu = yb,
    t.schemeRdYlGn = _b,
    t.schemeReds = tm,
    t.schemeSet1 = J_,
    t.schemeSet2 = tb,
    t.schemeSet3 = nb,
    t.schemeSpectral = mb,
    t.schemeTableau10 = eb,
    t.schemeYlGn = Ob,
    t.schemeYlGnBu = Ub,
    t.schemeYlOrBr = Yb,
    t.schemeYlOrRd = jb,
    t.select = Kn,
    t.selectAll = function(t) {
        return "string" == typeof t ? new Wn([document.querySelectorAll(t)],[document.documentElement]) : new Wn([Xt(t)],Vn)
    }
    ,
    t.selection = Zn,
    t.selector = Ht,
    t.selectorAll = Vt,
    t.shuffle = pt,
    t.shuffler = gt,
    t.some = function(t, n) {
        if ("function" != typeof n)
            throw new TypeError("test is not a function");
        let e = -1;
        for (const r of t)
            if (n(r, ++e, t))
                return !0;
        return !1
    }
    ,
    t.sort = I,
    t.stack = function() {
        var t = ym([])
          , n = dw
          , e = hw
          , r = pw;
        function i(i) {
            var o, a, u = Array.from(t.apply(this, arguments), gw), c = u.length, f = -1;
            for (const t of i)
                for (o = 0,
                ++f; o < c; ++o)
                    (u[o][f] = [0, +r(t, u[o].key, f, i)]).data = t;
            for (o = 0,
            a = qm(n(u)); o < c; ++o)
                u[a[o]].index = o;
            return e(u, a),
            u
        }
        return i.keys = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : ym(Array.from(n)),
            i) : t
        }
        ,
        i.value = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : ym(+t),
            i) : r
        }
        ,
        i.order = function(t) {
            return arguments.length ? (n = null == t ? dw : "function" == typeof t ? t : ym(Array.from(t)),
            i) : n
        }
        ,
        i.offset = function(t) {
            return arguments.length ? (e = null == t ? hw : t,
            i) : e
        }
        ,
        i
    }
    ,
    t.stackOffsetDiverging = function(t, n) {
        if ((u = t.length) > 0)
            for (var e, r, i, o, a, u, c = 0, f = t[n[0]].length; c < f; ++c)
                for (o = a = 0,
                e = 0; e < u; ++e)
                    (i = (r = t[n[e]][c])[1] - r[0]) > 0 ? (r[0] = o,
                    r[1] = o += i) : i < 0 ? (r[1] = a,
                    r[0] = a += i) : (r[0] = 0,
                    r[1] = i)
    }
    ,
    t.stackOffsetExpand = function(t, n) {
        if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
                for (i = e = 0; e < r; ++e)
                    i += t[e][o][1] || 0;
                if (i)
                    for (e = 0; e < r; ++e)
                        t[e][o][1] /= i
            }
            hw(t, n)
        }
    }
    ,
    t.stackOffsetNone = hw,
    t.stackOffsetSilhouette = function(t, n) {
        if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                for (var a = 0, u = 0; a < e; ++a)
                    u += t[a][r][1] || 0;
                i[r][1] += i[r][0] = -u / 2
            }
            hw(t, n)
        }
    }
    ,
    t.stackOffsetWiggle = function(t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, a = 1; a < r; ++a) {
                for (var u = 0, c = 0, f = 0; u < i; ++u) {
                    for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
                        var p = t[n[d]];
                        h += (p[a][1] || 0) - (p[a - 1][1] || 0)
                    }
                    c += l,
                    f += h * l
                }
                e[a - 1][1] += e[a - 1][0] = o,
                c && (o -= f / c)
            }
            e[a - 1][1] += e[a - 1][0] = o,
            hw(t, n)
        }
    }
    ,
    t.stackOrderAppearance = yw,
    t.stackOrderAscending = _w,
    t.stackOrderDescending = function(t) {
        return _w(t).reverse()
    }
    ,
    t.stackOrderInsideOut = function(t) {
        var n, e, r = t.length, i = t.map(bw), o = yw(t), a = 0, u = 0, c = [], f = [];
        for (n = 0; n < r; ++n)
            e = o[n],
            a < u ? (a += i[e],
            c.push(e)) : (u += i[e],
            f.push(e));
        return f.reverse().concat(c)
    }
    ,
    t.stackOrderNone = dw,
    t.stackOrderReverse = function(t) {
        return dw(t).reverse()
    }
    ,
    t.stratify = function() {
        var t, n = Cp, e = Pp;
        function r(r) {
            var i, o, a, u, c, f, s, l, h = Array.from(r), d = n, p = e, g = new Map;
            if (null != t) {
                const n = h.map(((n,e)=>function(t) {
                    t = `${t}`;
                    let n = t.length;
                    $p(t, n - 1) && !$p(t, n - 2) && (t = t.slice(0, -1));
                    return "/" === t[0] ? t : `/${t}`
                }(t(n, e, r))))
                  , e = n.map(zp)
                  , i = new Set(n).add("");
                for (const t of e)
                    i.has(t) || (i.add(t),
                    n.push(t),
                    e.push(zp(t)),
                    h.push(kp));
                d = (t,e)=>n[e],
                p = (t,n)=>e[n]
            }
            for (a = 0,
            i = h.length; a < i; ++a)
                o = h[a],
                f = h[a] = new Jd(o),
                null != (s = d(o, a, r)) && (s += "") && (l = f.id = s,
                g.set(l, g.has(l) ? Np : f)),
                null != (s = p(o, a, r)) && (s += "") && (f.parent = s);
            for (a = 0; a < i; ++a)
                if (s = (f = h[a]).parent) {
                    if (!(c = g.get(s)))
                        throw new Error("missing: " + s);
                    if (c === Np)
                        throw new Error("ambiguous: " + s);
                    c.children ? c.children.push(f) : c.children = [f],
                    f.parent = c
                } else {
                    if (u)
                        throw new Error("multiple roots");
                    u = f
                }
            if (!u)
                throw new Error("no root");
            if (null != t) {
                for (; u.data === kp && 1 === u.children.length; )
                    u = u.children[0],
                    --i;
                for (let t = h.length - 1; t >= 0 && (f = h[t]).data === kp; --t)
                    f.data = null
            }
            if (u.parent = Ep,
            u.eachBefore((function(t) {
                t.depth = t.parent.depth + 1,
                --i
            }
            )).eachBefore(Qd),
            u.parent = null,
            i > 0)
                throw new Error("cycle");
            return u
        }
        return r.id = function(t) {
            return arguments.length ? (n = tp(t),
            r) : n
        }
        ,
        r.parentId = function(t) {
            return arguments.length ? (e = tp(t),
            r) : e
        }
        ,
        r.path = function(n) {
            return arguments.length ? (t = tp(n),
            r) : t
        }
        ,
        r
    }
    ,
    t.style = bn,
    t.subset = function(t, n) {
        return bt(n, t)
    }
    ,
    t.sum = function(t, n) {
        let e = 0;
        if (void 0 === n)
            for (let n of t)
                (n = +n) && (e += n);
        else {
            let r = -1;
            for (let i of t)
                (i = +n(i, ++r, t)) && (e += i)
        }
        return e
    }
    ,
    t.superset = bt,
    t.svg = kc,
    t.symbol = function(t, n) {
        let e = null
          , r = km(i);
        function i() {
            let i;
            if (e || (e = i = r()),
            t.apply(this, arguments).draw(e, +n.apply(this, arguments)),
            i)
                return e = null,
                i + "" || null
        }
        return t = "function" == typeof t ? t : ym(t || fx),
        n = "function" == typeof n ? n : ym(void 0 === n ? 64 : +n),
        i.type = function(n) {
            return arguments.length ? (t = "function" == typeof n ? n : ym(n),
            i) : t
        }
        ,
        i.size = function(t) {
            return arguments.length ? (n = "function" == typeof t ? t : ym(+t),
            i) : n
        }
        ,
        i.context = function(t) {
            return arguments.length ? (e = null == t ? null : t,
            i) : e
        }
        ,
        i
    }
    ,
    t.symbolAsterisk = cx,
    t.symbolCircle = fx,
    t.symbolCross = sx,
    t.symbolDiamond = dx,
    t.symbolDiamond2 = px,
    t.symbolPlus = gx,
    t.symbolSquare = yx,
    t.symbolSquare2 = vx,
    t.symbolStar = xx,
    t.symbolTimes = Px,
    t.symbolTriangle = Mx,
    t.symbolTriangle2 = Ax,
    t.symbolWye = Cx,
    t.symbolX = Px,
    t.symbols = zx,
    t.symbolsFill = zx,
    t.symbolsStroke = $x,
    t.text = xc,
    t.thresholdFreedmanDiaconis = function(t, n, e) {
        const r = _(t)
          , i = ut(t, .75) - ut(t, .25);
        return r && i ? Math.ceil((e - n) / (2 * i * Math.pow(r, -1 / 3))) : 1
    }
    ,
    t.thresholdScott = function(t, n, e) {
        const r = _(t)
          , i = M(t);
        return r && i ? Math.ceil((e - n) * Math.cbrt(r) / (3.49 * i)) : 1
    }
    ,
    t.thresholdSturges = Q,
    t.tickFormat = Ng,
    t.tickIncrement = W,
    t.tickStep = Z,
    t.ticks = V,
    t.timeDay = gy,
    t.timeDays = yy,
    t.timeFormatDefaultLocale = z_,
    t.timeFormatLocale = dv,
    t.timeFriday = Ey,
    t.timeFridays = Dy,
    t.timeHour = ly,
    t.timeHours = hy,
    t.timeInterval = Wg,
    t.timeMillisecond = Zg,
    t.timeMilliseconds = Kg,
    t.timeMinute = uy,
    t.timeMinutes = cy,
    t.timeMonday = My,
    t.timeMondays = Cy,
    t.timeMonth = Ky,
    t.timeMonths = Qy,
    t.timeSaturday = Ny,
    t.timeSaturdays = Ry,
    t.timeSecond = oy,
    t.timeSeconds = ay,
    t.timeSunday = wy,
    t.timeSundays = ky,
    t.timeThursday = Sy,
    t.timeThursdays = $y,
    t.timeTickInterval = fv,
    t.timeTicks = cv,
    t.timeTuesday = Ty,
    t.timeTuesdays = Py,
    t.timeWednesday = Ay,
    t.timeWednesdays = zy,
    t.timeWeek = wy,
    t.timeWeeks = ky,
    t.timeYear = nv,
    t.timeYears = ev,
    t.timeout = Di,
    t.timer = ki,
    t.timerFlush = Ci,
    t.transition = yo,
    t.transpose = yt,
    t.tree = function() {
        var t = Dp
          , n = 1
          , e = 1
          , r = null;
        function i(i) {
            var c = function(t) {
                for (var n, e, r, i, o, a = new Ip(t,0), u = [a]; n = u.pop(); )
                    if (r = n._.children)
                        for (n.children = new Array(o = r.length),
                        i = o - 1; i >= 0; --i)
                            u.push(e = n.children[i] = new Ip(r[i],i)),
                            e.parent = n;
                return (a.parent = new Ip(null,0)).children = [a],
                a
            }(i);
            if (c.eachAfter(o),
            c.parent.m = -c.z,
            c.eachBefore(a),
            r)
                i.eachBefore(u);
            else {
                var f = i
                  , s = i
                  , l = i;
                i.eachBefore((function(t) {
                    t.x < f.x && (f = t),
                    t.x > s.x && (s = t),
                    t.depth > l.depth && (l = t)
                }
                ));
                var h = f === s ? 1 : t(f, s) / 2
                  , d = h - f.x
                  , p = n / (s.x + h + d)
                  , g = e / (l.depth || 1);
                i.eachBefore((function(t) {
                    t.x = (t.x + d) * p,
                    t.y = t.depth * g
                }
                ))
            }
            return i
        }
        function o(n) {
            var e = n.children
              , r = n.parent.children
              , i = n.i ? r[n.i - 1] : null;
            if (e) {
                !function(t) {
                    for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0; )
                        (n = i[o]).z += e,
                        n.m += e,
                        e += n.s + (r += n.c)
                }(n);
                var o = (e[0].z + e[e.length - 1].z) / 2;
                i ? (n.z = i.z + t(n._, i._),
                n.m = n.z - o) : n.z = o
            } else
                i && (n.z = i.z + t(n._, i._));
            n.parent.A = function(n, e, r) {
                if (e) {
                    for (var i, o = n, a = n, u = e, c = o.parent.children[0], f = o.m, s = a.m, l = u.m, h = c.m; u = Fp(u),
                    o = Rp(o),
                    u && o; )
                        c = Rp(c),
                        (a = Fp(a)).a = n,
                        (i = u.z + l - o.z - f + t(u._, o._)) > 0 && (qp(Up(u, n, r), n, i),
                        f += i,
                        s += i),
                        l += u.m,
                        f += o.m,
                        h += c.m,
                        s += a.m;
                    u && !Fp(a) && (a.t = u,
                    a.m += l - s),
                    o && !Rp(c) && (c.t = o,
                    c.m += f - h,
                    r = n)
                }
                return r
            }(n, i, n.parent.A || r[0])
        }
        function a(t) {
            t._.x = t.z + t.parent.m,
            t.m += t.parent.m
        }
        function u(t) {
            t.x *= n,
            t.y = t.depth * e
        }
        return i.separation = function(n) {
            return arguments.length ? (t = n,
            i) : t
        }
        ,
        i.size = function(t) {
            return arguments.length ? (r = !1,
            n = +t[0],
            e = +t[1],
            i) : r ? null : [n, e]
        }
        ,
        i.nodeSize = function(t) {
            return arguments.length ? (r = !0,
            n = +t[0],
            e = +t[1],
            i) : r ? [n, e] : null
        }
        ,
        i
    }
    ,
    t.treemap = function() {
        var t = Lp
          , n = !1
          , e = 1
          , r = 1
          , i = [0]
          , o = ep
          , a = ep
          , u = ep
          , c = ep
          , f = ep;
        function s(t) {
            return t.x0 = t.y0 = 0,
            t.x1 = e,
            t.y1 = r,
            t.eachBefore(l),
            i = [0],
            n && t.eachBefore(Ap),
            t
        }
        function l(n) {
            var e = i[n.depth]
              , r = n.x0 + e
              , s = n.y0 + e
              , l = n.x1 - e
              , h = n.y1 - e;
            l < r && (r = l = (r + l) / 2),
            h < s && (s = h = (s + h) / 2),
            n.x0 = r,
            n.y0 = s,
            n.x1 = l,
            n.y1 = h,
            n.children && (e = i[n.depth + 1] = o(n) / 2,
            r += f(n) - e,
            s += a(n) - e,
            (l -= u(n) - e) < r && (r = l = (r + l) / 2),
            (h -= c(n) - e) < s && (s = h = (s + h) / 2),
            t(n, r, s, l, h))
        }
        return s.round = function(t) {
            return arguments.length ? (n = !!t,
            s) : n
        }
        ,
        s.size = function(t) {
            return arguments.length ? (e = +t[0],
            r = +t[1],
            s) : [e, r]
        }
        ,
        s.tile = function(n) {
            return arguments.length ? (t = np(n),
            s) : t
        }
        ,
        s.padding = function(t) {
            return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
        }
        ,
        s.paddingInner = function(t) {
            return arguments.length ? (o = "function" == typeof t ? t : rp(+t),
            s) : o
        }
        ,
        s.paddingOuter = function(t) {
            return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
        }
        ,
        s.paddingTop = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : rp(+t),
            s) : a
        }
        ,
        s.paddingRight = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t : rp(+t),
            s) : u
        }
        ,
        s.paddingBottom = function(t) {
            return arguments.length ? (c = "function" == typeof t ? t : rp(+t),
            s) : c
        }
        ,
        s.paddingLeft = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : rp(+t),
            s) : f
        }
        ,
        s
    }
    ,
    t.treemapBinary = function(t, n, e, r, i) {
        var o, a, u = t.children, c = u.length, f = new Array(c + 1);
        for (f[0] = a = o = 0; o < c; ++o)
            f[o + 1] = a += u[o].value;
        !function t(n, e, r, i, o, a, c) {
            if (n >= e - 1) {
                var s = u[n];
                return s.x0 = i,
                s.y0 = o,
                s.x1 = a,
                void (s.y1 = c)
            }
            var l = f[n]
              , h = r / 2 + l
              , d = n + 1
              , p = e - 1;
            for (; d < p; ) {
                var g = d + p >>> 1;
                f[g] < h ? d = g + 1 : p = g
            }
            h - f[d - 1] < f[d] - h && n + 1 < d && --d;
            var y = f[d] - l
              , v = r - y;
            if (a - i > c - o) {
                var _ = r ? (i * v + a * y) / r : a;
                t(n, d, y, i, o, _, c),
                t(d, e, v, _, o, a, c)
            } else {
                var b = r ? (o * v + c * y) / r : c;
                t(n, d, y, i, o, a, b),
                t(d, e, v, i, b, a, c)
            }
        }(0, c, t.value, n, e, r, i)
    }
    ,
    t.treemapDice = Sp,
    t.treemapResquarify = jp,
    t.treemapSlice = Op,
    t.treemapSliceDice = function(t, n, e, r, i) {
        (1 & t.depth ? Op : Sp)(t, n, e, r, i)
    }
    ,
    t.treemapSquarify = Lp,
    t.tsv = Tc,
    t.tsvFormat = hc,
    t.tsvFormatBody = dc,
    t.tsvFormatRow = gc,
    t.tsvFormatRows = pc,
    t.tsvFormatValue = yc,
    t.tsvParse = sc,
    t.tsvParseRows = lc,
    t.union = function(...t) {
        const n = new InternSet;
        for (const e of t)
            for (const t of e)
                n.add(t);
        return n
    }
    ,
    t.unixDay = by,
    t.unixDays = my,
    t.utcDay = vy,
    t.utcDays = _y,
    t.utcFriday = Yy,
    t.utcFridays = Wy,
    t.utcHour = dy,
    t.utcHours = py,
    t.utcMillisecond = Zg,
    t.utcMilliseconds = Kg,
    t.utcMinute = fy,
    t.utcMinutes = sy,
    t.utcMonday = Uy,
    t.utcMondays = Hy,
    t.utcMonth = Jy,
    t.utcMonths = tv,
    t.utcSaturday = Ly,
    t.utcSaturdays = Zy,
    t.utcSecond = oy,
    t.utcSeconds = ay,
    t.utcSunday = qy,
    t.utcSundays = jy,
    t.utcThursday = By,
    t.utcThursdays = Vy,
    t.utcTickInterval = uv,
    t.utcTicks = av,
    t.utcTuesday = Iy,
    t.utcTuesdays = Xy,
    t.utcWednesday = Oy,
    t.utcWednesdays = Gy,
    t.utcWeek = qy,
    t.utcWeeks = jy,
    t.utcYear = rv,
    t.utcYears = iv,
    t.variance = w,
    t.version = "7.8.4",
    t.window = gn,
    t.xml = Ec,
    t.zip = function() {
        return yt(arguments)
    }
    ,
    t.zoom = function() {
        var t, n, e, r = Ew, i = Nw, o = zw, a = Cw, u = Pw, c = [0, 1 / 0], f = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, l = ii, h = Dt("start", "zoom", "end"), d = 500, p = 150, g = 0, y = 10;
        function v(t) {
            t.property("__zoom", kw).on("wheel.zoom", T, {
                passive: !1
            }).on("mousedown.zoom", A).on("dblclick.zoom", S).filter(u).on("touchstart.zoom", E).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }
        function _(t, n) {
            return (n = Math.max(c[0], Math.min(c[1], n))) === t.k ? t : new ww(n,t.x,t.y)
        }
        function b(t, n, e) {
            var r = n[0] - e[0] * t.k
              , i = n[1] - e[1] * t.k;
            return r === t.x && i === t.y ? t : new ww(t.k,r,i)
        }
        function m(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
        }
        function x(t, n, e, r) {
            t.on("start.zoom", (function() {
                w(this, arguments).event(r).start()
            }
            )).on("interrupt.zoom end.zoom", (function() {
                w(this, arguments).event(r).end()
            }
            )).tween("zoom", (function() {
                var t = this
                  , o = arguments
                  , a = w(t, o).event(r)
                  , u = i.apply(t, o)
                  , c = null == e ? m(u) : "function" == typeof e ? e.apply(t, o) : e
                  , f = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1])
                  , s = t.__zoom
                  , h = "function" == typeof n ? n.apply(t, o) : n
                  , d = l(s.invert(c).concat(f / s.k), h.invert(c).concat(f / h.k));
                return function(t) {
                    if (1 === t)
                        t = h;
                    else {
                        var n = d(t)
                          , e = f / n[2];
                        t = new ww(e,c[0] - n[0] * e,c[1] - n[1] * e)
                    }
                    a.zoom(null, t)
                }
            }
            ))
        }
        function w(t, n, e) {
            return !e && t.__zooming || new M(t,n)
        }
        function M(t, n) {
            this.that = t,
            this.args = n,
            this.active = 0,
            this.sourceEvent = null,
            this.extent = i.apply(t, n),
            this.taps = 0
        }
        function T(t, ...n) {
            if (r.apply(this, arguments)) {
                var e = w(this, n).event(t)
                  , i = this.__zoom
                  , u = Math.max(c[0], Math.min(c[1], i.k * Math.pow(2, a.apply(this, arguments))))
                  , s = ee(t);
                if (e.wheel)
                    e.mouse[0][0] === s[0] && e.mouse[0][1] === s[1] || (e.mouse[1] = i.invert(e.mouse[0] = s)),
                    clearTimeout(e.wheel);
                else {
                    if (i.k === u)
                        return;
                    e.mouse = [s, i.invert(s)],
                    Vi(this),
                    e.start()
                }
                Sw(t),
                e.wheel = setTimeout((function() {
                    e.wheel = null,
                    e.end()
                }
                ), p),
                e.zoom("mouse", o(b(_(i, u), e.mouse[0], e.mouse[1]), e.extent, f))
            }
        }
        function A(t, ...n) {
            if (!e && r.apply(this, arguments)) {
                var i = t.currentTarget
                  , a = w(this, n, !0).event(t)
                  , u = Kn(t.view).on("mousemove.zoom", (function(t) {
                    if (Sw(t),
                    !a.moved) {
                        var n = t.clientX - s
                          , e = t.clientY - l;
                        a.moved = n * n + e * e > g
                    }
                    a.event(t).zoom("mouse", o(b(a.that.__zoom, a.mouse[0] = ee(t, i), a.mouse[1]), a.extent, f))
                }
                ), !0).on("mouseup.zoom", (function(t) {
                    u.on("mousemove.zoom mouseup.zoom", null),
                    ce(t.view, a.moved),
                    Sw(t),
                    a.event(t).end()
                }
                ), !0)
                  , c = ee(t, i)
                  , s = t.clientX
                  , l = t.clientY;
                ue(t.view),
                Aw(t),
                a.mouse = [c, this.__zoom.invert(c)],
                Vi(this),
                a.start()
            }
        }
        function S(t, ...n) {
            if (r.apply(this, arguments)) {
                var e = this.__zoom
                  , a = ee(t.changedTouches ? t.changedTouches[0] : t, this)
                  , u = e.invert(a)
                  , c = e.k * (t.shiftKey ? .5 : 2)
                  , l = o(b(_(e, c), a, u), i.apply(this, n), f);
                Sw(t),
                s > 0 ? Kn(this).transition().duration(s).call(x, l, a, t) : Kn(this).call(v.transform, l, a, t)
            }
        }
        function E(e, ...i) {
            if (r.apply(this, arguments)) {
                var o, a, u, c, f = e.touches, s = f.length, l = w(this, i, e.changedTouches.length === s).event(e);
                for (Aw(e),
                a = 0; a < s; ++a)
                    c = [c = ee(u = f[a], this), this.__zoom.invert(c), u.identifier],
                    l.touch0 ? l.touch1 || l.touch0[2] === c[2] || (l.touch1 = c,
                    l.taps = 0) : (l.touch0 = c,
                    o = !0,
                    l.taps = 1 + !!t);
                t && (t = clearTimeout(t)),
                o && (l.taps < 2 && (n = c[0],
                t = setTimeout((function() {
                    t = null
                }
                ), d)),
                Vi(this),
                l.start())
            }
        }
        function N(t, ...n) {
            if (this.__zooming) {
                var e, r, i, a, u = w(this, n).event(t), c = t.changedTouches, s = c.length;
                for (Sw(t),
                e = 0; e < s; ++e)
                    i = ee(r = c[e], this),
                    u.touch0 && u.touch0[2] === r.identifier ? u.touch0[0] = i : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i);
                if (r = u.that.__zoom,
                u.touch1) {
                    var l = u.touch0[0]
                      , h = u.touch0[1]
                      , d = u.touch1[0]
                      , p = u.touch1[1]
                      , g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g
                      , y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y;
                    r = _(r, Math.sqrt(g / y)),
                    i = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2],
                    a = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]
                } else {
                    if (!u.touch0)
                        return;
                    i = u.touch0[0],
                    a = u.touch0[1]
                }
                u.zoom("touch", o(b(r, i, a), u.extent, f))
            }
        }
        function k(t, ...r) {
            if (this.__zooming) {
                var i, o, a = w(this, r).event(t), u = t.changedTouches, c = u.length;
                for (Aw(t),
                e && clearTimeout(e),
                e = setTimeout((function() {
                    e = null
                }
                ), d),
                i = 0; i < c; ++i)
                    o = u[i],
                    a.touch0 && a.touch0[2] === o.identifier ? delete a.touch0 : a.touch1 && a.touch1[2] === o.identifier && delete a.touch1;
                if (a.touch1 && !a.touch0 && (a.touch0 = a.touch1,
                delete a.touch1),
                a.touch0)
                    a.touch0[1] = this.__zoom.invert(a.touch0[0]);
                else if (a.end(),
                2 === a.taps && (o = ee(o, this),
                Math.hypot(n[0] - o[0], n[1] - o[1]) < y)) {
                    var f = Kn(this).on("dblclick.zoom");
                    f && f.apply(this, arguments)
                }
            }
        }
        return v.transform = function(t, n, e, r) {
            var i = t.selection ? t.selection() : t;
            i.property("__zoom", kw),
            t !== i ? x(t, n, e, r) : i.interrupt().each((function() {
                w(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
            }
            ))
        }
        ,
        v.scaleBy = function(t, n, e, r) {
            v.scaleTo(t, (function() {
                return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
            }
            ), e, r)
        }
        ,
        v.scaleTo = function(t, n, e, r) {
            v.transform(t, (function() {
                var t = i.apply(this, arguments)
                  , r = this.__zoom
                  , a = null == e ? m(t) : "function" == typeof e ? e.apply(this, arguments) : e
                  , u = r.invert(a)
                  , c = "function" == typeof n ? n.apply(this, arguments) : n;
                return o(b(_(r, c), a, u), t, f)
            }
            ), e, r)
        }
        ,
        v.translateBy = function(t, n, e, r) {
            v.transform(t, (function() {
                return o(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), i.apply(this, arguments), f)
            }
            ), null, r)
        }
        ,
        v.translateTo = function(t, n, e, r, a) {
            v.transform(t, (function() {
                var t = i.apply(this, arguments)
                  , a = this.__zoom
                  , u = null == r ? m(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                return o(Mw.translate(u[0], u[1]).scale(a.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, f)
            }
            ), r, a)
        }
        ,
        M.prototype = {
            event: function(t) {
                return t && (this.sourceEvent = t),
                this
            },
            start: function() {
                return 1 == ++this.active && (this.that.__zooming = this,
                this.emit("start")),
                this
            },
            zoom: function(t, n) {
                return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                this.that.__zoom = n,
                this.emit("zoom"),
                this
            },
            end: function() {
                return 0 == --this.active && (delete this.that.__zooming,
                this.emit("end")),
                this
            },
            emit: function(t) {
                var n = Kn(this.that).datum();
                h.call(t, this.that, new xw(t,{
                    sourceEvent: this.sourceEvent,
                    target: v,
                    type: t,
                    transform: this.that.__zoom,
                    dispatch: h
                }), n)
            }
        },
        v.wheelDelta = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : mw(+t),
            v) : a
        }
        ,
        v.filter = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : mw(!!t),
            v) : r
        }
        ,
        v.touchable = function(t) {
            return arguments.length ? (u = "function" == typeof t ? t : mw(!!t),
            v) : u
        }
        ,
        v.extent = function(t) {
            return arguments.length ? (i = "function" == typeof t ? t : mw([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]),
            v) : i
        }
        ,
        v.scaleExtent = function(t) {
            return arguments.length ? (c[0] = +t[0],
            c[1] = +t[1],
            v) : [c[0], c[1]]
        }
        ,
        v.translateExtent = function(t) {
            return arguments.length ? (f[0][0] = +t[0][0],
            f[1][0] = +t[1][0],
            f[0][1] = +t[0][1],
            f[1][1] = +t[1][1],
            v) : [[f[0][0], f[0][1]], [f[1][0], f[1][1]]]
        }
        ,
        v.constrain = function(t) {
            return arguments.length ? (o = t,
            v) : o
        }
        ,
        v.duration = function(t) {
            return arguments.length ? (s = +t,
            v) : s
        }
        ,
        v.interpolate = function(t) {
            return arguments.length ? (l = t,
            v) : l
        }
        ,
        v.on = function() {
            var t = h.on.apply(h, arguments);
            return t === h ? v : t
        }
        ,
        v.clickDistance = function(t) {
            return arguments.length ? (g = (t = +t) * t,
            v) : Math.sqrt(g)
        }
        ,
        v.tapDistance = function(t) {
            return arguments.length ? (y = +t,
            v) : y
        }
        ,
        v
    }
    ,
    t.zoomIdentity = Mw,
    t.zoomTransform = Tw
}
));

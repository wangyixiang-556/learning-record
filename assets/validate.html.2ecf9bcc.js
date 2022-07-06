import{_ as s,f as n}from"./app.165d7d0e.js";const a={},l=n(`<h1 id="\u6821\u9A8C\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u6821\u9A8C\u76F8\u5173" aria-hidden="true">#</a> \u6821\u9A8C\u76F8\u5173</h1><h2 id="\u624B\u673A\u53F7\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u624B\u673A\u53F7\u9A8C\u8BC1" aria-hidden="true">#</a> \u624B\u673A\u53F7\u9A8C\u8BC1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">validateMobile</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">phone</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D16969;"> /</span><span style="color:#DCDCAA;">^</span><span style="color:#D16969;">1</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">3456789</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{9}</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">test</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">phone</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u90AE\u7BB1\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u90AE\u7BB1\u9A8C\u8BC1" aria-hidden="true">#</a> \u90AE\u7BB1\u9A8C\u8BC1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">validateEmail</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">email</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">reg</span><span style="color:#D4D4D4;"> = </span><span style="color:#D16969;">/</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">(([^</span><span style="color:#D16969;">&lt;&gt;()</span><span style="color:#D7BA7D;">\\[\\]\\\\</span><span style="color:#D16969;">.,;:\\s@&quot;</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">(</span><span style="color:#D7BA7D;">\\.</span><span style="color:#CE9178;">[^</span><span style="color:#D16969;">&lt;&gt;()</span><span style="color:#D7BA7D;">\\[\\]\\\\</span><span style="color:#D16969;">.,;:\\s@&quot;</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">*</span><span style="color:#CE9178;">)</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">&quot;.</span><span style="color:#D7BA7D;">+</span><span style="color:#D16969;">&quot;</span><span style="color:#CE9178;">))</span><span style="color:#D16969;">@</span><span style="color:#CE9178;">((</span><span style="color:#D7BA7D;">\\[</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{1,3}\\.</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{1,3}\\.</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{1,3}\\.</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{1,3}\\]</span><span style="color:#CE9178;">)</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">(([</span><span style="color:#D16969;">a-zA-Z\\-0-9</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">+\\.</span><span style="color:#CE9178;">)</span><span style="color:#D7BA7D;">+</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">a-zA-Z</span><span style="color:#CE9178;">]</span><span style="color:#D7BA7D;">{2,}</span><span style="color:#CE9178;">))</span><span style="color:#DCDCAA;">$</span><span style="color:#D16969;">/</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">reg</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">test</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">email</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u8EAB\u4EFD\u8BC1\u53F7\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8EAB\u4EFD\u8BC1\u53F7\u9A8C\u8BC1" aria-hidden="true">#</a> \u8EAB\u4EFD\u8BC1\u53F7\u9A8C\u8BC1</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">validatePersonId</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">card</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">reg</span><span style="color:#D4D4D4;"> = </span><span style="color:#D16969;">/</span><span style="color:#CE9178;">(</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{5}</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">18</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">19</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">([</span><span style="color:#D16969;">23</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#CE9178;">))</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{2}</span><span style="color:#CE9178;">((</span><span style="color:#D16969;">0</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">])</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">10</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">11</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">12</span><span style="color:#CE9178;">))(([</span><span style="color:#D16969;">0-2</span><span style="color:#CE9178;">][</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">])</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">10</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">20</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">30</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">31</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{3}</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">0-9Xx</span><span style="color:#CE9178;">]</span><span style="color:#DCDCAA;">$</span><span style="color:#CE9178;">)</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">(</span><span style="color:#DCDCAA;">^</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{5}</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{2}</span><span style="color:#CE9178;">((</span><span style="color:#D16969;">0</span><span style="color:#CE9178;">[</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">])</span><span style="color:#DCDCAA;">|</span><span style="color:#CE9178;">(</span><span style="color:#D16969;">10</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">11</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">12</span><span style="color:#CE9178;">))(([</span><span style="color:#D16969;">0-2</span><span style="color:#CE9178;">][</span><span style="color:#D16969;">1-9</span><span style="color:#CE9178;">])</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">10</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">20</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">30</span><span style="color:#DCDCAA;">|</span><span style="color:#D16969;">31</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">\\d</span><span style="color:#D7BA7D;">{2}</span><span style="color:#DCDCAA;">$</span><span style="color:#CE9178;">)</span><span style="color:#D16969;">/</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">reg</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">test</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">card</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="aes\u52A0\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#aes\u52A0\u89E3\u5BC6" aria-hidden="true">#</a> AES\u52A0\u89E3\u5BC6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">CryptoJS</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">require</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;crypto-js&#39;</span><span style="color:#D4D4D4;">);  </span><span style="color:#6A9955;">//\u5B89\u88C5\u5E76\u5F15\u7528AES\u6E90\u7801js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">key</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">enc</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Utf8</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">parse</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;1234123412ABCDEF&quot;</span><span style="color:#D4D4D4;">);  </span><span style="color:#6A9955;">//\u5341\u516D\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u4F5C\u4E3A\u5BC6\u94A5</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">iv</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">enc</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Utf8</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">parse</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;ABCDEF1234123412&#39;</span><span style="color:#D4D4D4;">);   </span><span style="color:#6A9955;">//\u5341\u516D\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u4F5C\u4E3A\u5BC6\u94A5\u504F\u79FB\u91CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//\u89E3\u5BC6\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Decrypt</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">word</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">encryptedHexStr</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">enc</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Hex</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">parse</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">word</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">srcs</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">enc</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Base64</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">stringify</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">encryptedHexStr</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">decrypt</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">AES</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">decrypt</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">srcs</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">iv:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">iv</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">mode:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">mode</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">CBC</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">padding:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pad</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Pkcs7</span><span style="color:#D4D4D4;"> });</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">decryptedStr</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">decrypt</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">toString</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">enc</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Utf8</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">decryptedStr</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">toString</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//\u52A0\u5BC6\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Encrypt</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">word</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">srcs</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">enc</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Utf8</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">parse</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">word</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">let</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">encrypted</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">AES</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">encrypt</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">srcs</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">key</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">iv:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">iv</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">mode:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">mode</span><span style="color:#D4D4D4;">.</span><span style="color:#4FC1FF;">CBC</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">padding:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CryptoJS</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pad</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Pkcs7</span><span style="color:#D4D4D4;"> });</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">encrypted</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ciphertext</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">toString</span><span style="color:#D4D4D4;">().</span><span style="color:#DCDCAA;">toUpperCase</span><span style="color:#D4D4D4;">();</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5305\u542B\u4E2D\u6587" tabindex="-1"><a class="header-anchor" href="#\u5305\u542B\u4E2D\u6587" aria-hidden="true">#</a> \u5305\u542B\u4E2D\u6587</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">function</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">validateCN</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D16969;"> /</span><span style="color:#CE9178;">[</span><span style="color:#569CD6;">\\u4e00</span><span style="color:#D16969;">-</span><span style="color:#569CD6;">\\u9fa5</span><span style="color:#CE9178;">]</span><span style="color:#D16969;">/</span><span style="color:#569CD6;">g</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">test</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">str</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,11);function p(o,e){return l}var r=s(a,[["render",p]]);export{r as default};

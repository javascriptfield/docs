import{_ as e,r as t,o as i,c,a as s,b as o,e as n,d}from"./app.b5ebdf5a.js";const l={},p=s("h1",{id:"git-\u5206\u652F\u7684\u65B0\u5EFA\u4E0E\u5408\u5E76-\u5206\u652F\u64CD\u4F5C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git-\u5206\u652F\u7684\u65B0\u5EFA\u4E0E\u5408\u5E76-\u5206\u652F\u64CD\u4F5C","aria-hidden":"true"},"#"),n(" Git \u5206\u652F\u7684\u65B0\u5EFA\u4E0E\u5408\u5E76-\u5206\u652F\u64CD\u4F5C")],-1),r=n("\u6587\u6863\uFF1A"),u={href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6",target:"_blank",rel:"noopener noreferrer"},h=n("Git \u5206\u652F - \u5206\u652F\u7684\u65B0\u5EFA\u4E0E\u5408\u5E76"),m=d(`<h3 id="\u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362" aria-hidden="true">#</a> \u521B\u5EFA\u5206\u652F\u5E76\u5207\u6362</h3><p>\u6B64\u65F6\u6709\u4E00\u4E2A\u9700\u6C42\u9700\u8981\u5728\u65B0\u7684\u5206\u652F<code>iss53</code>\u4E0A\u5DE5\u4F5C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -b iss53  <span class="token comment"># b\u8868\u793Abranch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B83\u662F\u4E0B\u9762\u4E24\u6761\u547D\u4EE4\u7684\u7B80\u5199\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch iss53
$ <span class="token function">git</span> checkout iss53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u6362\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5206\u652F" aria-hidden="true">#</a> \u5207\u6362\u5206\u652F</h3><p>\u7A81\u7136\u6709\u4E00\u4E2A\u7D27\u6025\u95EE\u9898\u8981\u89E3\u51B3\uFF0C\u9700\u8981\u5728\u539F\u6765\u7684<code>master</code>\u5206\u652F\u8FDB\u884C\u4FEE\u590D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u5207\u6362\u5230<code>master</code>\u4E4B\u524D\uFF0C\u9700\u8981<code>iss53</code>\u5206\u652F\u4FDD\u6301\u597D\u4E00\u4E2A\u5E72\u51C0\u7684\u72B6\u6001\uFF08\u4FEE\u6539\u90FD\u5DF2\u63D0\u4EA4\uFF09\u3002</p><p><strong>\u6CE8\u610F\uFF1A\u5207\u6362\u5206\u652F Git \u4F1A\u91CD\u7F6E\u4F60\u7684\u5DE5\u4F5C\u76EE\u5F55\u3002</strong></p><blockquote><p><code>checkout</code> \u4E2D\u6587\u542B\u4E49 \u201C\u68C0\u51FA\u201D\uFF0C<code>checkout &lt;branch&gt;</code> \u68C0\u51FA\u5206\u652F =&gt; \u68C0\u51FA\u6307\u5B9A\u5206\u652F\u7684\u4EE3\u7801 =&gt; \u91CD\u7F6E\u5DE5\u4F5C\u76EE\u5F55\u5E76\u5207\u6362\u5206\u652F\u3002</p></blockquote><p>\u63A5\u4E0B\u6765\uFF0C\u4F60\u8981\u4FEE\u590D\u8FD9\u4E2A\u7D27\u6025\u95EE\u9898\u3002 \u5EFA\u7ACB\u4E00\u4E2A <code>hotfix</code> \u5206\u652F\uFF0C\u5728\u8BE5\u5206\u652F\u4E0A\u5DE5\u4F5C\u76F4\u5230\u95EE\u9898\u89E3\u51B3\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -b hotfix

<span class="token comment"># \u4E2D\u95F4\u8FC7\u7A0B\u5728hotfix\u4E0A\u4FEE\u6539\u4E86\u4EE3\u7801\u5E76\u63D0\u4EA4</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">&gt;</span> ./hotfix.txt
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -m <span class="token string">&#39;fixed&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master <span class="token comment"># \u9996\u5148\u5207\u56DEmaster\u5206\u652F</span>
$ <span class="token function">git</span> merge hotfix <span class="token comment"># \u628A hotfix \u5206\u652F\u5408\u5E76\u8FC7\u6765</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch -d hotfix <span class="token comment"># d\u8868\u793Adelete</span>

<span class="token comment"># \u7136\u540E\u5207\u56DEiss53\u7EE7\u7EED\u5DE5\u4F5C</span>
$ <span class="token function">git</span> checkout iss53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u5220\u9664\u5206\u652F\u662F\u5728 <code>branch</code> \u547D\u4EE4\u4E0A</p><h3 id="\u591A\u6B21\u63D0\u4EA4\u4E4B\u540E\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u591A\u6B21\u63D0\u4EA4\u4E4B\u540E\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u591A\u6B21\u63D0\u4EA4\u4E4B\u540E\u5408\u5E76\u5206\u652F</h3><p>\u5047\u8BBE\u4F60\u5DF2\u7ECF\u4FEE\u6B63\u4E86 #53 \u95EE\u9898\uFF0C\u6253\u7B97\u5408\u5E76\u5230<code>master</code>\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> merga iss53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u770B\u4F3C\u548C\u4E4B\u524D\u7684\u5408\u5E76\u533A\u522B\u4E0D\u5927\u3002\u6B64\u65F6\u4F60\u7684\u5F00\u53D1\u5386\u53F2\u4ECE\u4E00\u4E2A\u66F4\u65E9\u7684\u5730\u65B9\u5F00\u59CB\u5206\u53C9\u5F00\u6765\uFF08diverged\uFF09\u3002 \u56E0\u4E3A\uFF0C<code>master</code> \u5206\u652F\u6240\u5728\u63D0\u4EA4\u5E76\u4E0D\u662F <code>iss53</code> \u5206\u652F\u6240\u5728\u63D0\u4EA4\u7684\u76F4\u63A5\u7956\u5148\uFF0CGit \u4E0D\u5F97\u4E0D\u505A\u4E00\u4E9B\u989D\u5916\u7684\u5DE5\u4F5C\u3002 \u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u7684\u65F6\u5019\uFF0CGit \u4F1A\u4F7F\u7528\u4E24\u4E2A\u5206\u652F\u7684\u672B\u7AEF\u6240\u6307\u7684\u5FEB\u7167\u4EE5\u53CA\u8FD9\u4E24\u4E2A\u5206\u652F\u7684\u516C\u5171\u7956\u5148\uFF0C\u505A\u4E00\u4E2A\u7B80\u5355\u7684<strong>\u4E09\u65B9\u5408\u5E76</strong>\u3002</p><p>\u548C\u4E4B\u524D\u5C06\u5206\u652F\u6307\u9488\u5411\u524D\u63A8\u8FDB\u6240\u4E0D\u540C\u7684\u662F\uFF0C<strong>Git \u5C06\u6B64\u6B21\u4E09\u65B9\u5408\u5E76\u7684\u7ED3\u679C\u505A\u4E86\u4E00\u4E2A\u65B0\u7684\u5FEB\u7167\u5E76\u4E14\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u63D0\u4EA4\u6307\u5411\u5B83</strong>\u3002 \u8FD9\u4E2A\u88AB\u79F0\u4F5C\u4E00\u6B21\u5408\u5E76\u63D0\u4EA4\uFF0C\u5B83\u7684\u7279\u522B\u4E4B\u5904\u5728\u4E8E\u4ED6\u6709\u4E0D\u6B62\u4E00\u4E2A\u7236\u63D0\u4EA4\u3002</p><h3 id="\u9047\u5230\u51B2\u7A81\u65F6\u7684\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u51B2\u7A81\u65F6\u7684\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> \u9047\u5230\u51B2\u7A81\u65F6\u7684\u5206\u652F\u5408\u5E76</h3><p>\u5982\u679C\u4F60\u5728\u4E24\u4E2A\u4E0D\u540C\u7684\u5206\u652F\u4E2D\uFF0C<strong>\u5BF9\u540C\u4E00\u4E2A\u6587\u4EF6\u7684\u540C\u4E00\u4E2A\u90E8\u5206\u8FDB\u884C\u4E86\u4E0D\u540C\u7684\u4FEE\u6539</strong>\uFF0CGit \u5C31\u6CA1\u6CD5\u5E72\u51C0\u7684\u5408\u5E76\u5B83\u4EEC\uFF0C\u5C31\u4EA7\u751F\u4E86\u51B2\u7A81\u3002</p><p>\u5408\u5E76\u8FC7\u7A0B\u4E2D\u51FA\u73B0<code>CONFLICT</code>\u63D0\u5347\uFF0C\u8868\u793A\u6709\u51B2\u7A81</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> merge iss53
Auto-merging index.html
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> index.html
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>git status</code>\u67E5\u770B\u672A\u5408\u5E76\u72B6\u6001\u3002</p><p>\u4EFB\u4F55\u56E0\u5305\u542B\u5408\u5E76\u51B2\u7A81\u800C\u6709\u5F85\u89E3\u51B3\u7684\u6587\u4EF6\uFF0C\u90FD\u4F1A\u4EE5\u672A\u5408\u5E76\u72B6\u6001\u6807\u8BC6\u51FA\u6765\u3002 <strong>Git \u4F1A\u5728\u6709\u51B2\u7A81\u7684\u6587\u4EF6\u4E2D\u52A0\u5165\u6807\u51C6\u7684\u51B2\u7A81\u89E3\u51B3\u6807\u8BB0\uFF0C\u8FD9\u6837\u4F60\u53EF\u4EE5\u6253\u5F00\u8FD9\u4E9B\u5305\u542B\u51B2\u7A81\u7684\u6587\u4EF6\u7136\u540E\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u3002</strong> \u51FA\u73B0\u51B2\u7A81\u7684\u6587\u4EF6\u4F1A\u5305\u542B\u4E00\u4E9B\u7279\u6B8A\u533A\u6BB5\uFF0C\u770B\u8D77\u6765\u50CF\u4E0B\u9762\u8FD9\u4E2A\u6837\u5B50\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD:index.html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>contact : email.support@github.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
=======
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>please contact us at support@github.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
&gt;&gt;&gt;&gt;&gt;&gt;&gt; iss53:index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u9700\u8981<strong>\u624B\u52A8\u89E3\u51B3\u51B2\u7A81</strong>\uFF0C\u89E3\u51B3\u4E86\u6240\u6709\u6587\u4EF6\u91CC\u7684\u51B2\u7A81\u4E4B\u540E\uFF0C\u5BF9\u6BCF\u4E2A\u6587\u4EF6<strong>\u4F7F\u7528 <code>git add</code> \u547D\u4EE4</strong>\u6765\u5C06\u5176\u6807\u8BB0\u4E3A\u51B2\u7A81\u5DF2\u89E3\u51B3\u3002 <strong>\u4E00\u65E6\u6682\u5B58\u8FD9\u4E9B\u539F\u672C\u6709\u51B2\u7A81\u7684\u6587\u4EF6\uFF0CGit \u5C31\u4F1A\u5C06\u5B83\u4EEC\u6807\u8BB0\u4E3A\u51B2\u7A81\u5DF2\u89E3\u51B3</strong>\u3002</p><p>\u5982\u679C\u4F60\u5BF9\u7ED3\u679C\u611F\u5230\u6EE1\u610F\uFF0C\u5E76\u4E14\u786E\u5B9A\u4E4B\u524D\u6709\u51B2\u7A81\u7684\u7684\u6587\u4EF6\u90FD\u5DF2\u7ECF\u6682\u5B58\u4E86\uFF0C\u8FD9\u65F6\u4F60\u53EF\u4EE5\u8F93\u5165 <code>git commit</code> \u6765\u5B8C\u6210\u5408\u5E76\u63D0\u4EA4\u3002</p>`,32);function g(v,b){const a=t("ExternalLinkIcon");return i(),c("div",null,[p,s("p",null,[r,s("a",u,[h,o(a)])]),m])}var f=e(l,[["render",g],["__file","Git\u5206\u652F\u7684\u65B0\u5EFA\u4E0E\u5408\u5E76.html.vue"]]);export{f as default};

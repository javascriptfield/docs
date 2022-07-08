import{_ as t,r as i,o,c,a as n,b as d,d as s,e}from"./app.b5ebdf5a.js";const r={},l=s(`<h1 id="git-\u5206\u652F-\u5206\u652F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#git-\u5206\u652F-\u5206\u652F\u539F\u7406" aria-hidden="true">#</a> Git \u5206\u652F-\u5206\u652F\u539F\u7406</h1><p>Git \u5904\u7406\u5206\u652F\u7684\u65B9\u5F0F\u53EF\u8C13\u662F\u96BE\u4EE5\u7F6E\u4FE1\u7684\u8F7B\u91CF\uFF0C\u521B\u5EFA\u65B0\u5206\u652F\u8FD9\u4E00\u64CD\u4F5C\u51E0\u4E4E\u80FD\u5728\u77AC\u95F4\u5B8C\u6210\uFF0C\u5E76\u4E14\u5728\u4E0D\u540C\u5206\u652F\u4E4B\u95F4\u7684\u5207\u6362\u64CD\u4F5C\u4E5F\u662F\u4E00\u6837\u4FBF\u6377\u3002 \u4E0E\u8BB8\u591A\u5176\u5B83\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u4E0D\u540C\uFF0CGit \u9F13\u52B1\u5728\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\u9891\u7E41\u5730\u4F7F\u7528\u5206\u652F\u4E0E\u5408\u5E76\uFF0C\u54EA\u6015\u4E00\u5929\u4E4B\u5185\u8FDB\u884C\u8BB8\u591A\u6B21\u3002</p><h3 id="\u9996\u6B21\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u9996\u6B21\u63D0\u4EA4" aria-hidden="true">#</a> \u9996\u6B21\u63D0\u4EA4</h3><p>\u5728\u8FDB\u884C\u63D0\u4EA4\u64CD\u4F5C\u65F6\uFF0CGit \u4F1A\u4FDD\u5B58\u4E00\u4E2A\u63D0\u4EA4\u5BF9\u8C61\uFF08commit object\uFF09\u3002</p><p>\u5047\u8BBE\u73B0\u5728\u6709\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u4E09\u4E2A\u5C06\u8981\u88AB\u6682\u5B58\u548C\u63D0\u4EA4\u7684\u6587\u4EF6\u3002 \u6682\u5B58\u64CD\u4F5C\u4F1A\u4E3A\u6BCF\u4E00\u4E2A\u6587\u4EF6\u8BA1\u7B97\u6821\u9A8C\u548C\uFF08\u4F7F\u7528 SHA-1 \u54C8\u5E0C\u7B97\u6CD5\uFF09\uFF0C\u7136\u540E\u4F1A\u628A\u5F53\u524D\u7248\u672C\u7684\u6587\u4EF6\u5FEB\u7167\u4FDD\u5B58\u5230 Git \u4ED3\u5E93\u4E2D \uFF08Git \u4F7F\u7528 <em>blob</em> \u5BF9\u8C61\u6765\u4FDD\u5B58\u5B83\u4EEC\uFF09\uFF0C\u6700\u7EC8\u5C06\u6821\u9A8C\u548C\u52A0\u5165\u5230\u6682\u5B58\u533A\u57DF\u7B49\u5F85\u63D0\u4EA4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> README test.rb LICENSE
$ <span class="token function">git</span> commit -m <span class="token string">&#39;The initial commit of my project&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F7F\u7528 <code>git commit</code> \u8FDB\u884C\u63D0\u4EA4\u64CD\u4F5C\u65F6\uFF0CGit \u4F1A\u5148\u8BA1\u7B97\u6BCF\u4E00\u4E2A\u5B50\u76EE\u5F55\uFF08\u672C\u4F8B\u4E2D\u53EA\u6709\u9879\u76EE\u6839\u76EE\u5F55\uFF09\u7684\u6821\u9A8C\u548C\uFF0C \u7136\u540E\u5728 Git \u4ED3\u5E93\u4E2D\u8FD9\u4E9B\u6821\u9A8C\u548C\u4FDD\u5B58\u4E3A\u6811\u5BF9\u8C61\u3002\u968F\u540E\uFF0CGit \u4FBF\u4F1A\u521B\u5EFA\u4E00\u4E2A\u63D0\u4EA4\u5BF9\u8C61\uFF0C \u5B83\u9664\u4E86\u5305\u542B\u4E0A\u9762\u63D0\u5230\u7684\u90A3\u4E9B\u4FE1\u606F\u5916\uFF0C\u8FD8\u5305\u542B\u6307\u5411\u8FD9\u4E2A\u6811\u5BF9\u8C61\uFF08\u9879\u76EE\u6839\u76EE\u5F55\uFF09\u7684\u6307\u9488\u3002 \u5982\u6B64\u4E00\u6765\uFF0CGit \u5C31\u53EF\u4EE5\u5728\u9700\u8981\u7684\u65F6\u5019\u91CD\u73B0\u6B64\u6B21\u4FDD\u5B58\u7684\u5FEB\u7167\u3002</p><p>\u73B0\u5728\uFF0CGit \u4ED3\u5E93\u4E2D\u6709\u4E94\u4E2A\u5BF9\u8C61\uFF1A\u4E09\u4E2A <strong><em>blob</em> \u5BF9\u8C61</strong>\uFF08\u4FDD\u5B58\u7740\u6587\u4EF6\u5FEB\u7167\uFF09\u3001\u4E00\u4E2A <strong>\u6811\u5BF9\u8C61</strong> \uFF08\u8BB0\u5F55\u7740\u76EE\u5F55\u7ED3\u6784\u548C blob \u5BF9\u8C61\u7D22\u5F15\uFF09\u4EE5\u53CA\u4E00\u4E2A <strong>\u63D0\u4EA4\u5BF9\u8C61</strong>\uFF08\u5305\u542B\u7740\u6307\u5411\u524D\u8FF0\u6811\u5BF9\u8C61\u7684\u6307\u9488\u548C\u6240\u6709\u63D0\u4EA4\u4FE1\u606F\uFF09\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906145443.jpg" alt=""></p><p align="center">\u56FE1. \u9996\u6B21\u63D0\u4EA4\u5BF9\u8C61\u53CA\u5176\u6811\u7ED3\u6784 \u25B2</p><h4 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3\uFF1A</h4><ol><li><p><code>git add</code> \u52A0\u5165\u6682\u5B58\u64CD\u4F5C\uFF0C\u4F1A\u4E3A\u6BCF\u4E2A\u6587\u4EF6\u521B\u5EFA\u8BA1\u7B97\u6821\u9A8C\u548C\uFF0C\u4EE5\u53CA\u6BCF\u4E2A\u6587\u4EF6\u5BF9\u5E94\u7684<strong>\u6587\u4EF6\u5FEB\u7167\uFF08blob \u5BF9\u8C61</strong>\uFF09\u3002</p></li><li><p><code>git commit</code> \u63D0\u4EA4\u64CD\u4F5C\uFF0C\u8BA1\u7B97\u5B50\u76EE\u5F55\u6216\u8DDF\u76EE\u5F55\u7684\u6821\u9A8C\u548C \u4FDD\u5B58\u4E3A<strong>\u6811\u5BF9\u8C61</strong>\u3002\u968F\u540E\uFF0C\u521B\u5EFA\u4E00\u4E2A<strong>\u63D0\u4EA4\u5BF9\u8C61</strong>\uFF0C\u5305\u542B\u7740\u6307\u5411\u6811\u5BF9\u8C61\u7684\u6307\u9488\u548C\u6240\u6709\u63D0\u4EA4\u4FE1\u606F\u3002</p></li></ol><h3 id="\u518D\u6B21\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u518D\u6B21\u63D0\u4EA4" aria-hidden="true">#</a> \u518D\u6B21\u63D0\u4EA4</h3><p>\u505A\u4E9B\u4FEE\u6539\u540E\u518D\u6B21\u63D0\u4EA4\uFF0C\u90A3\u4E48\u8FD9\u6B21\u4EA7\u751F\u7684\u63D0\u4EA4\u5BF9\u8C61\u4F1A\u5305\u542B\u4E00\u4E2A\u6307\u5411\u4E0A\u6B21\u63D0\u4EA4\u5BF9\u8C61\uFF08\u7236\u5BF9\u8C61\uFF09\u7684\u6307\u9488\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906152315.jpg" alt=""></p><p align="center">\u56FE2. \u63D0\u4EA4\u5BF9\u8C61\u53CA\u5176\u7236\u5BF9\u8C61 \u25B2</p><h3 id="git-\u7684\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#git-\u7684\u5206\u652F" aria-hidden="true">#</a> Git \u7684\u5206\u652F</h3><p><strong>Git \u7684\u5206\u652F\uFF0C\u5176\u5B9E\u672C\u8D28\u4E0A\u4EC5\u4EC5\u662F\u6307\u5411\u63D0\u4EA4\u5BF9\u8C61\u7684\u53EF\u53D8\u6307\u9488</strong>\u3002 Git \u7684\u9ED8\u8BA4\u5206\u652F\u540D\u5B57\u662F <code>master</code>\u3002 \u5728\u591A\u6B21\u63D0\u4EA4\u64CD\u4F5C\u4E4B\u540E\uFF0C\u4F60\u5176\u5B9E\u5DF2\u7ECF\u6709\u4E00\u4E2A\u6307\u5411\u6700\u540E\u90A3\u4E2A\u63D0\u4EA4\u5BF9\u8C61\u7684 <code>master</code> \u5206\u652F\u3002 <strong><code>master</code> \u5206\u652F\u6307\u9488\u4F1A\u5728\u6BCF\u6B21\u63D0\u4EA4\u65F6\u81EA\u52A8\u5411\u524D\u79FB\u52A8</strong>\u3002</p><blockquote><p>Git \u7684 <code>master</code> \u5206\u652F\u5E76\u4E0D\u662F\u4E00\u4E2A\u7279\u6B8A\u5206\u652F\u3002 \u5B83\u5C31\u8DDF\u5176\u5B83\u5206\u652F\u5B8C\u5168\u6CA1\u6709\u533A\u522B\u3002</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906154109.jpg" alt=""></p><p align="center">\u56FE3. \u5206\u652F\u53CA\u5176\u63D0\u4EA4\u5386\u53F2 \u25B2</p><h3 id="\u521B\u5EFA\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5206\u652F" aria-hidden="true">#</a> \u521B\u5EFA\u5206\u652F</h3><p>Git \u662F\u600E\u4E48\u521B\u5EFA\u65B0\u5206\u652F\u7684\u5462\uFF1F \u5F88\u7B80\u5355\uFF0C\u5B83<strong>\u53EA\u662F\u4E3A\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A\u53EF\u4EE5\u79FB\u52A8\u7684\u65B0\u7684\u6307\u9488</strong>\u3002 \u6BD4\u5982\uFF0C\u521B\u5EFA\u4E00\u4E2A testing \u5206\u652F\uFF0C \u4F60\u9700\u8981\u4F7F\u7528 <code>git branch</code> \u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u5728\u5F53\u524D\u6240\u5728\u7684\u63D0\u4EA4\u5BF9\u8C61\u4E0A\u521B\u5EFA\u4E00\u4E2A\u6307\u9488\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906154330.png" alt=""></p><p align="center">\u56FE4. \u4E24\u4E2A\u6307\u5411\u76F8\u540C\u63D0\u4EA4\u5386\u53F2\u7684\u5206\u652F \u25B2</p><h3 id="\u5F53\u524D\u5206\u652F\u7684\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u5F53\u524D\u5206\u652F\u7684\u6307\u9488" aria-hidden="true">#</a> \u5F53\u524D\u5206\u652F\u7684\u6307\u9488</h3><p>Git \u662F\u600E\u4E48\u77E5\u9053\u5F53\u524D\u5728\u54EA\u4E00\u4E2A\u5206\u652F\u4E0A\u5462\uFF1F \u5F88\u7B80\u5355\uFF0C\u5B83\u6709\u4E00\u4E2A<strong>\u540D\u4E3A <code>HEAD</code> \u7684\u7279\u6B8A\u6307\u9488</strong>\uFF0C<strong>\u6307\u5411\u5F53\u524D\u6240\u5728\u7684\u672C\u5730\u5206\u652F</strong>\uFF08\u8BD1\u6CE8\uFF1A<strong>\u5C06 <code>HEAD</code> \u60F3\u8C61\u4E3A\u5F53\u524D\u5206\u652F\u7684\u522B\u540D</strong>\uFF09\u3002 \u5728\u672C\u4F8B\u4E2D\uFF0C\u4F60\u4ECD\u7136\u5728 <code>master</code> \u5206\u652F\u4E0A\u3002 \u56E0\u4E3A <code>git branch</code> \u547D\u4EE4\u4EC5\u4EC5 <strong>\u521B\u5EFA</strong> \u4E00\u4E2A\u65B0\u5206\u652F\uFF0C\u5E76\u4E0D\u4F1A\u81EA\u52A8\u5207\u6362\u5230\u65B0\u5206\u652F\u4E2D\u53BB\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906205325.png" alt=""></p><p align="center">\u56FE5. HEAD \u6307\u5411\u5F53\u524D\u6240\u5728\u7684\u5206\u652F \u25B2</p><h3 id="\u67E5\u770B\u5F53\u524D\u6240\u5728\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u6240\u5728\u5206\u652F" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u6240\u5728\u5206\u652F</h3><p>\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u4F7F\u7528 <code>git log</code> \u547D\u4EE4\u67E5\u770B\u5404\u4E2A\u5206\u652F\u5F53\u524D\u6240\u6307\u7684\u5BF9\u8C61\u3002 \u63D0\u4F9B\u8FD9\u4E00\u529F\u80FD\u7684\u53C2\u6570\u662F <code>--decorate</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log --oneline --decorate
f30ab <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master, testing<span class="token punctuation">)</span> <span class="token function">add</span> feature <span class="token comment"># f30ab\u63D0\u4EA4\u5BF9\u8C61 (HEAD\u5F53\u524D\u6240\u5728\u5206\u652F -&gt; master\u5206\u652F\uFF0Ctesting \u5206\u652F)</span>
34ac2 Fixed bug <span class="token comment"># 34ac2 \u63D0\u4EA4\u5BF9\u8C61</span>
98ca9 The initial commit of my project <span class="token comment"># 98ca9 \u63D0\u4EA4\u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B63\u5982\u4F60\u6240\u89C1\uFF0C\u5F53\u524D <code>master</code> \u548C <code>testing</code> \u5206\u652F\u5747\u6307\u5411\u6821\u9A8C\u548C\u4EE5 <code>f30ab</code> \u5F00\u5934\u7684\u63D0\u4EA4\u5BF9\u8C61\u3002</p><h3 id="\u5206\u652F\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5207\u6362" aria-hidden="true">#</a> \u5206\u652F\u5207\u6362</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout testing  <span class="token comment"># git checkout &lt;\u5206\u652F\u540D&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837 <code>HEAD</code> \u5C31\u6307\u5411 <code>testing</code> \u5206\u652F\u4E86\u3002</p><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906205917.png" alt=""></p><p align="center">\u56FE6. HEAD \u6307\u5411\u5F53\u524D\u6240\u5728\u7684\u5206\u652F \u25B2</p><p>\u90A3\u4E48\uFF0C\u8FD9\u6837\u7684\u5B9E\u73B0\u65B9\u5F0F\u4F1A\u7ED9\u6211\u4EEC\u5E26\u6765\u4EC0\u4E48\u597D\u5904\u5462\uFF1F \u73B0\u5728\u4E0D\u59A8\u518D\u63D0\u4EA4\u4E00\u6B21\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> test.rb
$ <span class="token function">git</span> commit -a -m <span class="token string">&#39;made a change&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906210338.png" alt=""></p><p align="center">\u56FE7. HEAD \u5206\u652F\u968F\u7740\u63D0\u4EA4\u64CD\u4F5C\u81EA\u52A8\u5411\u524D\u79FB\u52A8 \u25B2</p><p>\u5982\u56FE\u6240\u793A\uFF0C\u4F60\u7684 <code>testing</code> \u5206\u652F\u5411\u524D\u79FB\u52A8\u4E86\uFF0C\u4F46\u662F <code>master</code> \u5206\u652F\u5374\u6CA1\u6709\uFF0C\u5B83\u4ECD\u7136\u6307\u5411\u8FD0\u884C <code>git checkout</code> \u65F6\u6240\u6307\u7684\u5BF9\u8C61\u3002 \u8FD9\u5C31\u6709\u610F\u601D\u4E86\uFF0C\u73B0\u5728\u6211\u4EEC\u5207\u6362\u56DE <code>master</code> \u5206\u652F\u770B\u770B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906210810.png" alt=""></p><p align="center">\u56FE8. \u68C0\u51FA\u65F6 HEAD \u968F\u4E4B\u79FB\u52A8 \u25B2</p><p>\u8FD9\u6761\u547D\u4EE4<strong>\u505A\u4E86\u4E24\u4EF6\u4E8B</strong>\u3002 <strong>\u4E00\u662F\u4F7F HEAD \u6307\u56DE <code>master</code> \u5206\u652F\uFF0C\u4E8C\u662F\u5C06\u5DE5\u4F5C\u76EE\u5F55\u6062\u590D\u6210 <code>master</code> \u5206\u652F\u6240\u6307\u5411\u7684\u5FEB\u7167\u5185\u5BB9</strong>\u3002 \u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F60\u73B0\u5728\u505A\u4FEE\u6539\u7684\u8BDD\uFF0C\u9879\u76EE\u5C06\u59CB\u4E8E\u4E00\u4E2A\u8F83\u65E7\u7684\u7248\u672C\u3002 \u672C\u8D28\u4E0A\u6765\u8BB2\uFF0C\u8FD9\u5C31\u662F\u5FFD\u7565 <code>testing</code> \u5206\u652F\u6240\u505A\u7684\u4FEE\u6539\uFF0C\u4EE5\u4FBF\u4E8E\u5411\u53E6\u4E00\u4E2A\u65B9\u5411\u8FDB\u884C\u5F00\u53D1\u3002</p><p>\u6211\u4EEC\u4E0D\u59A8\u518D\u7A0D\u5FAE\u505A\u4E9B\u4FEE\u6539\u5E76\u63D0\u4EA4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> test.rb
$ <span class="token function">git</span> commit -a -m <span class="token string">&#39;made other changes&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,51),p=e("\u73B0\u5728\uFF0C\u8FD9\u4E2A\u9879\u76EE\u7684\u63D0\u4EA4\u5386\u53F2\u5DF2\u7ECF\u4EA7\u751F\u4E86\u5206\u53C9\uFF08\u53C2\u89C1 "),g={href:"https://git-scm.com/book/zh/v2/ch00/divergent_history",target:"_blank",rel:"noopener noreferrer"},h=e("\u9879\u76EE\u5206\u53C9\u5386\u53F2"),m=e("\uFF09\u3002 \u56E0\u4E3A\u521A\u624D\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u5206\u652F\uFF0C\u5E76\u5207\u6362\u8FC7\u53BB\u8FDB\u884C\u4E86\u4E00\u4E9B\u5DE5\u4F5C\uFF0C\u968F\u540E\u53C8\u5207\u6362\u56DE master \u5206\u652F\u8FDB\u884C\u4E86\u53E6\u5916\u4E00\u4E9B\u5DE5\u4F5C\u3002 \u4E0A\u8FF0\u4E24\u6B21\u6539\u52A8\u9488\u5BF9\u7684\u662F\u4E0D\u540C\u5206\u652F\uFF1A\u4F60\u53EF\u4EE5\u5728\u4E0D\u540C\u5206\u652F\u95F4\u4E0D\u65AD\u5730\u6765\u56DE\u5207\u6362\u548C\u5DE5\u4F5C\uFF0C\u5E76\u5728\u65F6\u673A\u6210\u719F\u65F6\u5C06\u5B83\u4EEC\u5408\u5E76\u8D77\u6765\u3002 \u800C\u6240\u6709\u8FD9\u4E9B\u5DE5\u4F5C\uFF0C\u4F60\u9700\u8981\u7684\u547D\u4EE4\u53EA\u6709 "),u=n("code",null,"branch",-1),b=e("\u3001"),v=n("code",null,"checkout",-1),_=e(" \u548C "),k=n("code",null,"commit",-1),f=e("\u3002"),x=s(`<p><img src="https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200906211331.png" alt=""></p><p align="center">\u56FE9. \u9879\u76EE\u5206\u53C9\u5386\u53F2 \u25B2</p><p>\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u4F7F\u7528 <code>git log</code> \u547D\u4EE4\u67E5\u770B\u5206\u53C9\u5386\u53F2\u3002 \u8FD0\u884C <code>git log --oneline --decorate --graph --all</code> \uFF0C\u5B83\u4F1A\u8F93\u51FA\u4F60\u7684\u63D0\u4EA4\u5386\u53F2\u3001\u5404\u4E2A\u5206\u652F\u7684\u6307\u5411\u4EE5\u53CA\u9879\u76EE\u7684\u5206\u652F\u5206\u53C9\u60C5\u51B5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> log --oneline --decorate --graph --all
* c2b9e <span class="token punctuation">(</span>HEAD, master<span class="token punctuation">)</span> made other changes
<span class="token operator">|</span> * 87ab2 <span class="token punctuation">(</span>testing<span class="token punctuation">)</span> made a change
<span class="token operator">|</span>/
* f30ab <span class="token function">add</span> feature
* 34ac2 fixed bug
* 98ca9 initial commit of my project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E Git \u7684\u5206\u652F\u5B9E\u8D28\u4E0A\u4EC5\u662F\u5305\u542B\u6240\u6307\u5BF9\u8C61\u6821\u9A8C\u548C\uFF08\u957F\u5EA6\u4E3A 40 \u7684 SHA-1 \u503C\u5B57\u7B26\u4E32\uFF09\u7684\u6587\u4EF6\uFF0C\u6240\u4EE5\u5B83\u7684\u521B\u5EFA\u548C\u9500\u6BC1\u90FD\u5F02\u5E38\u9AD8\u6548\u3002 \u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F\u5C31\u76F8\u5F53\u4E8E\u5F80\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5199\u5165 41 \u4E2A\u5B57\u8282\uFF0840 \u4E2A\u5B57\u7B26\u548C 1 \u4E2A\u6362\u884C\u7B26\uFF09\uFF0C\u5982\u6B64\u7684\u7B80\u5355\u80FD\u4E0D\u5FEB\u5417\uFF1F</p><p>\u8FD9\u4E0E\u8FC7\u53BB\u5927\u591A\u6570\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u5F62\u6210\u4E86\u9C9C\u660E\u7684\u5BF9\u6BD4\uFF0C\u5B83\u4EEC\u5728\u521B\u5EFA\u5206\u652F\u65F6\uFF0C\u5C06\u6240\u6709\u7684\u9879\u76EE\u6587\u4EF6\u90FD\u590D\u5236\u4E00\u904D\uFF0C\u5E76\u4FDD\u5B58\u5230\u4E00\u4E2A\u7279\u5B9A\u7684\u76EE\u5F55\u3002 \u5B8C\u6210\u8FD9\u6837\u7E41\u7410\u7684\u8FC7\u7A0B\u901A\u5E38\u9700\u8981\u597D\u51E0\u79D2\u949F\uFF0C\u6709\u65F6\u751A\u81F3\u9700\u8981\u597D\u51E0\u5206\u949F\u3002\u6240\u9700\u65F6\u95F4\u7684\u957F\u77ED\uFF0C\u5B8C\u5168\u53D6\u51B3\u4E8E\u9879\u76EE\u7684\u89C4\u6A21\u3002 \u800C\u5728 Git \u4E2D\uFF0C\u4EFB\u4F55\u89C4\u6A21\u7684\u9879\u76EE\u90FD\u80FD\u5728\u77AC\u95F4\u521B\u5EFA\u65B0\u5206\u652F\u3002 \u540C\u65F6\uFF0C\u7531\u4E8E\u6BCF\u6B21\u63D0\u4EA4\u90FD\u4F1A\u8BB0\u5F55\u7236\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5BFB\u627E\u6070\u5F53\u7684\u5408\u5E76\u57FA\u7840\uFF08\u8BD1\u6CE8\uFF1A\u5373\u5171\u540C\u7956\u5148\uFF09\u4E5F\u662F\u540C\u6837\u7684\u7B80\u5355\u548C\u9AD8\u6548\u3002 \u8FD9\u4E9B\u9AD8\u6548\u7684\u7279\u6027\u4F7F\u5F97 Git \u9F13\u52B1\u5F00\u53D1\u4EBA\u5458\u9891\u7E41\u5730\u521B\u5EFA\u548C\u4F7F\u7528\u5206\u652F\u3002</p><h3 id="\u521B\u5EFA\u5206\u652F\u540C\u65F6\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5206\u652F\u540C\u65F6\u5207\u6362" aria-hidden="true">#</a> \u521B\u5EFA\u5206\u652F\u540C\u65F6\u5207\u6362</h3><p>\u901A\u5E38\u6211\u4EEC\u4F1A\u5728\u521B\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F\u540E\u7ACB\u5373\u5207\u6362\u8FC7\u53BB\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>newbranchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function G(E,j){const a=i("ExternalLinkIcon");return o(),c("div",null,[l,n("p",null,[p,n("a",g,[h,d(a)]),m,u,b,v,_,k,f]),x])}var y=t(r,[["render",G],["__file","Git\u5206\u652F-\u5206\u652F\u539F\u7406.html.vue"]]);export{y as default};

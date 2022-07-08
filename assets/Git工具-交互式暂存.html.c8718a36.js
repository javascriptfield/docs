import{_ as n,o as s,c as a,d as e}from"./app.b5ebdf5a.js";const t={},i=e(`<h1 id="git-\u5DE5\u5177-\u4EA4\u4E92\u5F0F\u6682\u5B58" tabindex="-1"><a class="header-anchor" href="#git-\u5DE5\u5177-\u4EA4\u4E92\u5F0F\u6682\u5B58" aria-hidden="true">#</a> Git \u5DE5\u5177-\u4EA4\u4E92\u5F0F\u6682\u5B58</h1><p>\u672C\u8282\u4E2D\u7684\u51E0\u4E2A\u4EA4\u4E92\u5F0F Git \u547D\u4EE4\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5C06\u6587\u4EF6\u7684\u7279\u5B9A\u90E8\u5206\u7EC4\u5408\u6210\u63D0\u4EA4\u3002 \u5F53\u4F60\u5728\u4FEE\u6539\u4E86\u5927\u91CF\u6587\u4EF6\u540E\uFF0C\u5E0C\u671B\u8FD9\u4E9B\u6539\u52A8\u80FD\u62C6\u5206\u4E3A\u82E5\u5E72\u63D0\u4EA4\u800C\u4E0D\u662F\u6DF7\u6742\u5728\u4E00\u8D77\u6210\u4E3A\u4E00\u4E2A\u63D0\u4EA4\u65F6\uFF0C\u8FD9\u51E0\u4E2A\u5DE5\u5177\u4F1A\u975E\u5E38\u6709\u7528\u3002 \u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u786E\u4FDD\u63D0\u4EA4\u662F\u903B\u8F91\u4E0A\u72EC\u7ACB\u7684\u53D8\u66F4\u96C6\uFF0C\u540C\u65F6\u4E5F\u4F1A\u4F7F\u5176\u4ED6\u5F00\u53D1\u8005\u5728\u4E0E\u4F60\u5DE5\u4F5C\u65F6\u5F88\u5BB9\u6613\u5730\u5BA1\u6838\u3002 \u5982\u679C\u8FD0\u884C <code>git add</code> \u65F6\u4F7F\u7528 <code>-i</code> \u6216\u8005 <code>--interactive</code> \u9009\u9879\uFF0CGit \u5C06\u4F1A\u8FDB\u5165\u4E00\u4E2A\u4EA4\u4E92\u5F0F\u7EC8\u7AEF\u6A21\u5F0F\uFF0C\u663E\u793A\u7C7B\u4F3C\u4E0B\u9762\u7684\u4E1C\u897F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> -i
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:    unchanged        +1/-1 index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb

*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u547D\u4EE4\u4EE5\u548C\u5E73\u65F6\u975E\u5E38\u4E0D\u540C\u7684\u89C6\u56FE\u663E\u793A\u4E86\u6682\u5B58\u533A\u2014\u2014\u57FA\u672C\u4E0A\u4E0E <code>git status</code> \u662F\u76F8\u540C\u7684\u4FE1\u606F\uFF0C\u4F46\u662F\u66F4\u7B80\u660E\u627C\u8981\u4E00\u4E9B\u3002 \u5B83\u5C06\u6682\u5B58\u7684\u4FEE\u6539\u5217\u5728\u5DE6\u4FA7\uFF0C\u672A\u6682\u5B58\u7684\u4FEE\u6539\u5217\u5728\u53F3\u4FA7\u3002</p><p>\u5728\u8FD9\u5757\u533A\u57DF\u540E\u662F\u201CCommands\u201D\u547D\u4EE4\u533A\u57DF\u3002 \u5728\u8FD9\u91CC\u4F60\u53EF\u4EE5\u505A\u4E00\u4E9B\u5DE5\u4F5C\uFF0C\u5305\u62EC\u6682\u5B58\u6587\u4EF6\u3001\u53D6\u6D88\u6682\u5B58\u6587\u4EF6\u3001\u6682\u5B58\u6587\u4EF6\u7684\u4E00\u90E8\u5206\u3001\u6DFB\u52A0\u672A\u88AB\u8FFD\u8E2A\u7684\u6587\u4EF6\u3001\u663E\u793A\u6682\u5B58\u5185\u5BB9\u7684\u533A\u522B\u3002</p><h2 id="\u6682\u5B58\u4E0E\u53D6\u6D88\u6682\u5B58\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6682\u5B58\u4E0E\u53D6\u6D88\u6682\u5B58\u6587\u4EF6" aria-hidden="true">#</a> \u6682\u5B58\u4E0E\u53D6\u6D88\u6682\u5B58\u6587\u4EF6</h2><p>\u5982\u679C\u5728 <code>What now&gt;</code> \u63D0\u793A\u7B26\u540E\u952E\u5165 <code>u</code> \u6216 <code>2</code>\uFF08\u66F4\u65B0\uFF09\uFF0C\u5B83\u4F1A\u95EE\u4F60\u60F3\u8981\u6682\u5B58\u54EA\u4E2A\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>What now<span class="token operator">&gt;</span> u
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:    unchanged        +1/-1 index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Update<span class="token operator">&gt;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u6682\u5B58 <code>TODO</code> \u548C <code>index.html</code> \u6587\u4EF6\uFF0C\u53EF\u4EE5\u8F93\u5165\u6570\u5B57\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Update<span class="token operator">&gt;&gt;</span> <span class="token number">1,2</span>
           staged     unstaged path
* <span class="token number">1</span>:    unchanged        +0/-1 TODO
* <span class="token number">2</span>:    unchanged        +1/-1 index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Update<span class="token operator">&gt;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E2A\u6587\u4EF6\u524D\u9762\u7684 <code>*</code> \u610F\u5473\u7740\u9009\u4E2D\u7684\u6587\u4EF6\u5C06\u4F1A\u88AB\u6682\u5B58\u3002 \u5982\u679C\u5728 <code>Update&gt;&gt;</code> \u63D0\u793A\u7B26\u540E\u4E0D\u8F93\u5165\u4EFB\u4F55\u4E1C\u897F\u5E76\u76F4\u63A5\u6309\u56DE\u8F66\uFF0CGit \u5C06\u4F1A\u6682\u5B58\u4E4B\u524D\u9009\u62E9\u7684\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Update<span class="token operator">&gt;&gt;</span>
updated <span class="token number">2</span> paths

*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">&gt;</span> s
           staged     unstaged path
  <span class="token number">1</span>:        +0/-1      nothing TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u53EF\u4EE5\u770B\u5230 <code>TODO</code> \u4E0E <code>index.html</code> \u6587\u4EF6\u5DF2\u7ECF\u88AB\u6682\u5B58\u800C <code>simplegit.rb</code> \u6587\u4EF6\u8FD8\u672A\u88AB\u6682\u5B58\u3002 \u5982\u679C\u8FD9\u65F6\u60F3\u8981\u53D6\u6D88\u6682\u5B58 TODO \u6587\u4EF6\uFF0C\u4F7F\u7528 <code>r</code> \u6216 <code>3</code>\uFF08\u64A4\u6D88\uFF09\u9009\u9879\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">&gt;</span> r
           staged     unstaged path
  <span class="token number">1</span>:        +0/-1      nothing TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Revert<span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
           staged     unstaged path
* <span class="token number">1</span>:        +0/-1      nothing TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Revert<span class="token operator">&gt;&gt;</span> <span class="token punctuation">[</span>enter<span class="token punctuation">]</span>
reverted one path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u67E5\u770B Git \u72B6\u6001\uFF0C\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u53D6\u6D88\u6682\u5B58 <code>TODO</code> \u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">&gt;</span> s
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981\u67E5\u770B\u5DF2\u6682\u5B58\u5185\u5BB9\u7684\u533A\u522B\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>d</code> \u6216 <code>6</code>\uFF08\u533A\u522B\uFF09\u547D\u4EE4\u3002 \u5B83\u4F1A\u663E\u793A\u6682\u5B58\u6587\u4EF6\u7684\u4E00\u4E2A\u5217\u8868\uFF0C\u53EF\u4EE5\u4ECE\u4E2D\u9009\u62E9\u60F3\u8981\u67E5\u770B\u7684\u6682\u5B58\u533A\u522B\u3002 \u8FD9\u8DDF\u4F60\u5728\u547D\u4EE4\u884C\u6307\u5B9A <code>git diff --cached</code> \u975E\u5E38\u76F8\u4F3C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">&gt;</span> d
           staged     unstaged path
  <span class="token number">1</span>:        +1/-1      nothing index.html
Review diff<span class="token operator">&gt;&gt;</span> <span class="token number">1</span>
<span class="token function">diff</span> --git a/index.html b/index.html
index 4d07108<span class="token punctuation">..</span>4335f49 <span class="token number">100644</span>
--- a/index.html
+++ b/index.html
@@ -16,7 +16,7 @@ Date Finder

 <span class="token operator">&lt;</span>p <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;out&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>

-<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;footer&quot;</span><span class="token operator">&gt;</span>contact <span class="token builtin class-name">:</span> support@github.com<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
+<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;footer&quot;</span><span class="token operator">&gt;</span>contact <span class="token builtin class-name">:</span> email.support@github.com<span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>

 <span class="token operator">&lt;</span>script <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FD9\u4E9B\u57FA\u672C\u547D\u4EE4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EA4\u4E92\u5F0F\u6DFB\u52A0\u6A21\u5F0F\u6765\u8F7B\u677E\u5730\u5904\u7406\u6682\u5B58\u533A\u3002</p><h2 id="\u6682\u5B58\u8865\u4E01" tabindex="-1"><a class="header-anchor" href="#\u6682\u5B58\u8865\u4E01" aria-hidden="true">#</a> \u6682\u5B58\u8865\u4E01</h2><p>Git \u4E5F\u53EF\u4EE5\u6682\u5B58\u6587\u4EF6\u7684\u7279\u5B9A\u90E8\u5206\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u5728 simplegit.rb \u6587\u4EF6\u4E2D\u505A\u4E86\u4E24\u5904\u4FEE\u6539\uFF0C\u4F46\u53EA\u60F3\u8981\u6682\u5B58\u5176\u4E2D\u7684\u4E00\u4E2A\u800C\u4E0D\u662F\u53E6\u4E00\u4E2A\uFF0CGit \u4F1A\u5E2E\u4F60\u8F7B\u677E\u5730\u5B8C\u6210\u3002 \u5728\u548C\u4E0A\u4E00\u8282\u4E00\u6837\u7684\u4EA4\u4E92\u5F0F\u63D0\u793A\u7B26\u4E2D\uFF0C\u8F93\u5165 <code>p</code> \u6216 <code>5</code>\uFF08\u8865\u4E01\uFF09\u3002 Git \u4F1A\u8BE2\u95EE\u4F60\u60F3\u8981\u90E8\u5206\u6682\u5B58\u54EA\u4E9B\u6587\u4EF6\uFF1B\u7136\u540E\uFF0C\u5BF9\u5DF2\u9009\u62E9\u6587\u4EF6\u7684\u6BCF\u4E00\u4E2A\u90E8\u5206\uFF0C\u5B83\u90FD\u4F1A\u4E00\u4E2A\u4E2A\u5730\u663E\u793A\u6587\u4EF6\u533A\u522B\u5E76\u8BE2\u95EE\u4F60\u662F\u5426\u60F3\u8981\u6682\u5B58\u5B83\u4EEC\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">diff</span> --git a/lib/simplegit.rb b/lib/simplegit.rb
index dd5ecc4<span class="token punctuation">..</span>57399e0 <span class="token number">100644</span>
--- a/lib/simplegit.rb
+++ b/lib/simplegit.rb
@@ -22,7 +22,7 @@ class SimpleGit
   end

   def log<span class="token punctuation">(</span>treeish <span class="token operator">=</span> <span class="token string">&#39;master&#39;</span><span class="token punctuation">)</span>
-    command<span class="token punctuation">(</span><span class="token string">&quot;git log -n 25 #{treeish}&quot;</span><span class="token punctuation">)</span>
+    command<span class="token punctuation">(</span><span class="token string">&quot;git log -n 30 #{treeish}&quot;</span><span class="token punctuation">)</span>
   end

   def blame<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
Stage this hunk <span class="token punctuation">[</span>y,n,a,d,/,j,J,g,e,?<span class="token punctuation">]</span>?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u6709\u5F88\u591A\u9009\u9879\u3002 \u8F93\u5165 <code>?</code> \u663E\u793A\u6240\u6709\u53EF\u4EE5\u4F7F\u7528\u7684\u547D\u4EE4\u5217\u8868\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Stage this hunk <span class="token punctuation">[</span>y,n,a,d,/,j,J,g,e,?<span class="token punctuation">]</span>? ?
y - stage this hunk
n - <span class="token keyword">do</span> not stage this hunk
a - stage this and all the remaining hunks <span class="token keyword">in</span> the <span class="token function">file</span>
d - <span class="token keyword">do</span> not stage this hunk nor any of the remaining hunks <span class="token keyword">in</span> the <span class="token function">file</span>
g - <span class="token keyword">select</span> a hunk to go to
/ - search <span class="token keyword">for</span> a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - <span class="token function">split</span> the current hunk into smaller hunks
e - manually edit the current hunk
? - print <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u5E38\u60C5\u51B5\u4E0B\u53EF\u4EE5\u8F93\u5165 <code>y</code> \u6216 <code>n</code> \u6765\u9009\u62E9\u662F\u5426\u8981\u6682\u5B58\u6BCF\u4E00\u4E2A\u533A\u5757\uFF0C \u5F53\u7136\uFF0C\u6682\u5B58\u7279\u5B9A\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u90E8\u5206\u6216\u4E3A\u4E4B\u540E\u7684\u9009\u62E9\u8DF3\u8FC7\u4E00\u4E2A\u533A\u5757\u4E5F\u662F\u975E\u5E38\u6709\u7528\u7684\u3002 \u5982\u679C\u4F60\u53EA\u6682\u5B58\u6587\u4EF6\u7684\u4E00\u90E8\u5206\uFF0C\u72B6\u6001\u8F93\u51FA\u53EF\u80FD\u4F1A\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>What now<span class="token operator">&gt;</span> <span class="token number">1</span>
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:        +1/-1        +4/-0 lib/simplegit.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>simplegit.rb</code> \u6587\u4EF6\u7684\u72B6\u6001\u5F88\u6709\u8DA3\u3002 \u5B83\u663E\u793A\u51FA\u82E5\u5E72\u884C\u88AB\u6682\u5B58\u4E0E\u82E5\u5E72\u884C\u672A\u88AB\u6682\u5B58\u3002 \u5DF2\u7ECF\u90E8\u5206\u5730\u6682\u5B58\u4E86\u8FD9\u4E2A\u6587\u4EF6\u3002 \u5728\u8FD9\u65F6\uFF0C\u53EF\u4EE5\u9000\u51FA\u4EA4\u4E92\u5F0F\u6DFB\u52A0\u811A\u672C\u5E76\u4E14\u8FD0\u884C <code>git commit</code> \u6765\u63D0\u4EA4\u90E8\u5206\u6682\u5B58\u7684\u6587\u4EF6\u3002</p><p>\u4E5F\u53EF\u4EE5\u4E0D\u5FC5\u5728\u4EA4\u4E92\u5F0F\u6DFB\u52A0\u6A21\u5F0F\u4E2D\u505A\u90E8\u5206\u6587\u4EF6\u6682\u5B58\u2014\u2014\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528 <code>git add -p</code> \u6216 <code>git add --patch</code> \u6765\u542F\u52A8\u540C\u6837\u7684\u811A\u672C\u3002</p><p>\u66F4\u8FDB\u4E00\u6B65\u5730\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>git reset --patch</code> \u547D\u4EE4\u7684\u8865\u4E01\u6A21\u5F0F\u6765\u90E8\u5206\u91CD\u7F6E\u6587\u4EF6\uFF0C \u901A\u8FC7 <code>git checkout --patch</code> \u547D\u4EE4\u6765\u90E8\u5206\u68C0\u51FA\u6587\u4EF6\u4E0E <code>git stash save --patch</code> \u547D\u4EE4\u6765\u90E8\u5206\u6682\u5B58\u6587\u4EF6\u3002 \u6211\u4EEC\u5C06\u4F1A\u5728\u63A5\u89E6\u8FD9\u4E9B\u547D\u4EE4\u7684\u9AD8\u7EA7\u4F7F\u7528\u65B9\u6CD5\u65F6\u4E86\u89E3\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\u3002</p>`,29),p=[i];function c(l,o){return s(),a("div",null,p)}var u=n(t,[["render",c],["__file","Git\u5DE5\u5177-\u4EA4\u4E92\u5F0F\u6682\u5B58.html.vue"]]);export{u as default};

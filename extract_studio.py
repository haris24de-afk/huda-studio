#!/usr/bin/env python3
"""Extract studio.js from an older Blogger theme XML that still embeds it.
Usage: python3 extract_studio.py digital-dawah-theme-v2-132.xml studio.js"""
import sys
src, dst = sys.argv[1], sys.argv[2]
s = open(src, encoding='utf8').read()
a = s.index("<script id='dd-lz-studio' type='text/plain'>")
b = s.index('</script>', a)
body = s[a:b].split('//<![CDATA[\n', 1)[1].rsplit('\n//]]>', 1)[0]
open(dst, 'w', encoding='utf8').write(body + '\n')
print('written', dst, len(body.encode()), 'bytes')

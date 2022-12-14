# grab 2 or three random genres from spotify

# get top artist from each genre

# get reccomendations , use artists for seed_artists , original genres for seed_genres , artist top track for seed_tracks

#    <tr class="" valign="top">
#     <td align="right" class="note">
#      5930
#     </td>
#     <td>
#      <a class="note" href="https://embed.spotify.com/?uri=spotify:playlist:4gLqgkEOzR2IMIqts0jbBT" onclick="linksync('https://embed.spotify.com/?uri=spotify:playlist:4gLqgkEOzR2IMIqts0jbBT');" target="spotify" title="See this playlist">
#       ☊
#      </a>
#     </td>
#     <td class="note">
#      <a href="?root=marci%20brijuzi&amp;scope=all" style="color: #6B8D72" title="Re-sort the list starting from here.">
#       marci brijuzi
#      </a>
#     </td>
#    </tr>


import re
import ssl
from tkinter.ttk import Style
from urllib.request import urlopen
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://everynoise.com/everynoise1d.cgi?scope=all"
html = urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, "html.parser")

regex = r"[^0-9☊][\w\\s][^0-9]+"

genres = soup.find_all(string=re.compile(regex))

# print(genres)

print(genres[666])

with open(r'D:\VS Code Files\Code Academy\Week-5\FrontEndPrj-start\list.txt', 'w') as fp:
    for item in genres:
        # write each item on a new line
        fp.write("%s\n" % item)
    print('Done')

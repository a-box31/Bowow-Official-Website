# -*- coding: utf-8 -*-
"""
Created on Wed Mar  3 16:09:15 2021

@author: Abin Thomas

"""

from PIL import Image
import sys

"""
    Ran with the following structure...
    python3 resizer.py height width file_path new_file_name
"""

if len(sys.argv) != 5:
    print("ARG INVALID\n")
    sys.exit

h = float(sys.argv[1])
w = float(sys.argv[2])    

file_path = sys.argv[3]
    
while True:
    try:
        img = Image.open("{}".format(file_path))
        break
    except (FileNotFoundError, IOError) as e:
        print("Wrong file or file path")
        print(str(e))
    except:
        raise
     
file_name = sys.argv[4]

(org_w, org_h) = img.size

if(org_w != org_h):
    
    ans = input("Should the image be the same aspect ratio? (y/n): ")
    
    if(ans == "y"):
        
        ratio = org_w / org_h
        
        if(org_w > org_h):
            w = h * ratio 
        else:
            h = w / ratio
    
newsize = (int(w),int(h))

img = img.resize(newsize)

img.save(file_name)

img.show()

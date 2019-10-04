import pytesseract as ocr

from PIL import Image
direc = 'diretorhc'
lang = 'por'
phrase = ocr.image_to_string(Image.open(direc+'.jpg'), lang=lang)
file = open(direc+'.txt','w')
file.write(phrase)
print(phrase)
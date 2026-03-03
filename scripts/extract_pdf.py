import fitz
import sys
import json

def extract_pdf(pdf_path):
    print(f"Reading {pdf_path}...")
    doc = fitz.open(pdf_path)
    
    output_text = []
    output_text.append(f"TOTAL PAGES: {len(doc)}")
    
    for i in range(len(doc)):
        page = doc.load_page(i)
        
        text = page.get_text("text").strip()
        
        # also get basic font/color summary if possible from dictionary
        # but text is usually enough to spot "Colors: #1A1A1A"
        
        if text:
            output_text.append(f"\n--- PAGE {i+1} ---\n{text}")
            
    with open("brand_guide_extracted.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(output_text))
        
    print("Done writing to brand_guide_extracted.txt")

if __name__ == "__main__":
    extract_pdf(sys.argv[1])

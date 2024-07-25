import pyttsx3, json
import sys

def main():
    rate = sys.argv[1]
    text = sys.argv[2]
    voice = sys.argv[3]
    filePath = sys.argv[4]
    
    engine = pyttsx3.init()
    
    engine.setProperty('rate', int(rate))
    engine.setProperty('voice', voice)
    engine.save_to_file(text, filePath)
    engine.runAndWait()
    
    print(json.dumps({"result": True, "rate": rate, "voice": voice, "filePath": filePath}))

if __name__ == "__main__":
    main()
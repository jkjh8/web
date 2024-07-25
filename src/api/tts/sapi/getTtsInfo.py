import pyttsx3, json

def main():
    engine = pyttsx3.init()
    rate = engine.getProperty('rate')
    voice = engine.getProperty('voice')
    voices = [v.__dict__ for v in engine.getProperty('voices')]
    print(json.dumps({"result": True, "rate": rate, "voice": voice, "voices": voices}))

if __name__ == "__main__":
    main()
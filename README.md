# react-tts

A React library for text-to-speech functionality.

## Installation

```bash
npm install react-tts
```

## Usage
```js
import React from "react";
import speech from "react-tts";

const App = () => {
  const text = "Hello, this is a sample text to be spoken.";

  return (
    <div>
        <button
            onClick={() =>
                speech({
                    text,
                    lang: 'en-GB',
                    volume: 0.8,
                    rate: 1.2,
                    pitch: 1.1,
                    voice: 'Google UK English Male'
                })
            }
        >
            Speak Text
        </button>
    </div>
  );
};

export default App;

```

## API
The speech function accepts an object with the following properties:

| Property |  Type  |                           Description                          | Required |
|:--------:|:------:|:--------------------------------------------------------------:|:--------:|
| text     | string | The text to be spoken                                          | Yes      |
| lang     | string | The language of the speech. Default is 'en-US'.                | No       |
| volume   | number | The volume of the speech. Range is from 0 to 1. Default is 1.  | No       |
| rate     | number | The rate of the speech. Range is from 0.1 to 10. Default is 1. | No       |
| pitch    | number | The pitch of the speech. Range is from 0 to 2. Default is 1.   | No       |
| voice    | string | The name of the voice to be used. Default is null.             | No       |

## Available Voices
You can use the speechSynthesis.getVoices() method to get a list of available voices. Here are some common voices:

```js
console.log(window.speechSynthesis.getVoices());
```
|        Voice Name        | Language |
|:------------------------:|:--------:|
| Google US English        | en-US    |
| Google UK English Male   | en-GB    |
| Google UK English Female | en-GB    |
| Google español           | es-ES    |
| Google français          | fr-FR    |
| Google Deutsch           | de-DE    |
| Google italiano          | it-IT    |
| Google 日本語            | ja-JP    |
| Google 한국의            | ko-KR    |
| Google 中文（普通话）    | zh-CN    |

## Contributions
We welcome contributions to improve this library. We appreciate your contributions and will review and merge them as quickly as possible. If you have any questions or need assistance, feel free to open an issue. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Submit a pull request with a detailed description of your changes.

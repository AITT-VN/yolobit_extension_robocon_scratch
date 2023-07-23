const iconURL = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjM2cHgiIGZpbGw9IiMwMDAwMDAiPjxnPjxwYXRoIGQ9Ik0wLDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvZz48Zz48Zz48cGF0aCBkPSJNMTEsNkg5VjRoMlY2eiBNMTUsNGgtMnYyaDJWNHogTTksMTRoMnYtMkg5VjE0eiBNMTksMTBWOGgtMnYySDE5eiBNMTksMTR2LTJoLTJ2MkgxOXogTTEzLDE0aDJ2LTJoLTJWMTR6IE0xOSw0aC0ydjJoMiBWNHogTTEzLDhWNmgtMnYySDEzeiBNNywxMFY4aDJWNkg3VjRINXYxNmgydi04aDJ2LTJIN3ogTTE1LDEyaDJ2LTJoLTJWMTJ6IE0xMSwxMHYyaDJ2LTJIMTF6IE05LDh2MmgyVjhIOXogTTEzLDEwaDJWOGgtMlYxMHogTTE1LDZ2MmgyVjZIMTV6Ii8+PC9nPjwvZz48L3N2Zz4=';

// Core, Team, and Official extension classes should be registered statically with the Extension Manager.
// See: scratch-vm/src/extension-support/extension-manager.js
class Scratch3YoloBitRobocon {

    getInfo () {
        return {
            id: 'YoloBitRoboconExtension',
            parentMode: 'yoloBit',
            name: 'Robocon',
            blockIconURI: iconURL,
            allowBlockTypes: {
            },
            color1: '#cb2026',
            color2: '#cb2026',
            blocks: [
                {
                    opcode: 'robocon_follow_line_until',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'follow_line_until(/*{SPEED}*/, lambda:(/*{LAMBDA}*/), /*{TIME}*/*1000)\n'
                    },
                    text: [
                        {
                            default: 'dò line với tốc độ [SPEED] cho đến khi [LAMBDA] trong [TIME] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.robocon_follow_line_until"
                        }
                    ],
                    arguments: {
                        SPEED: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        LAMBDA: {
                            type: Scratch.ArgumentType.BOOLEAN
                        },
                        TIME: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'follow_line_in_time',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'follow_line_until(/*{SPEED}*/, lambda: (False), /*{TIME_DELAY}*/*1000)\n'
                    },
                    text: [
                        {
                            default: 'dò line với tốc độ [SPEED] trong [TIME_DELAY] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.follow_line_in_time"
                        }
                    ],
                    arguments: {
                        SPEED: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 30
                        },
                        TIME_DELAY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },                
                {
                    opcode: 'turn_until_condition',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'turn_until_condition(/*{SPEED_LEFT}*/, /*{SPEED_RIGHT}*/, lambda: (/*{LAMBDA}*/), /*{TIME_DELAY}*/*1000)\n'
                    },
                    text: [
                        {
                            default: 'quay động cơ trái [SPEED_LEFT] phải [SPEED_RIGHT] đến khi [LAMBDA] tối đa [TIME_DELAY] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.turn_until_condition"
                        }
                    ],
                    arguments: {
                        SPEED_LEFT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        SPEED_RIGHT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '50'
                        },
                        TIME_DELAY: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        },
                        LAMBDA: {
                            type: Scratch.ArgumentType.BOOLEAN
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                },
                {
                    opcode: 'turn_until_black_line',
                    rawCode: {
                        imports: 'from rover import *\nfrom robocon import *\n',
                        code:'turn_until_line_detected(/*{SPEED_LEFT}*/, /*{SPEED_RIGHT}*/, /*{TIME_DELAY}*/*1000)\n'
                    },
                    text: [
                        {
                            default: 'quay động cơ trái [SPEED_LEFT] phải [SPEED_RIGHT] đến khi gặp vạch đen tối đa [TIME_DELAY] giây',
                            id: "gui.externalExtension.YoloBitRoboconExtension.turn_until_black_line"
                        }
                    ],
                    arguments: {
                        SPEED_LEFT: {
                            type: Scratch.ArgumentType.INTERGER_NUMBER,
                            defaultValue: '50'
                        },
                        SPEED_RIGHT: {
                            type: Scratch.ArgumentType.INTERGER_NUMBER,
                            defaultValue: '50'
                        },
                        TIME_DELAY: {
                            type: Scratch.ArgumentType.INTERGER_NUMBER,
                            defaultValue: 5
                        }
                    },
                    blockType: Scratch.BlockType.COMMAND
                }                              
            ]            
        };
    }
}

Scratch.extensions.register(new Scratch3YoloBitRobocon());
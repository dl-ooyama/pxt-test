
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

enum Switch {
    //% block="スイッチ 1"
    One,
    //% block="スイッチ 2"
    Two
}

/**
 * カスタムブロック
 */
//% weight=100 color=#0fbc11 icon=""
namespace mytest {
    /**
     * サーボを回転させて通電させます。
     * @param s どちらのスイッチを ON にするか
     */
    //% blockId="switch_on"
    //% block="%s|を ON にする"
    export function switchOn(s: Switch): void {
        switch (s) {
            case Switch.One:
                pins.servoWritePin(AnalogPin.P2, 0);
                break;
            case Switch.Two:
                pins.servoWritePin(AnalogPin.P1, 0);
                break;
        }
    }

    /**
     * サーボを 0 度にして通電しないようにします。
     * @param s どちらのスイッチを OFF にするか
     */
    //% blockId="switch_off"
    //% block="%s|を OFF にする"
    export function switchOff(s: Switch): void {
        switch (s) {
            case Switch.One:
                pins.servoWritePin(AnalogPin.P2, 90);
                break;
            case Switch.Two:
                pins.servoWritePin(AnalogPin.P1, 90);
                break;
        }
    }
}


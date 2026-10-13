// Cabinet runtime hooks. These are declared here so the stock MakeCode
// Arcade editor doesn't flag them as errors; the real implementations live
// in the native runtime (libpxt.so, hw---vm gamesel.cpp) on the cabinet.
// None of these work in the simulator — this project is only meant to be
// compiled through the native PNG to Desktop compiler.
declare namespace control {
    /**
     * Lists installed games (directory names under the games dir).
     */
    function programList(): string[]

    /**
     * Cover art for a program (cover.png / cover.img next to its Game),
     * as a Buffer ready for image.ofBuffer(). Null when it has none.
     */
    function programImage(prog: string): Buffer

    /**
     * Asks the launcher to run the named program, then exits this game.
     */
    function runProgram(prog: string): void

    /**
     * Deletes an installed program.
     */
    function deleteProgram(prog: string): void
}

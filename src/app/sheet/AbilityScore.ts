export class AbilityScore {
  name: string;
  value: number;
  mod: number;
  modPrint: string;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
    this.updateMod();
  }

  updateMod() {
    this.mod = Math.floor((this.value - 10) / 2);
    console.log(this.mod);
    if (this.mod > 0) {
      this.modPrint = '+' + this.mod;
    } else {
      this.modPrint = this.mod;
    }
  }

  setValue(value) {
    this.value = value;
    this.updateMod();
  }
}

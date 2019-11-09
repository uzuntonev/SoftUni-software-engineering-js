function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Kotka';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

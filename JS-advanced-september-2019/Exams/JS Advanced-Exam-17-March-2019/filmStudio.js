class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (const f of this.films) {

                const roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    const filmIndex = this.films.indexOf(f);
                    const wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    const roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            const firstArgIsString = typeof arguments[0] === 'string';
            const secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                const findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                const filmRoles = roles.reduce((acc, cur) => {
                    const curFilmRole = {
                        role: cur,
                        actor: false,
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                const film = {
                    filmName,
                    filmRoles,
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } 
            throw ('Invalid arguments');
            

        } else {
            throw ('Invalid arguments count');
        }
    }

    lookForProducer(film) {

        const f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`);
        }

        return output;
    }
}

module.exports = FilmStudio;

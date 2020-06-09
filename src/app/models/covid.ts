export class Covid {
    activeCase: number;
    country: string;
    recovered: number;
    deaths: number;
    Covid(activeCase?: number, country?: string, recovered?: number, deaths?: number) {
        this.activeCase = activeCase;
        this.country = country;
        this.recovered = recovered;
        this.deaths = deaths;

    }


}

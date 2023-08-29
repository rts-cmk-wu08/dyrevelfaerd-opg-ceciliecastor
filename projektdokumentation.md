Terminsprøve rapport

Terminsprøve, 2023
Cecilie Castor von Spreckelsen, 1146522c308
Teknologi stack: Next.js, Tailwind css, Typescript, Formik, Yup, Insomnia
URL:
URL til login:
Brugernavn:
Adgangskode:

1.  Teknologi stack
2.  Hvilke udfordringer har jeg mødt på min vej?
3.  Tilføjelser
4.  Ændringer af design

5.  Teknologi stack (jamstack)

    1.1 Next.js, v. 13.xx
    Next.js er et JavaScript (JS) framework der bygger oven på React. Modsat React tilbyder Next.js serverside rendering, der kan forbedre appens responstid.

    1.2 Tailwind CSS
    Tailwind CSS er et CSS framework, der modsat andre CSS frameworks, som f.eks. Bootstrap, fokuserer mere på utility klasser frem for færdigt stylede komponenter. Det giver brugerne flere muligheder i forhold til at tilføje deres egne unikke design og styles. Et eksempel på, hvor nemt det er at bruge, kan være deres prædefinerede media queries, hvor man nemt og hurtigt kan tilføje responsiveness til sit design. Ønsker du andre breaking points, kan du blot ændre det i config filen.

    Jeg har valgt at arbejde med Tailwind, da det er hurtigt at skrive og nemt at tilpasse det udleverede design. Der kan både tilføjes styles på de enkelte elementer, laves overordnet styles i global.css eller ændres/tilføjes utility klasser.

    1.3 Typescript
    Typescript (TS) er en udvidelse af JS, eller et ‘superset of JavaScript’. TS bygger oven på den struktur og funktionalitet man kender fra, men tilføjer flere ekstra lag som

    1.4 Formik & Yup
    Formik er et form bibliotek til React, der sammen med Yup nemt sørger for, at ens form er korrekt sat op og valideret. Yup fungere til de fleste frameworks, hvor Formik er lavet specifikt til React.

6.  Hvilke udfordringer har jeg mødt på min vej?
    Jeg kunne ikke få mine GET og POST request til at virke på hverken nyhedsbrevet eller login siden. Jeg har brugt en del tid på at afprøve forskellige metoder og fejlsøge, uden held. Det har været enormt frustrerende.

    Hvad kunne der gøres bedre?
    En del af den tid jeg har brugt på min mislykkedes GET/POST kunne jeg med fordel have brugt på strukturen af min app og rydde op i mine filer. Jeg lod mine frustrationer få frit løb, og mistede overblikket over opgaven som helhed.

    Skulle jeg gøre det, ville jeg holde mig mere til min ‘need to have’ og ‘nice to have’-liste.

7.  Tilføjelser
    Der er tilføjet en detaljeside om dyrene der er klar til adoption, samt en ‘Adopter mig’-knap på hver side, der fører hen til et kontaktformular omkring det specifikke dyr. Det er gjort for at gøre adoptionsprocessen så nem og overskuelig som muligt, så der kan blive adopteret flere dyr.

    Der er tilføjet en login side, der validerer dataen der bliver tastet ind, men selve login-funtionaliteten virker ikke.

8.  Ændringer af design
    4.1 Tilføjet en kontrastfarve
    Tilføjelsen af en kontrastfarve hjælper med at fremhæve de elementer, der skal skille sig ud fra mængden af informationer. Så som ‘Adopter et dyr’, ‘Bliv Frivillig’ og diverse knapper.

    4.2 Tydeligere Call To Actions
    Jeg har valgt at fremhæve tre Call To Actions (CTA), som jeg har fremhævet i designet. Det er ‘Bliv Frivillig’, ‘Adopter et Dyr’ og ‘Tilmeld Nyhedsbrev’. Jeg har fremhævet dem ved at tilføje en ny farve, fremhæve teksten yderligere og tilføje en knap.

    4.3 Tydeligere hierarki i typografien
    Jeg har gjort de større overskrifter endnu større, så der ikke er tvivl om, hvornår man kommer til en ny sektion/side.

    4.4 Re-design af cards
    Jeg har redesignet cards til både ‘Bliv frivillig’- og ‘Dyrene’-sektionerne. Begge kort har fået tilføjet tydeligere hierarki i typografien, farver og rundet hjørnerne så de matcher knapperne.

        På kortene med dyrene har jeg flyttet billedet op i toppen, så det er rektangulært på det lange led og ikke i højden. Det har jeg bl.a. gjort, da langt de fleste billeder er taget i det format, hvilket sikre at hele dyret kommer med på billedet, og for at matche opbygningen af ‘Bliv Frivillig’-kortene.

    4.5 Design rettelser i footeren
    Informationerne i footeren følger de to kolonner, der er blevet brugt i ‘Dyr hos os’, så det hele flugter. Det skaber mere ro for øjet, når elementerne følger de samme generelle grids.

const wordList = [
    {
        word: "constitution",
        hint: "A document outlining the fundamental principles of a government."
    },
    {
        word: "amendment",
        hint: "A change or addition to a legal document."
    },
    {
        word: "democracy",
        hint: "A system of government by the whole population."
    },
    {
        word: "legislation",
        hint: "Laws considered collectively."
    },
    {
        word: "judiciary",
        hint: "The system of courts that interprets and applies the law."
    },
    {
        word: "sovereignty",
        hint: "Supreme power or authority."
    },
    {
        word: "federalism",
        hint: "A system of government in which entities share power."
    },
    {
        word: "citizenship",
        hint: "The status of being a legal member of a country."
    },
    {
        word: "rights",
        hint: "Legal entitlements or protections."
    },
    {
        word: "preamble",
        hint: "An introductory statement in a document."
    },
    {
        word: "republic",
        hint: "A state in which supreme power is held by the people and their elected representatives."
    },
    {
        word: "bill",
        hint: "A draft of a proposed law presented to parliament for discussion."
    },
    {
        word: "veto",
        hint: "A constitutional right to reject a decision or proposal made by a law-making body."
    },
    {
        word: "ratification",
        hint: "The action of signing or giving formal consent to a treaty, contract, or agreement."
    },
    {
        word: "bicameral",
        hint: "A legislative body having two branches or chambers."
    },
    {
        word: "unicameral",
        hint: "A legislative body having a single legislative chamber."
    },
    {
        word: "executive",
        hint: "The branch of government responsible for implementing laws."
    },
    {
        word: "legislature",
        hint: "The legislative body of a country or state."
    },
    {
        word: "judicial review",
        hint: "The power of courts to declare laws unconstitutional."
    },
    {
        word: "separation of powers",
        hint: "The division of government responsibilities into distinct branches."
    },
    {
        word: "checks and balances",
        hint: "A system that ensures no one branch of government becomes too powerful."
    },
    {
        word: "habeas corpus",
        hint: "A legal principle that requires a person under arrest to be brought before a judge."
    },
    {
        word: "due process",
        hint: "Fair treatment through the normal judicial system."
    },
    {
        word: "equal protection",
        hint: "The principle that laws and enforcement must apply equally to all people."
    },
    {
        word: "civil liberties",
        hint: "Individual rights protected by law from unjust governmental interference."
    },
    {
        word: "civil rights",
        hint: "The rights of citizens to political and social freedom and equality."
    },
    {
        word: "common law",
        hint: "Law derived from judicial decisions instead of statutes."
    },
    {
        word: "statutory law",
        hint: "Law enacted by a legislative body."
    },
    {
        word: "precedent",
        hint: "A legal decision that serves as an authoritative rule in future similar cases."
    },
    {
        word: "jurisdiction",
        hint: "The official power to make legal decisions and judgments."
    },
    {
        word: "plaintiff",
        hint: "A person who brings a case against another in a court of law."
    },
    {
        word: "defendant",
        hint: "An individual, company, or institution sued or accused in a court of law."
    },
    {
        word: "appeal",
        hint: "Apply to a higher court for a reversal of the decision of a lower court."
    },
    {
        word: "verdict",
        hint: "A decision on a disputed issue in a civil or criminal case."
    },
    {
        word: "indictment",
        hint: "A formal charge or accusation of a serious crime."
    },
    {
        word: "subpoena",
        hint: "A writ ordering a person to attend a court."
    },
    {
        word: "testimony",
        hint: "A formal written or spoken statement given in a court of law."
    },
    {
        word: "affidavit",
        hint: "A written statement confirmed by oath for use as evidence in court."
    },
    {
        word: "tort",
        hint: "A wrongful act leading to civil legal liability."
    },
    {
        word: "contract",
        hint: "A written or spoken agreement that is enforceable by law."
    },
    {
        word: "negligence",
        hint: "Failure to take proper care in doing something, leading to damage or injury."
    },
    {
        word: "liability",
        hint: "The state of being responsible for something, especially by law."
    },
    {
        word: "damages",
        hint: "A sum of money claimed or awarded in compensation for a loss or injury."
    },
    {
        word: "injunction",
        hint: "An authoritative warning or order."
    },
    {
        word: "arbitration",
        hint: "The use of an arbitrator to settle a dispute."
    },
    {
        word: "mediation",
        hint: "Intervention in a dispute to resolve it."
    },
    {
        word: "settlement",
        hint: "An official agreement intended to resolve a dispute."
    },
    {
        word: "litigation",
        hint: "The process of taking legal action."
    },
    {
        word: "prosecution",
        hint: "The institution and conducting of legal proceedings against someone."
    },
    {
        word: "defense",
        hint: "The case presented by or on behalf of the party being accused or sued."
    },
    {
        word: "acquittal",
        hint: "A judgment that a person is not guilty of the crime with which they have been charged."
    },
    {
        word: "conviction",
        hint: "A formal declaration that someone is guilty of a criminal offense."
    },
    {
        word: "sentence",
        hint: "The punishment assigned to a defendant found guilty by a court."
    },
    {
        word: "parole",
        hint: "The release of a prisoner temporarily or permanently before the completion of a sentence."
    },
    {
        word: "probation",
        hint: "The release of an offender from detention, subject to a period of good behavior under supervision."
    },
    {
        word: "appeal",
        hint: "Apply to a higher court for a reversal of the decision of a lower court."
    },
    {
        word: "juror",
        hint: "A member of a jury."
    },
    {
        word: "bail",
        hint: "The temporary release of an accused person awaiting trial."
    },
    {
        word: "warrant",
        hint: "A document issued by a legal or government official authorizing the police to make an arrest."
    },
    {
        word: "plea",
        hint: "A formal statement by or on behalf of a defendant or prisoner, stating guilt or innocence in response to a charge."
    },
    {
        word: "hearing",
        hint: "A session in which testimony and arguments are presented, especially before an official."
    },
    {
        word: "trial",
        hint: "A formal examination of evidence in a court."
    },
    {
        word: "cross-examination",
        hint: "The questioning of a witness by the opposing party."
    },
    {
        word: "direct examination",
        hint: "The initial questioning of a witness by the party who called the witness."
    },
    {
        word: "burden of proof",
        hint: "The obligation to prove one's assertion."
    },
    {
        word: "reasonable doubt",
        hint: "The standard of proof required in a criminal trial."
    },
    {
        word: "preponderance of evidence",
        hint: "The standard of proof in civil trials."
    },
    {
        word: "mens rea",
        hint: "The intention or knowledge of wrongdoing."
    },
    {
        word: "actus reus",
        hint: "The physical act of committing a crime."
    },
    {
        word: "felony",
        hint: "A serious crime, typically one involving violence."
    },
    {
        word: "misdemeanor",
        hint: "A minor wrongdoing."
    },
    {
        word: "infraction",
        hint: "A violation or infringement of a law or agreement."
    },
    {
        word: "statute",
        hint: "A written law passed by a legislative body."
    },
    {
        word: "ordinance",
        hint: "A piece of legislation enacted by a municipal authority."
    },
    {
        word: "regulation",
        hint: "A rule or directive made and maintained by an authority."
    },
    {
        word: "code",
        hint: "A systematic collection of laws or regulations."
    }
]
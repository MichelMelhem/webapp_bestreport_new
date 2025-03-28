import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";


export default function CGV() {
    return (
        <div>
            <AppBar />

            <div className="max-w-4xl mx-auto px-4 py-20  bg-white print:p-0 print:max-w-none">

                <div className="flex justify-between items-center mb-6 print:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 print:text-2xl">
                        Conditions générales d'utilisation
                    </h1>
                </div>

                <div className="prose prose-sm sm:prose lg:prose-lg max-w-none print:prose-sm">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 print:text-xl print:mb-4">
                        Conditions générales d'utilisation de la Plateforme BestReport
                    </h2>

                    <section className="mb-8 print:mb-4" id="objet">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">1 – Objet</h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            La plateforme BestReport (ci-après «&nbsp;la Plateforme») permet à des architectes et maîtres-d'œuvre
                            (ci-après «&nbsp;les Utilisateurs&nbsp;») d'effectuer le suivi de leurs chantiers.
                        </p>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Elle est accessible via une application mobile, application bureautique ou une application web en ligne
                            (ci-après «&nbsp;l'Application&nbsp;Mobile» , «&nbsp;l'Application Bureautique&nbsp;» et
                            «&nbsp;l'Application Web&nbsp;»). Un site internet présente cette application : https://www.BestReport.com
                            (ci-après : le «&nbsp;Site&nbsp;»).
                        </p>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Les présentes conditions générales ont pour objet de définir les modalités et conditions d'utilisation des
                            services proposés par la Plateforme (ci-après&nbsp;: les «&nbsp;Services&nbsp;») ainsi que de définir les
                            droits et obligations des parties dans ce cadre.
                        </p>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Elles sont accessibles à tout moment par un lien direct en bas de page du Site, dans l'Application Mobile
                            dans l'onglet préférences et dans l'Application Web en bas de page.
                        </p>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Elles peuvent être complétées le cas échéant par des conditions d'utilisation particulières à certains
                            Services, lesquelles complètent les présentes conditions générales et, en cas de contradiction, prévalent
                            sur ces dernières.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="exploitant">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            2 – Exploitant de la Plateforme, contact
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            La Plateforme est exploitée par la société BestReport, société par actions simplifiée, immatriculée au
                            Registre du Commerce et des Sociétés de Rennes sous le n° 531 980 605, ayant son siège social au 61 Rue Jean
                            Guéhenno – 35700 Rennes (ci-après : « BestReport »).
                        </p>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            BestReport peut être contactée aux coordonnées suivantes, notamment pour toute réclamation :<br />
                            Adresse postale : 61 Rue Jean Guéhenno, 35700 Rennes
                            <br />
                            Téléphone : +33 2 90 38 04 48
                            <br />
                            Adresse électronique : contact@BestReport.com
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="acces">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            3 – Accès à la Plateforme et aux Services
                        </h3>

                        <h4 className="text-lg font-medium text-gray-800 mb-3 print:text-base print:mb-2" id="capacite-juridique">
                            3.1.Capacité juridique
                        </h4>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">La Plateforme est accessible :</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 print:mb-2 print:text-sm">
                            <li className="mb-2 print:mb-1">
                                A toute personne physique disposant de la pleine capacité juridique pour s'engager au titre des présentes
                                conditions générales.
                            </li>
                            <li className="mb-2 print:mb-1">
                                A toute personne morale agissant par l'intermédiaire d'une personne physique disposant de la capacité
                                juridique pour contracter au nom et pour le compte de la personne morale.
                            </li>
                        </ul>

                        <h4
                            className="text-lg font-medium text-gray-800 mb-3 print:text-base print:mb-2"
                            id="plateforme-professionnels"
                        >
                            3.2.Plateforme réservés aux professionnels
                        </h4>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            La Plateforme s'adresse exclusivement aux professionnels, entendus comme toutes personnes physiques ou
                            morales exerçant une activité rémunérée de façon non occasionnelle notamment dans tous les secteurs du
                            bâtiment en ce compris, les architectes, les chefs de chantiers, les maîtres-d'œuvre.
                        </p>

                        <h4 className="text-lg font-medium text-gray-800 mb-3 print:text-base print:mb-2" id="telechargement">
                            3.3.Téléchargement de l'Application
                        </h4>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'Application Mobile est téléchargeable et utilisable sur téléphones et tablettes mobiles, dans les systèmes
                            d'exploitation IOS et Windows. L'Application bureautique est téléchargeable et utilisable sur les systèmes
                            d'exploitation Windows et Mac. L'Application Web est utilisable directement en ligne sur les systèmes
                            d'exploitation Windows ou Mac en utilisant&nbsp; les navigateurs web principaux dans leurs versions les plus
                            récentes : Chrome, Firefox, Safari, Edge.
                        </p>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'Utilisateur doit télécharger l'Application Mobile depuis la plateforme de téléchargement d'applications
                            appropriée.
                        </p>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Ce téléchargement est soumis aux conditions d'utilisation propres à ladite plateforme de téléchargement.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="acceptation">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            4.Acceptation des conditions générales
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'acceptation des présentes conditions générales est matérialisée par la validation de l'inscription sur la
                            page d'inscription de l'Application Mobile, Application Bureautique ou Application Web. Cette acceptation ne
                            peut être que pleine et entière. Toute adhésion sous réserve est considérée comme nulle et non avenue.
                            L'Utilisateur qui n'accepte pas d'être lié par les présentes conditions générales ne doit pas accéder à la
                            Plateforme ni utiliser les Services.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="inscription">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            5.Inscription sur la Plateforme
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            5.1.Pour utiliser la Plateforme, l'Utilisateur doit :
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 print:mb-2 print:text-sm">
                            <li className="mb-2 print:mb-1">soit remplir le formulaire d'inscription ;</li>
                            <li className="mb-2 print:mb-1">
                                soit être inscrit à l'un des sites tiers indiqués sur la Plateforme, tels que Facebook Connect et Google
                                Connect, et utiliser ses identifiants de connexion audit site tiers pour s'inscrire. Dans ce cas, il doit
                                fournir à BestReport le cas échéant les informations complémentaires demandées. L'Utilisateur autorise
                                expressément BestReport à accéder aux données de son compte sur le site tiers concerné.
                            </li>
                        </ul>

                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Dans tous les cas, l'Utilisateur doit fournir à BestReport l'ensemble des informations marquées comme
                            obligatoires. Toute inscription incomplète ne sera pas validée.
                        </p>

                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'inscription entraîne automatiquement l'ouverture d'un compte au nom de l'Utilisateur (ci-après : le «
                            Compte »), lui donnant accès à un espace personnel (ci-après : l'« Espace Personnel ») qui lui permet de
                            gérer son utilisation des Services sous une forme et selon les moyens techniques que BestReport juge les
                            plus appropriés pour rendre lesdits Services.
                        </p>

                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'Utilisateur garantit que toutes les informations qu'il donne dans le formulaire d'inscription sont
                            exactes, à jour et sincères et ne sont entachées d'aucun caractère trompeur.
                        </p>

                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Il s'engage à mettre à jour ces informations dans son Espace Personnel en cas de modifications, afin
                            qu'elles correspondent toujours aux critères susvisés.
                        </p>
                    </section>

                    {/* Additional sections would continue here */}

                    <section className="mb-8 print:mb-4" id="entree-vigueur">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">20 – Entrée en vigueur</h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Les présentes conditions générales sont entrées en vigueur le 1er mai 2015.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}


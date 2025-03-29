import AppBar from "@/components/layout/AppBar"
import Footer from "@/components/layout/Footer"

export default function CGU() {
    return (
        <div>
            <AppBar />

            <div className="max-w-4xl mx-auto px-4 py-20 bg-white print:p-0 print:max-w-none">
                <div className="flex justify-between items-center mb-6 print:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 print:text-2xl">
                        Conditions Générales d'Utilisation
                    </h1>
                </div>

                <div className="prose prose-sm sm:prose lg:prose-lg max-w-none print:prose-sm">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 print:text-xl print:mb-4">
                        CGU de Michel Melhem – Licence Best Report
                    </h2>

                    <section className="mb-8 print:mb-4" id="objet">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            1 – Objet
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités d'accès et d'utilisation de la plateforme de gestion des licences pour l'application Best Report, proposée par Michel Melhem, auto-entrepreneur.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="definitions">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            2 – Définitions
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Dans les présentes CGU, les termes suivants auront la signification suivante :
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 print:mb-2 print:text-sm">
                            <li className="mb-2 print:mb-1">
                                <strong>Plateforme :</strong> l'ensemble des services accessibles via le site et l'application Best Report.
                            </li>
                            <li className="mb-2 print:mb-1">
                                <strong>Licence :</strong> le droit non exclusif d'accès et d'utilisation de l'application accordé après achat.
                            </li>
                            <li className="mb-2 print:mb-1">
                                <strong>Utilisateur :</strong> toute personne physique ou morale utilisant la plateforme conformément aux présentes CGU.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8 print:mb-4" id="acces">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            3 – Accès à la Plateforme
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'accès à la plateforme est réservé aux Utilisateurs ayant préalablement accepté les présentes CGU. L'inscription et la création d'un compte utilisateur sont nécessaires pour bénéficier des services et de l'activation des licences.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="inscription">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            4 – Inscription et gestion du compte
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Pour accéder à la plateforme, l'Utilisateur doit remplir le formulaire d'inscription en fournissant des informations exactes et à jour. Toute modification ultérieure devra être mise à jour dans l'Espace Personnel.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="utilisation">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            5 – Utilisation des licences
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            La licence concède à l'Utilisateur un droit d'utilisation non exclusif et non transférable de l'application Best Report, selon les modalités définies lors de l'achat. Toute utilisation non conforme ou frauduleuse est strictement interdite.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="responsabilite">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            6 – Responsabilités de l'Utilisateur
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'Utilisateur est seul responsable de la préservation de la confidentialité de ses identifiants et s'engage à notifier immédiatement Michel Melhem en cas d'utilisation non autorisée de son compte.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="propriete-intellectuelle">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            7 – Propriété intellectuelle
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            L'ensemble des contenus disponibles sur la plateforme, y compris l'application Best Report, est protégé par des droits de propriété intellectuelle appartenant à Michel Melhem ou à ses partenaires. Toute reproduction ou utilisation non autorisée est interdite.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="donnees">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            8 – Données personnelles et confidentialité
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Les informations personnelles collectées lors de l'inscription et de l'utilisation de la plateforme sont traitées conformément à la réglementation en vigueur sur la protection des données. Veuillez consulter la Politique de Confidentialité pour plus d'informations.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="modification">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            9 – Modification des CGU
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Michel Melhem se réserve le droit de modifier les présentes CGU à tout moment. Les modifications seront affichées sur la plateforme et, en continuant à utiliser celle-ci, l'Utilisateur accepte tacitement les nouvelles conditions.
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="loi">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            10 – Loi applicable et juridiction
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Les présentes CGU sont régies par la loi française. En cas de litige, les tribunaux compétents seront ceux du ressort de [Votre lieu de juridiction].
                        </p>
                    </section>

                    <section className="mb-8 print:mb-4" id="entree-vigueur">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
                            11 – Entrée en vigueur
                        </h3>
                        <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
                            Les présentes Conditions Générales d'Utilisation entrent en vigueur dès leur acceptation par l'Utilisateur lors de sa première utilisation de la plateforme.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

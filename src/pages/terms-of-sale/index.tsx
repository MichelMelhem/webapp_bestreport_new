import AppBar from "@/components/layout/AppBar"
import Footer from "@/components/layout/Footer"

export default function TermsOfSale() {
  return (
    <div>
      <AppBar />

      <div className="max-w-4xl mx-auto px-4 py-20 bg-white print:p-0 print:max-w-none">
        <div className="flex justify-between items-center mb-6 print:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 print:text-2xl">
            Conditions Générales de Vente
          </h1>
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none print:prose-sm">
          <section className="mb-8 print:mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              Préambule
            </h2>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Les présentes Conditions Générales de Vente (CGV) régissent les ventes de licences
              pour l’application Best Report, développée par Michel Melhem. En passant commande,
              vous acceptez sans réserve ces CGV.
            </p>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Ces CGV peuvent être modifiées à tout moment, sans préavis. Les conditions applicables
              sont celles en vigueur au moment de la commande.
            </p>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              En cas de contradiction entre les CGV et les conditions particulières, ces dernières
              prévaudront.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="objet">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              1 – Objet
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Les présentes Conditions Générales de Vente (CGV) définissent l’ensemble des modalités
              et conditions applicables à la vente de licences pour l’application Best Report,
              proposée par l’auto-entrepreneur Michel Melhem.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="vendeur">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              2 – Informations sur le vendeur
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Le vendeur est Michel Melhem, auto-entrepreneur inscrit sous le numéro 93103554700013,
              dont le siège social est situé à [Adresse du siège].
              <br />
              Pour toute information ou réclamation, vous pouvez le contacter par email à{" "}
              <a href="mailto:contact@bestreport.fr">contact@bestreport.fr</a> ou par téléphone au
              +33 7 44 94 32 98.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="produits">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              3 – Description des produits
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Les produits vendus consistent en des licences d’utilisation de l’application Best
              Report. Chaque licence confère à l’acheteur le droit d’accéder aux fonctionnalités de
              l’application selon les modalités définies lors de l’achat (durée d’utilisation,
              nombre d’utilisateurs, etc.).
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="commande">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              4 – Commande
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              La commande de licences peut être passée via le site internet ou tout autre canal de
              vente mis à disposition par Michel Melhem. La commande sera considérée comme
              définitive dès confirmation par le vendeur.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="prix">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              5 – Prix
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Les prix des licences sont indiqués en euros, toutes taxes comprises (TTC), et sont
              ceux en vigueur au moment de la commande. Michel Melhem se réserve le droit de
              modifier ses prix à tout moment, sans préavis.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="paiement">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              6 – Modalités de paiement
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Le paiement s’effectue en ligne, par carte bancaire ou tout autre moyen de paiement
              sécurisé proposé sur le site. La commande ne sera validée qu’après confirmation
              effective du paiement.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="livraison">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              7 – Accès aux licences
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Suite à la confirmation de la commande et du paiement, une licence d’utilisation de
              l’application Best Report sera délivrée à l’acheteur sous forme d’un code d’activation
              ou d’un lien, envoyé par email. L’activation de la licence est immédiate dès réception
              de ces informations.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="retractation">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              8 – Droit de rétractation
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Conformément aux dispositions légales, l’acheteur bénéficie d’un délai de rétractation
              de 14 jours à compter de la réception de la licence, sauf en cas d’exécution complète
              de la prestation avant l’expiration de ce délai.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="garanties">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              9 – Garanties et responsabilité
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Michel Melhem s’engage à fournir l’assistance nécessaire pour l’activation et
              l’utilisation de la licence. En aucun cas, sa responsabilité ne saurait être engagée
              pour tout dommage direct ou indirect lié à l’utilisation de la licence ou de
              l’application.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="propriete">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              10 – Propriété intellectuelle
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Tous les droits de propriété intellectuelle afférents à l’application Best Report
              restent la propriété exclusive de Michel Melhem ou de ses partenaires. La vente d’une
              licence n’entraîne aucun transfert de ces droits.
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="loi">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              11 – Loi applicable et juridiction
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Les présentes CGV sont régies par la loi française. En cas de litige, après tentative
              de résolution amiable, les tribunaux compétents seront ceux du ressort de [Votre lieu
              de juridiction].
            </p>
          </section>

          <section className="mb-8 print:mb-4" id="entree-vigueur">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 print:text-lg print:mb-3">
              12 – Entrée en vigueur
            </h3>
            <p className="text-gray-700 mb-4 print:mb-2 print:text-sm">
              Les présentes Conditions Générales de Vente entrent en vigueur dès leur acceptation
              par l’acheteur lors de la validation de la commande.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

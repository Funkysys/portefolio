const MentionsLegales = () => (
  <main className="max-w-3xl mx-auto px-4 py-10 text-zinc-100">
    <h1 className="text-3xl font-bold mb-6 ">Mentions légales</h1>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">1. Éditeur du site</h2>
      <p>
        <strong>Nom :</strong> Antoine Delbos
        <br />
        <strong>Adresse :</strong> 2 rue Lancefoc, 31000 Toulouse
        <br />
        <strong>Email :</strong> antoine.delbos.developpement@gmail.com
        <br />
        <strong>Site :</strong>{" "}
        <a
          href="https://antoinedelbos-portefolio.vercel.app/"
          className="underline "
        >
          antoinedelbos-portefolio.vercel.app
        </a>
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">2. Hébergement</h2>
      <p>
        <strong>Hébergeur :</strong> Vercel Inc.
        <br />
        <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723,
        USA
        <br />
        <strong>Site :</strong>{" "}
        <a href="https://vercel.com" className="underline ">
          vercel.com
        </a>
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">
        3. Propriété intellectuelle
      </h2>
      <p>
        L&apos;ensemble du contenu du site (textes, images, graphismes, logo,
        icônes, etc.) est la propriété exclusive d&apos;Antoine Delbos, sauf
        mention contraire. Toute reproduction, représentation, modification,
        publication, adaptation de tout ou partie des éléments du site, quel que
        soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
        écrite préalable.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">4. Données personnelles</h2>
      <p>
        Les informations recueillies via le formulaire de contact sont destinées
        uniquement à la prise de contact et ne sont jamais transmises à des
        tiers. Conformément à la loi &quot;Informatique et Libertés&quot; et au
        RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
        suppression de vos données. Pour exercer ce droit, contactez :
        antoine.delbos.developpement@gmail.com
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
      <p>
        Le site peut utiliser des cookies pour améliorer l&apos;expérience
        utilisateur et réaliser des statistiques de visites. Vous pouvez
        configurer votre navigateur pour refuser les cookies.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">
        6. Limitation de responsabilité
      </h2>
      <p>
        Antoine Delbos ne pourra être tenu responsable des dommages directs et
        indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès
        au site, ni de l&apos;apparition d&apos;un bug ou d&apos;une
        incompatibilité.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">7. Droit applicable</h2>
      <p>
        Tout litige en relation avec l&apos;utilisation du site est soumis au
        droit français. Il est fait attribution exclusive de juridiction aux
        tribunaux compétents de Toulouse.
      </p>
    </section>
  </main>
);

export default MentionsLegales;

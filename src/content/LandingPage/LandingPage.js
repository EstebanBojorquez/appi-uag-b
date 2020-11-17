import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Inicio</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">Bienvenido</h1>
        </div>
        <div className="bx--col-lg-8 bx--col-md-4">
          <p>
            Bienvenido al sistema de Información de la Dirección de
            Investigación de la Universidad Autónoma de Guadalajara.
          </p>
          <p>
            Mediante esta herramienta, usted podrá dar seguimiento a sus
            Proyectos de Investigación, Tesis, Publicaciones y/o Currículum
            Vitae.
          </p>
          <p>
            Esperamos que los datos que proporcionamos en el mismo le sean de
            utilidad, cualquier duda, comentario o aclaración al correo
            electrónico:{' '}
            <a href="mailto:investigacion@edu.uag.mx">
              investigacion@edu.uag.mx
            </a>{' '}
            o a la extensión 35811.
          </p>
        </div>
      </div>
      <InfoSection heading="Secciones" className="landing-page__r3">
        <InfoCard prefix="01" heading="Datos generales" />
        <InfoCard prefix="02" heading="Formación Académica" />
        <InfoCard prefix="03" heading="Formación de capital humano" />
        <InfoCard
          prefix="04"
          heading="Producción científica, tecnológica y de innovación"
          offset
        />
        <InfoCard prefix="05" heading="Difusión y divulgación" />
        <InfoCard prefix="06" heading="Vinculación" />
        <InfoCard prefix="07" heading="Proyectos de investigación" offset />
        <InfoCard prefix="08" heading="Lineas de investigación" />
        <InfoCard
          prefix="09"
          heading="Participación en la vida institucional"
        />
      </InfoSection>
    </div>
  );
};

export default LandingPage;

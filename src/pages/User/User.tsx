import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import styles from "./user.module.css";
import { UserHeader } from "../../components/layout-components/UserHeader";

export function User() {
  const user = useUser();

  return (
    <>
      {!user && <Navigate to="/" />}
      <UserHeader />
      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.text}>
              <p className={styles.paragraph}>
                Клиенты видят в нем эксперта по вопросам разработки комплексных
                решений финансовых продуктов, включая такие аспекты, как
                организационная структура, процессы, аналитика и ИТ-компоненты.
                Он помогает клиентам лучше понимать структуру рисков их бизнеса,
                улучшать процессы за счет применения новейших технологий и
                увеличивать продажи, используя самые современные аналитические
                инструменты.
              </p>
              <p className={styles.paragraph}>
                В работе с клиентами недостаточно просто решить конкретную
                проблему или помочь справиться с трудностями. Не менее важно
                уделять внимание обмену знаниями: "Один из самых позитивных
                моментов — это осознание того, что ты помог клиенту перейти на
                совершенно новый уровень компетентности, уверенность в том, что
                после окончания проекта у клиента есть все необходимое, чтобы
                дальше развиваться самостоятельно".
              </p>
              <p className={styles.paragraph}>
                Помимо разнообразных проектов для клиентов финансового сектора,
                Сорин ведет активную предпринимательскую деятельность. Он
                является совладельцем сети клиник эстетической медицины в
                Швейцарии, предлагающей инновационный подход к красоте, а также
                инвестором других бизнес-проектов.
              </p>
            </div>
            <div className={styles.info}>
              <p className={styles.email}>
                <MailIcon />
                <a className={styles.emailLink} href={"mailto:" + user?.email}>
                  {user?.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

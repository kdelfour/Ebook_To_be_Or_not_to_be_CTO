# Architecture et choix techniques

> **Objectif :** Prendre les bonnes décisions techniques

Bon, on attaque le dur : les décisions techniques. Parce que contrairement à ce qu'on pourrait croire, être CTO ce n'est pas juste manager H24. C'est surtout prendre des décisions techniques qui vont impacter votre équipe pendant des années.

Et vous savez quoi ? il n'y a jamais de "bonne" décision. Il n'y a que des décisions adaptées au contexte, avec des trade-offs assumés. Le secret c'est de prendre des décisions éclairées, documentées, et qu'on peut faire évoluer.

## Dette technique : la gérer sans la subir

### Comprendre ce qu'est vraiment la dette technique

La dette technique, c'est comme la dette financière : un peu c'est bien, trop c'est mortel.

**Définition simple :** Code qui fonctionne aujourd'hui mais qu'on sait qu'il faudra refactoriser demain.

**Les différents types de dette :**

**1. Dette intentionnelle et prudente**
*"On va faire vite et sale pour livrer, mais on sait exactement ce qu'il faudra reprendre."*

**Exemple :** Chez iBubble, on a hardcodé des valeurs de calibration pour sortir le premier prototype. On a documenté que c'était temporaire et on l'a refactorisé 2 mois plus tard.

**2. Dette intentionnelle et imprudente**
*"On livre maintenant, on verra plus tard."*

**Exemple :** Pas de tests, pas de documentation, pas de plan de refactoring. Ça marche aujourd'hui, tant mieux.

**3. Dette involontaire et prudente**
*"Maintenant qu'on comprend mieux le problème, on voit qu'on aurait pu faire différemment."*

**Exemple :** Votre architecture microservices qui semblait géniale il y a 2 ans, mais qui ne scale pas comme prévu.

**4. Dette involontaire et imprudente**
*"Qu'est-ce que c'est que ce bordel ?! Qui a écrit ça ?!"*

**Exemple :** Code legacy qu'on comprend plus, écrit par des développeurs partis depuis longtemps.

### Mesurer la dette technique

**Métriques techniques :**
- **Code coverage :** <70% = dette sur les tests
- **Complexité cyclomatique :** >10 par fonction = dette structurelle
- **Code duplication :** >5% = dette de réutilisation
- **Dependencies obsolètes :** >6 mois = dette de maintenance

**Métriques impact :**
- **Vélocité de développement :** Est-ce que ça ralentit ?
- **Bug rate :** Est-ce que ça créé plus de bugs ?
- **Onboarding time :** Est-ce que c'est plus dur à comprendre ?
- **Developer satisfaction :** Est-ce que l'équipe en souffre ?

### Stratégies de gestion

**La règle des 20%**
20% du temps de développement dédié à la réduction de dette technique. Non négociable.

**Le boy scout rule**
"Laisse le code dans un meilleur état que tu l'as trouvé." Chaque PR améliore un petit truc.

**La dette stratégique**
Parfois, il faut assumer de la dette pour livrer un objectif business critique.

**Framework de décision :**

```
Impact business urgent + Solution technique complexe = Dette acceptable
Impact business faible + Solution technique simple = Pas de dette
```

### Le refactoring intelligent

**Quand refactoriser :**
- Avant d'ajouter une nouvelle feature dans une zone pourrie
- Quand un module cause >3 bugs par mois
- Quand l'onboarding d'un développeur bloque sur un code spécifique
- Quand les estimations explosent à cause de la complexité

**Comment refactoriser :**

**1. Refactoring en parallèle**
Nouvelle implémentation en parallèle de l'ancienne, switch progressif.

**2. Strangler pattern**
Nouvelle architecture qui "étrangle" progressivement l'ancienne.

**3. Refactoring incrémental**
Petites améliorations à chaque passage dans le code.

**Exemple concret - Refactoring du module de facturation chez X :**

**Situation :** Module legacy JS de 3000 lignes, 0 test, causait 50% des bugs prod.

**Approche :** 
1. Ajout de tests de régression (2 semaines)
2. Extraction des fonctions pures (1 semaine) 
3. Réimplémentation des services un par un (6 semaines)
4. Migration progressive des appels (2 semaines)
5. Suppression de l'ancien code (1 semaine)

**Résultat :** 0 bug en production, vélocité x2 sur les nouvelles features facturation.

## Choix technologiques : frameworks, cloud, outils

### Le framework de décision technique

Arrêtez de choisir une techno parce que "c'est cool" ou "tout le monde l'utilise". Voici un framework pour prendre des décisions éclairées.

**1. Définir le problème clairement**
- Qu'est-ce qu'on veut résoudre exactement ?
- Quelles sont les contraintes non-négociables ?
- Quel est le contexte (équipe, budget, timeline) ?

**2. Lister les critères de décision**
- **Performance :** Throughput, latence, memory footprint
- **Scalabilité :** Horizontale, verticale, limites connues
- **Maintenabilité :** Courbe d'apprentissage, documentation, communauté
- **Écosystème :** Libraries, outils, intégrations
- **Maturité :** Stabilité, évolution, support long terme
- **Coût :** Licensing, hosting, formation, recrutement

**3. Pondérer les critères selon votre contexte**

**Exemple - Choix de framework frontend :**

| Critère | Poids | React | Vue | Angular |
|---------|-------|-------|-----|---------|
| Vitesse développement | 30% | 7/10 | 9/10 | 6/10 |
| Écosystème | 25% | 10/10 | 7/10 | 8/10 |
| Performance | 20% | 8/10 | 8/10 | 7/10 |
| Expertise équipe | 15% | 9/10 | 3/10 | 5/10 |
| Maintenabilité | 10% | 8/10 | 8/10 | 9/10 |
| **Score total** | | **8.1** | **7.5** | **6.6** |

**4. Faire un POC (Proof of Concept)**
Test sur un petit périmètre avec métriques objectives.

**5. Décision et documentation**
Choisir, documenter pourquoi, et planifier la révision.

### Erreurs classiques dans les choix techniques

**L'effet de mode**
*"Il faut qu'on fasse du Kubernetes comme Netflix !"*

**Réalité :** Netflix a 1000+ développeurs et des problèmes de scale unique. Vous avez peut-être 10 développeurs et d'autres priorités.

**Le syndrome NIH (Not Invented Here)**
*"On va développer notre propre framework, ça sera mieux adapté."*

**Réalité :** Maintenir un framework maison coûte 10x plus cher qu'adapter un framework existant.

**Le CV-driven development**
*"J'aimerais bien apprendre Rust, on pourrait refaire le backend avec ?"*

**Réalité :** Les choix techniques doivent servir le business, pas votre CV.

**La paralysie de l'analyse**
*"On va évaluer pendant 6 mois pour prendre la meilleure décision."*

**Réalité :** Dans 6 mois, le contexte aura changé. Mieux vaut une décision moyenne rapide qu'une décision parfaite tardive.

**Mon erreur chez Aztec :** J'ai voulu utiliser OGroovy pour les performances alors qu'on était une équipe Java. Résultat : 3 mois de galère, code impossible à maintenir, migration vers Java finalement.

### Cloud : AWS, Azure, GCP ou autre ?

**Le paradoxe du choix cloud :** Ils font tous la même chose, mais différemment.

**AWS :** Le précurseur, plus de services, mais plus complexe
**Azure :** Bien intégré à l'écosystème Microsoft
**GCP :** Plus simple, meilleur pour l'IA/ML, moins de services

**Critères de choix réels :**

**1. Compétences de l'équipe**
Votre équipe connaît déjà un cloud ? Restez dessus sauf raison majeure.

**2. Intégrations existantes**
Vous êtes dans l'écosystème Microsoft ? Azure.
Vous faites de l'IA/ML ? GCP.
Vous voulez le plus de choix ? AWS.

**3. Pricing pour votre usage**
Simulez sur vos vrais besoins, pas sur des exemples théoriques.

**4. Support et SLA**
Si vous êtes une entreprise critique, le support premium peut justifier un surcoût.

**Mon expérience multi-cloud :**
- **Hiveo :** AWS puis Azure lors de la fusion
- **JOBO Interim :** Azure

**Conseil :** Commencez par un cloud, maîtrisez-le, puis évaluez si le multi-cloud vous apporte vraiment quelque chose.

### Microservices vs monolithe : la vraie question

**Spoiler :** Ce n'est pas une question technique, c'est une question organisationnelle.

**Monolithe modulaire : quand c'est le bon choix**
- Équipe < 20 développeurs
- Domaine métier simple et bien défini
- Besoin de vélocité maximum
- Compétences DevOps limitées

**Avantages :**
- Déploiement simple
- Debugging facile
- Performance optimale
- Pas de complexité réseau

**Microservices : quand ça fait sens**
- Équipe > 30 développeurs
- Domaines métier multiples et complexes
- Besoin de scalabilité différenciée
- Maturité DevOps élevée

**Avantages :**
- Autonomie des équipes
- Scalabilité indépendante
- Résilience par isolation
- Flexibilité technologique

**La transition progressive :**

**Étape 1 :** Monolithe modulaire bien structuré
**Étape 2 :** Extraction des services périphériques (auth, notifications)
**Étape 3 :** Séparation des domaines métier principaux
**Étape 4 :** Microservices matures avec gouvernance

## Scalabilité et performance

### Comprendre la scalabilité avant d'optimiser

**Scalabilité verticale (Scale Up)**
Ajouter plus de RAM/CPU à la même machine.
*Simple mais limité.*

**Scalabilité horizontale (Scale Out)**
Ajouter plus de machines.
*Complexe mais illimité.*

**Les vrais bottlenecks (par ordre de fréquence) :**

**1. Base de données (80% des cas)**
- Requêtes non optimisées
- Absence d'index
- N+1 queries
- Locks et transactions trop longues

**2. Réseau (15% des cas)**
- Trop d'appels API
- Payload trop lourdes
- Absence de cache
- CDN mal configuré

**3. CPU/Mémoire (5% des cas)**
- Algorithmes inefficaces
- Memory leaks
- Calculs non optimisés

**Mon expérience chez Hiveo :** On pensait avoir un problème de CPU/RAM. Après investigation : une requête SQL qui faisait 50 jointures. Fix en 2 heures, performance x100.

### Stratégies de performance

**1. Mesurer avant d'optimiser**

```bash
# APM tools
- New Relic / Datadog pour l'applicatif
- pganalyze / MongoDB Compass pour la DB
- Chrome DevTools pour le frontend

# Métriques clés
- Response time P95 (pas la moyenne!)
- Throughput (req/sec)
- Error rate
- Resource utilization
```

**2. Cache intelligent**

**Niveaux de cache :**
- **CDN :** Assets statiques (images, CSS, JS)
- **Reverse proxy :** Pages complètes (Nginx, Varnish)
- **Application :** Données calculées (Redis, Memcached)
- **Database :** Query cache (paramétrage DB)

**Règle du cache :** Cache tout ce qui coûte cher à calculer et change peu souvent.

**3. Optimisation base de données**

**Index obligatoires :**
- Toutes les foreign keys
- Tous les champs dans les WHERE
- Tous les champs dans les ORDER BY

**Requêtes efficaces :**
```sql
-- ❌ N+1 query
SELECT * FROM users;
-- puis pour chaque user
SELECT * FROM orders WHERE user_id = ?

-- ✅ Join ou eager loading
SELECT users.*, orders.* 
FROM users 
LEFT JOIN orders ON users.id = orders.user_id;
```

**4. Architecture pour la performance**

**Read replicas :** Séparer lecture/écriture
**Sharding :** Partitionner les données
**CQRS :** Séparer Command/Query
**Event sourcing :** Pour les systèmes complexes

### Monitoring et observabilité

**Les 3 piliers de l'observabilité :**

**1. Logs**
- Structured logging (JSON)
- Centralisation (ELK, Splunk)
- Corrélation avec trace IDs

**2. Métriques**
- Business metrics (signups, revenue)
- Technical metrics (latency, errors)
- Infrastructure metrics (CPU, memory)

**3. Traces**
- Distributed tracing
- Request flow analysis
- Performance bottleneck identification

**Stack observabilité recommandée :**
- **Logs :** ELK Stack ou Datadog
- **Metrics :** Prometheus + Grafana ou Datadog
- **Traces :** Jaeger ou New Relic
- **Alerting :** PagerDuty ou OpsGenie

**Alertes intelligentes :**
```yaml
# ❌ Alerte stupide
cpu_usage > 80%

# ✅ Alerte intelligente  
error_rate > 1% AND response_time_p95 > 2s FOR 5 minutes
```

## Sécurité pour les non-experts sécurité

### Les fondamentaux non-négociables

En tant que CTO, vous n'êtes pas un expert sécurité, mais vous devez connaître les bases.

**1. Authentification et autorisation**

**Authentification forte :**
- Mots de passe complexes + 2FA obligatoire
- Rotation des tokens/clés
- Sessions sécurisées (HTTPS only, secure cookies)

**Autorisation granulaire :**
- Principe du moindre privilège
- RBAC (Role-Based Access Control)
- Révision régulière des accès

**2. Chiffrement**

**En transit :** HTTPS partout, TLS 1.3 minimum
**Au repos :** Chiffrement des bases de données et backups
**Application :** Données sensibles chiffrées côté application

**3. Gestion des secrets**

**❌ Jamais :**
```javascript
const API_KEY = "sk-1234567890abcdef"; // En dur dans le code
process.env.DATABASE_URL = "postgres://user:password@host"; // Dans .env versionné
```

**✅ Toujours :**
- Vault (HashiCorp) ou équivalent cloud
- Rotation automatique des secrets
- Secrets injectés au runtime

**4. Sécurité des dépendances**

```bash
# Audit régulier des vulnérabilités
npm audit
bundle audit
pip-audit

# Mise à jour automatique
dependabot (GitHub)
renovate
```

### OWASP Top 10 : les essentiels

**1. Injection (SQL, NoSQL, LDAP)**
```sql
-- ❌ Vulnérable
query = "SELECT * FROM users WHERE id = " + user_input

-- ✅ Sécurisé
query = "SELECT * FROM users WHERE id = ?"
execute(query, [user_input])
```

**2. Broken Authentication**
- Session management sécurisé
- Protection contre le brute force
- Logout proper

**3. Sensitive Data Exposure**
- Inventaire des données sensibles
- Chiffrement adapté
- Anonymisation des logs

**4. XML External Entities (XXE)**
- Validation stricte des inputs XML
- Désactivation des entités externes

**5. Broken Access Control**
- Vérification des permissions à chaque requête
- Tests d'autorisation automatisés

**Mon approche sécurité chez JOBO Interim :**
- Security reviews obligatoires sur les PRs sensibles
- Pentesting externe annuel
- Formation sécurité pour tous les développeurs
- Bug bounty pour encourager la détection

### Compliance et réglementation

**RGPD (si vous traitez des données EU) :**
- Consentement explicite
- Droit à l'oubli implémenté
- Privacy by design
- DPO nommé si nécessaire

**PCI DSS (si vous traitez des paiements) :**
- Jamais stocker les CVV
- Tokenisation des cartes
- Réseau segmenté
- Audits réguliers

**SOC 2 (si vous vendez B2B US) :**
- Contrôles d'accès documentés
- Monitoring des activités
- Backup et recovery testés
- Incident response plan

**ISO 27001 (certification sécurité) :**
- SMSI (Système de Management de la Sécurité de l'Information)
- Analyse de risques formelle
- Plan de continuité d'activité

## Framework de prise de décision technique

### Architecture Decision Records (ADR)

Documentez vos décisions techniques importantes pour éviter de refaire les mêmes erreurs.

**Template ADR :**

```markdown
# ADR-001 : Migration vers React

## Statut
Accepté

## Contexte
Notre frontend jQuery devient difficile à maintenir avec la croissance de l'équipe. 
Les nouvelles features prennent 2x plus de temps à développer qu'avant.
L'équipe demande un framework moderne pour améliorer la productivité.

## Options considérées
1. **React** - Écosystème riche, expertise équipe
2. **Vue.js** - Plus simple, courbe d'apprentissage douce  
3. **Angular** - Framework complet, TypeScript natif
4. **Garder jQuery** - Aucun coût de migration

## Décision
Migration progressive vers React sur 6 mois.

## Rationale
- 80% de l'équipe a déjà de l'expérience React
- Écosystème le plus riche pour nos besoins
- Migration progressive possible (coexistence React/jQuery)
- Recrutement plus facile avec React

## Conséquences
**Positives :**
- Productivité accrue après la migration
- Code plus maintenable et testable
- Attraction/rétention des développeurs

**Négatives :**
- Coût de migration (3 mois-homme estimés)
- Période de coexistence complexe
- Formation nécessaire pour 2 développeurs

## Implémentation
- Phase 1 : Nouvelles features en React (mois 1-2)
- Phase 2 : Migration des pages principales (mois 3-4)  
- Phase 3 : Migration du legacy restant (mois 5-6)

## Métriques de succès
- Vélocité développement +30% à 6 mois
- Bug rate -50% sur les nouvelles features
- Satisfaction développeur >8/10 en fin de migration

## Révision
Révision prévue dans 6 mois pour évaluer les résultats.

**Date :** 15 janvier 2024
**Décideur :** Kevin (CTO)
**Contributeurs :** Équipe Tech Lead
```

### Checklist d'architecture

```markdown
## Checklist : "Mon architecture est-elle solide ?"

### 🏗️ Design et modularité

- [ ] **Séparation des responsabilités claire**
  - Chaque module a une responsabilité unique
  - Interfaces bien définies entre modules
  - Couplage faible, cohésion forte

- [ ] **Architecture en couches cohérente**
  - Présentation → Business → Data
  - Pas de dépendances circulaires
  - Chaque couche abstraite des détails inférieurs

- [ ] **Patterns architecturaux appropriés**
  - Patterns adaptés au contexte (MVC, MVVM, Clean Architecture)
  - Consistance dans l'application des patterns
  - Documentation des choix architecturaux

### 📊 Performance et scalabilité

- [ ] **Stratégie de cache définie**
  - Cache applicatif pour les données coûteuses
  - CDN pour les assets statiques
  - Stratégie d'invalidation claire

- [ ] **Base de données optimisée**
  - Index sur tous les champs de recherche
  - Requêtes optimisées (pas de N+1)
  - Stratégie de partitioning si nécessaire

- [ ] **Gestion de la montée en charge**
  - Load balancing configuré
  - Auto-scaling défini
  - Monitoring des ressources

### 🔒 Sécurité

- [ ] **Authentification robuste**
  - 2FA activé pour les comptes critiques
  - Session management sécurisé
  - Protection contre le brute force

- [ ] **Autorisation granulaire**
  - RBAC implémenté
  - Principe du moindre privilège respecté
  - Audit trail des actions sensibles

- [ ] **Protection des données**
  - Chiffrement en transit (HTTPS)
  - Chiffrement au repos pour données sensibles
  - Gestion sécurisée des secrets

### 🔧 Opérationnel

- [ ] **Monitoring complet**
  - Métriques business et techniques
  - Alerting intelligent (pas de spam)
  - Dashboards pour tous les stakeholders

- [ ] **Logging structuré**
  - Logs en JSON avec corrélation IDs
  - Centralisation des logs
  - Rétention et archivage définis

- [ ] **Backup et recovery**
  - Sauvegarde automatique testée
  - RTO/RPO définis et mesurés
  - Plan de reprise d'activité documenté

### 📚 Maintenabilité

- [ ] **Code quality standards**
  - Code coverage > 80%
  - Linting et formatting automatisés
  - Code review obligatoire

- [ ] **Documentation à jour**
  - Architecture documentée
  - APIs documentées (OpenAPI/Swagger)
  - Runbooks opérationnels

- [ ] **Gestion des dépendances**
  - Audit sécurité régulier
  - Stratégie de mise à jour définie
  - Pas de dépendances obsolètes

### 🎯 Business alignment

- [ ] **Métriques alignées business**
  - KPIs techniques liés aux objectifs business
  - Coût d'infrastructure maîtrisé
  - ROI des investissements techniques mesurable

- [ ] **Flexibilité pour l'évolution**
  - Architecture permet l'ajout de nouvelles features
  - Migration path défini pour les évolutions majeures
  - Pas de vendor lock-in critique

### 📊 Scoring

**18-20 ✅ :** Architecture excellente, prête pour la croissance
**14-17 ✅ :** Bonne base, quelques améliorations à planifier  
**10-13 ⚠️ :** Architecture fragile, refactoring nécessaire
**< 10 🚨 :** Architecture critique, plan d'urgence requis
```

## Points clés à retenir

1. **Il n'y a pas de solution parfaite.** Seulement des solutions adaptées au contexte avec des trade-offs assumés.

2. **Documentez vos décisions techniques.** ADRs, architecture docs, et rationales claires pour l'équipe future.

3. **La dette technique est inévitable.** L'important c'est de la gérer consciemment avec les 20% dédiés.

4. **Mesurez avant d'optimiser.** 80% des problèmes de performance viennent de 20% du code.

5. **Sécurité by design.** Plus facile d'intégrer la sécurité dès le début que de l'ajouter après.

6. **Pensez opérationnel dès le développement.** Monitoring, logging, et observabilité ne sont pas optionnels.

Dans le prochain chapitre, on va parler d'innovation et de veille technologique. Parce qu'avoir une architecture solide c'est bien, mais savoir la faire évoluer avec les nouvelles technologies, c'est encore mieux !

---

*"L'architecture logicielle est comme l'architecture d'un bâtiment : on peut toujours rajouter des étages, mais si les fondations sont pourries, tout s'effondre."*
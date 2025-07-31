---
title : Budget et ressources
---

> **Objectif :** Gérer le budget tech comme un pro

Ah, le budget ! Le moment où vous devez transformer vos rêves techniques en tableur Excel et convaincre le CFO que oui, cette nouvelle base de données à 50K€/an va révolutionner l'entreprise. Et où vous découvrez que votre facture AWS ressemble aux dépenses de l'État français.

Savoir gérer un budget tech, c'est ce qui sépare un vrai CTO d'un développeur senior avec un beau titre. Parce que la technique sans budget, c'est de la poésie. Et personne ne paye pour de la poésie.

## Construire et défendre son budget

### Comprendre les types de coûts

**CAPEX (Capital Expenditure) vs OPEX (Operational Expenditure)**

**CAPEX :** Investissements ponctuels, amortis sur plusieurs années
- Serveurs physiques
- Licences logicielles perpétuelles
- Équipement réseau
- Développement interne d'outils

**OPEX :** Coûts récurrents, passent en charges
- Cloud (AWS, Azure, GCP)
- Licences SaaS
- Salaires équipe tech
- Maintenance et support

**Tendance actuelle :** CAPEX → OPEX avec le cloud. Plus de flexibilité, mais coûts récurrents plus élevés.


### Structure du budget technique

**1. People (60-70% du budget)**
- Salaires bruts + charges
- Formations et certifications
- Recrutement (cabinet, cooptation)
- Équipement (laptop, écrans, setup)

**2. Infrastructure (20-25%)**
- Cloud computing (AWS, Azure, GCP)
- CDN et services réseau
- Monitoring et alerting
- Backup et disaster recovery

**3. Outils et licences (5-10%)**
- IDE et outils de développement
- Plateformes CI/CD
- Outils de collaboration
- Sécurité et compliance

**4. Services externes (5-10%)**
- Prestataires et consultants
- Audits sécurité
- Support technique
- Formation externe

**Exemple de répartition (150K€/an) :**
```
People : 100K€ (67%)
- 2 développeurs : 80K€
- Formation : 5K€
- Recrutement : 10K€
- Équipement : 5K€

Infrastructure : 30K€ (20%)
- AWS : 24K€
- Monitoring : 3K€
- CDN : 2K€
- Backup : 1K€

Outils : 15K€ (10%)
- GitHub : 1.5K€
- Slack : 1K€
- Notion : 0.5K€
- Figma : 2K€
- Autres : 10K€

Services : 5K€ (3%)
- Audit sécurité : 3K€
- Conseil architecture : 2K€
```

### Construire son business case

**Framework pour justifier vos investissements :**

**1. Problème identifié**
- Impact current sur le business
- Coût de l'inaction
- Risques associés

**2. Solution proposée**
- Description technique succincte
- Alternatives évaluées
- Choix et rationale

**3. Investissement requis**
- Coût initial
- Coûts récurrents
- Resources humaines nécessaires

**4. Bénéfices attendus**
- Gain de productivité
- Réduction des coûts
- Nouveaux revenus possibles
- Réduction des risques

**5. ROI et timeline**
- Retour sur investissement chiffré
- Timeline de mise en œuvre
- Métriques de succès

**Exemple concret - Migration vers microservices :**

```markdown
## Business Case - Migration Microservices

### Problème
- Monolithe actuel limite à 2 releases/mois
- 60% des bugs viennent de 20% du code
- Scaling impossible (tout ou rien)
- Coût opportunité : 6 features retardées = 200K€ revenue

### Solution
Migration progressive vers microservices sur 6 mois
- 3 services prioritaires identifiés
- Architecture event-driven
- Containerisation avec Docker/Kubernetes

### Investissement
- Development : 180K€ (3 mois × 2 dev seniors)
- Infrastructure : 30K€/an (+50% coût cloud)
- Formation équipe : 10K€

### Bénéfices
- Vélocité +100% : 4 releases/mois au lieu de 2
- Bugs -60% grâce à l'isolation
- Scaling sélectif : -40% coûts infrastructure
- Time-to-market : 6 semaines au lieu de 12

### ROI
Year 1 : (400K€ revenue + 50K€ saved) - 220K€ = +230K€
ROI : 104%
```

### Défendre son budget devant la direction

**Préparer sa présentation :**

**Slide 1 : Executive Summary**
- Budget total et évolution vs N-1
- 3 investissements majeurs
- ROI global attendu

**Slide 2 : Alignment stratégique**
- Comment le budget sert les objectifs business
- Risques si budget refusé
- Opportunités manquées

**Slide 3 : Breakdown par catégorie**
- People, Infrastructure, Tools, Services
- Justification des évolutions importantes
- Comparaison avec le marché

**Slide 4 : ROI et métriques**
- KPIs techniques et business
- Timeline des bénéfices
- Plan de suivi trimestriel

**Objections classiques et réponses :**

**"C'est trop cher par rapport à l'an dernier"**
→ "L'équipe a grandi de 50%, nos revenus de 80%. Le budget tech représente toujours 15% du CA, en ligne avec les benchmarks."

**"On peut pas faire moins cher ?"**
→ "J'ai identifié 3 scénarios. Option low-cost : -30% budget mais +6 mois sur la roadmap et risque technique élevé."

**"Pourquoi pas du open source gratuit ?"**
→ "Open source ≠ gratuit. Coût de maintenance et support. Notre stack actuelle nous fait économiser 2 FTE par an vs solutions maison."

## Cloud costs et optimisation

### Comprendre la facturation cloud

**Les pièges de la facturation AWS/Azure/GCP :**

**1. Pay-per-use qui explose**
- Instances laissées allumées 24/7
- Sur-provisioning par peur du downtime
- Data transfer sous-estimés
- Services zombies oubliés

**2. Réservations mal calculées**
- Reserved Instances sur mauvais types
- Commitment trop important
- Évolution usage non anticipée

**3. Lack de monitoring**
- Pas d'alertes sur les coûts
- Pas de breakdown par service/équipe
- Découverte des factures a posteriori

**Une erreur que j'ai vu chez un client :** Facture AWS qui passe de 200€ à 2000€ en un mois à cause d'une instance GPU laissée en permanence pour des tests. Leçon : monitoring + alertes obligatoires.

### Stratégies d'optimisation

**1. Right-sizing automatique**

**Stratégie de dimensionnement optimal :**

**Approches de monitoring pour le right-sizing :**
- **Reactive :** Ajustement basé sur les métriques historiques
- **Predictive :** Utilisation de ML pour anticiper les besoins
- **Policy-based :** Règles automatiques selon les patterns d'usage

**Métriques clés à surveiller :**
- Utilisation CPU, mémoire, réseau sur 30+ jours
- Patterns d'usage (pics, creux, saisonnalité)
- Coût vs performance ratio par service

**Questions CTO à se poser :**
- Quel niveau d'automatisation vs contrôle manuel pour notre contexte ?
- Comment équilibrer optimisation coûts et résilience ?
- Avons-nous les compétences pour gérer une infrastructure auto-scalée ?

**Outils et vendors à évaluer :**
- Cloud natifs : AWS Compute Optimizer, Azure Advisor, GCP Recommender
- Third-party : CloudHealth, Densify, Turbonomic
- Solutions internes : Scripts custom + monitoring

**2. Auto-scaling intelligent**
- Scale out sur CPU/Memory > 70%
- Scale in sur CPU/Memory < 30% pendant 10 min
- Minimum d'instances pour la haute disponibilité

**3. Scheduling des environnements**
- Dev/Staging éteints le soir et weekend
- 65% d'économies sur ces environnements

**4. Reserved Instances + Savings Plans**
- RI sur les charges stables (production)
- Savings Plans pour la flexibilité
- Review trimestrielle des usages

**5. Spot Instances pour les workloads batch**
- 90% moins cher que les instances on-demand
- Parfait pour CI/CD, data processing, ML training

### Outils de monitoring et optimisation

**AWS Native :**
- **Cost Explorer :** Analysis des coûts historiques
- **AWS Budgets :** Alertes sur dépassements
- **Trusted Advisor :** Recommandations d'optimisation
- **Compute Optimizer :** Right-sizing automatique

**Outils tiers :**
- **CloudHealth :** Multi-cloud cost management
- **Kubecost :** Optimisation spécifique Kubernetes
- **Spot.io :** Automation des Spot Instances
- **ParkMyCloud :** Scheduling automatique

**Dashboard de suivi mensuel :**
```markdown
# Cloud Cost Dashboard - Janvier 2024

## 💰 Coûts globaux
- Total : 4.2K€ (vs 4.8K€ budget) ✅
- Évolution : -15% vs décembre
- Prévision fin d'année : 52K€ (vs 60K€ budget)

## 🏗️ Breakdown par service
- EC2 : 2.1K€ (50%)
- RDS : 0.8K€ (19%)
- S3 : 0.4K€ (10%)
- Data Transfer : 0.3K€ (7%)
- Autres : 0.6K€ (14%)

## 📊 Optimisations ce mois
- Reserved Instances : -800€/mois
- Auto-scaling : -300€/mois
- Spot instances CI : -200€/mois
- Nettoyage S3 : -100€/mois

## 🎯 Actions prévues
- Migration RDS vers Aurora : -200€/mois
- Compression logs : -100€/mois
- Review data retention : -150€/mois
```

## ROI des investissements tech

### Calculer le ROI technique

**Formula de base :**
```
ROI = (Bénéfices - Coûts) / Coûts × 100
```

**Types de bénéfices techniques :**

**1. Gains de productivité**
- Vélocité de développement
- Réduction du time-to-market
- Automatisation des tâches manuelles

**2. Réduction des coûts**
- Infrastructure optimisée
- Moins de bugs (support réduit)
- Réduction de la dette technique

**3. Nouveaux revenus**
- Features impossibles avant
- Amélioration de l'UX
- Scalabilité permettant plus d'utilisateurs

**4. Réduction des risques**
- Sécurité renforcée
- Haute disponibilité
- Compliance réglementaire

### Exemples de calculs ROI

**Cas : Migration CI/CD chez client Y**

**Investissement :**
- Setup initial : 20K€
- Formation équipe : 5K€
- Maintenance : 3K€/an

**Bénéfices :**
- Déploiements : de 1/semaine à 10/semaine
- Bugs en prod : -80% (200h support économisées)
- Vélocité : +40% (équipe livre plus vite)

**Framework de calcul ROI pour investissements techniques :**

**Méthodologie structurée d'évaluation :**

**1. Quantification des coûts (approche conservative) :**
- Investissement initial (développement, licences, formation)
- Coûts récurrents (maintenance, support, infrastructure)
- Coût d'opportunité (autres projets retardés)
- Coûts de transition et d'adoption

**2. Identification des bénéfices mesurables :**
- **Productivité :** Réduction temps de développement/déploiement
- **Qualité :** Diminution coûts de support et incidents
- **Scalabilité :** Capacité accrue sans croissance linéaire des coûts
- **Risque :** Réduction exposition aux pannes/sécurité

**3. Validation des hypothèses :**
- Métriques baseline avant implémentation
- Indicateurs de suivi post-déploiement
- Scénarios pessimiste/réaliste/optimiste
- Timeline de réalisation des bénéfices

**4. Présentation financière :**
- ROI sur 1, 2, 3 ans
- Payback period
- Analyse de sensibilité
- Comparaison avec alternatives (do nothing, autres solutions)

### Métriques de suivi ROI

**Dashboard ROI trimestriel :**

| Investissement | Coût | Bénéfice Q1 | ROI Q1 | Projection annuelle |
|---------------|------|-------------|--------|-------------------|
| CI/CD Pipeline | 28K€ | 35K€ | 25% | 150% |
| Migration Cloud | 80K€ | 15K€ | -81% | 65% |
| Team Scaling | 120K€ | 180K€ | 50% | 200% |

**KPIs de vélocité technique :**
- Lead time : temps feature → production
- Deployment frequency : nombre déploiements/mois
- Mean time to recovery : temps résolution incident
- Change failure rate : % déploiements qui échouent

## Négociation avec les fournisseurs

### Négocier les contrats SaaS

**Règles d'or de la négociation :**

**1. Timing is everything**
- Négociez en fin de trimestre/année fiscale
- Préparez le renouvellement 3 mois avant
- Utilisez les deadlines à votre avantage

**2. Volume et commitment**
- Négociez sur la durée (2-3 ans)
- Groupez plusieurs outils du même vendeur
- Jouez sur la croissance prévue

**3. Alternatives crédibles**
- Ayez toujours un plan B
- Mentionnez (sans bluffer) les concurrents
- Préparez une migration si nécessaire

**Exemple de négociation GitHub Enterprise :**

**Prix initial :** 21$/user/mois pour 25 users = 6.3K$/an

**Stratégie :**
- Commitment 3 ans
- Croissance prévue à 50 users
- Alternative GitLab évaluée

**Négociation :**
- "On veut 3 ans, 50 users fin d'année"
- "GitLab nous propose 15$/user"
- "Budget serré, besoin de 30% de remise"

**Résultat :** 15$/user/mois sur 3 ans = 4.5K$/an (-28%)

### Optimiser les licences

**Audit annuel des licences :**

**Questions à se poser :**
1. Combien d'utilisateurs actifs réels ?
2. Quelles fonctionnalités on utilise vraiment ?
3. Y a-t-il des doublons dans notre stack ?
4. Peut-on downgrade certains plans ?

**Framework d'audit des licences :**

**Méthodologie d'optimisation des coûts logiciels :**

**1. Audit d'utilisation (trimestriel) :**
- **Usage metrics :** Connexions actives vs licences payées
- **Feature utilization :** Fonctionnalités premium réellement utilisées
- **User patterns :** Utilisateurs actifs vs occasionnels vs dormants

**2. Questions d'optimisation :**
- Peut-on consolider plusieurs outils similaires ?
- Les fonctionnalités premium justifient-elles le surcoût ?
- Existe-t-il des alternatives open source viables ?
- Peut-on négocier des tarifs dégressifs ou des contrats annuels ?

**3. Stratégies d'optimisation :**
- **Right-sizing :** Ajuster le nombre de licences aux utilisateurs réels
- **Tier optimization :** Downgrade vers des plans moins chers si suffisants
- **Vendor consolidation :** Négocier des packages avec un fournisseur unique
- **Timing :** Profiter des fins d'année fiscale pour négocier

**4. Processus de décision :**
- Impact sur la productivité vs économies réalisées
- Coût de migration vs bénéfices long terme
- Résistance équipe vs opportunités d'amélioration
- Roadmap produit et évolution des besoins

**ROI typique d'un audit licences :** 15-30% d'économies annuelles

### Négocier avec les cloud providers

**AWS/Azure/GCP : leviers de négociation :**

**1. Enterprise Discount Program (EDP)**
- Engagement minimum (généralement 100K$/an)
- Remises 5-20% selon le volume
- Support inclus

**2. Private Pricing Agreement (PPA)**
- Négociation sur services spécifiques
- Remises sur Reserved Instances
- Credits pour migration

**3. Support technique inclus**
- Business/Enterprise support gratuit
- Technical Account Manager dédié
- Architecture reviews

## Template de budget tech

### Budget annuel par catégorie

```markdown
# Budget Tech 2024 - [Entreprise]

## Executive Summary
- Budget total : 500K€ (+25% vs 2023)
- ROI attendu : 180%
- Équipe : 6 → 9 personnes
- Croissance revenue supportée : +100%

## 1. People (350K€ - 70%)

### Salaires et charges (300K€)
- 3 Senior Dev (40K€ + 15K€ charges) × 3 = 165K€
- 2 Mid Dev (35K€ + 12K€ charges) × 2 = 94K€
- 1 DevOps (45K€ + 16K€ charges) = 61K€

### Recrutement (25K€)
- Cabinet recrutement : 15K€
- Cooptation : 5K€
- Job boards : 2K€
- Process interne : 3K€

### Formation (15K€)
- Conférences : 8K€
- Formations en ligne : 3K€
- Certifications : 4K€

### Équipement (10K€)
- 3 MacBook Pro : 9K€
- Écrans/accessoires : 1K€

## 2. Infrastructure (100K€ - 20%)

### Cloud computing (75K€)
- AWS Production : 45K€
- AWS Dev/Staging : 15K€
- CDN/DNS : 10K€
- Backup/DR : 5K€

### Monitoring/Sécurité (15K€)
- DataDog : 8K€
- Security tools : 4K€
- SSL certificates : 1K€
- Audit sécurité : 2K€

### Réseau/Télécoms (10K€)
- Internet/VPN : 6K€
- Téléphonie : 4K€

## 3. Outils et licences (35K€ - 7%)

### Développement (20K€)
- GitHub Enterprise : 8K€
- JetBrains : 3K€
- Docker/K8s tools : 4K€
- CI/CD tools : 5K€

### Collaboration (10K€)
- Slack : 4K€
- Notion : 2K€
- Figma : 2K€
- Office 365 : 2K€

### Analytics/Business (5K€)
- Mixpanel : 3K€
- Hotjar : 2K€

## 4. Services externes (15K€ - 3%)

### Conseil/Audit (10K€)
- Architecture review : 5K€
- Security audit : 3K€
- Performance audit : 2K€

### Support/Maintenance (5K€)
- Support critique : 3K€
- Backup services : 2K€

## Évolution vs 2023
- People : +100K€ (+40%) - 3 recrutements
- Infrastructure : +20K€ (+25%) - croissance usage
- Outils : +5K€ (+17%) - nouveaux outils productivité
- Services : stable

## ROI et justification
- 3 nouveaux développeurs → +60% vélocité
- Infrastructure scaling → support 100% croissance
- Outils productivité → +20% efficacité équipe
- ROI global : 900K€ bénéfices / 500K€ coûts = 180%

## Risques et mitigation
- Recrutement difficile → budget cabinet augmenté
- Coûts cloud volatils → monitoring + alertes
- Départ key people → formation cross-training

## Suivi trimestriel
- Q1 : Recrutement 2 devs, setup monitoring
- Q2 : Recrutement DevOps, architecture review
- Q3 : Recrutement 1 dev, optimisation cloud
- Q4 : Review annual, préparation budget 2025
```

## Où couper quand il faut réduire les coûts

### Framework de décision pour les réductions budgétaires

**Méthodologie de priorisation en période de contraintes :**

**Zone Rouge - Investissements stratégiques protégés :**
- **Rationale :** Éléments critiques pour la continuité business
- **Exemples :** Équipe core, infrastructure production, sécurité
- **Questions CTO :** Quels sont nos single points of failure ? Quel est le coût d'un arrêt de service vs l'économie réalisée ?

**Zone Orange - Optimisation prudente :**
- **Rationale :** Réduction possible sans impact majeur court terme
- **Approche :** Reporter, réduire, ou trouver des alternatives moins chères
- **Métriques de suivi :** Impact sur la vélocité, satisfaction équipe, quality metrics

**Zone Verte - Optimisation agressive :**
- **Rationale :** Éléments dispensables ou facilement substituables
- **Stratégie :** Élimination pure, consolidation, internalisation
- **Validation :** Mesurer les gains vs les éventuelles pertes de productivité

**Questions stratégiques avant toute coupe :**
1. Quel est l'impact réel sur notre capacité de livraison ?
2. Ces économies sont-elles durables ou reportent-elles juste des coûts ?
3. Comment préserver le moral et la motivation de l'équipe ?
4. Quels investissements faut-il absolument maintenir pour l'avenir ?

**Communication des décisions :**
- Transparence sur le contexte et les contraintes
- Explication du processus de décision et des critères
- Timeline et métriques de suivi pour évaluer l'impact
- Plan de retour en arrière si les coupes s'avèrent contre-productives

### Stratégies de réduction par urgence

**Réduction douce (-15%) - 3 mois**
- Audit et optimisation licences
- Négociation fournisseurs
- Optimisation cloud (auto-scaling, scheduling)
- Report achats non-critiques

**Réduction modérée (-30%) - 6 mois**
- Gel des recrutements non-critiques
- Downgrade plans premium → standard
- Consolidation outils (Slack → Teams, etc.)
- Réduction environnements dev/staging

**Réduction drastique (-50%) - 12 mois**
- Licenciements (last resort)
- Migration vers open source
- Réduction infrastructure de 50%
- Arrêt projets non-critiques

### Template de plan de réduction

```markdown
# Plan de Réduction Budget Tech

## Contexte
- Réduction demandée : 30% (150K€ → 105K€)
- Timeline : 3 mois
- Contrainte : maintenir la productivité

## Actions immédiates (Mois 1)
- [ ] Audit licences → 5K€ économisés
- [ ] Négociation AWS → 3K€ économisés  
- [ ] Downgrade support plans → 2K€ économisés
- [ ] Total M1 : 10K€ économisés

## Actions court terme (Mois 2-3)  
- [ ] Optimisation cloud → 15K€ économisés
- [ ] Consolidation outils → 8K€ économisés
- [ ] Report recrutement → 12K€ économisés
- [ ] Total M2-3 : 35K€ économisés

## Impact et mitigations
- Vélocité : -15% estimée
- Mitigation : automatisation accrue
- Risque : dette technique
- Mitigation : 20% temps dédié refactoring

## Métriques de suivi
- Budget mensuel vs target
- Vélocité équipe (story points/sprint)
- Satisfaction équipe (survey mensuel)
- Incidents production
```

## Points clés à retenir

1. **Le budget tech n'est pas une dépense, c'est un investissement.** Calculez et communiquez le ROI de chaque poste.

2. **70% people, 20% infrastructure, 10% tools.** Cette répartition varie peu selon la taille de l'entreprise.

3. **Monitoring et optimisation cloud en continu.** Les coûts cloud peuvent exploser sans surveillance.

4. **Négociez tout, tout le temps.** Fin d'année fiscale, volumes, commitment long terme sont vos leviers.

5. **Préparez plusieurs scénarios.** Budget idéal, réaliste, et plan de réduction si nécessaire.

6. **Automatisez le reporting.** Dashboard mensuel automatique pour garder la confiance du management.

Dans le prochain chapitre, on va parler d'organisation et de processus. Parce qu'avoir un budget, c'est bien, mais l'utiliser efficacement avec les bons processus, c'est mieux !

---

*"Un budget tech bien géré, c'est comme une bonne architecture : ça se voit pas quand ça marche, mais tout le monde le remarque quand ça plante."*
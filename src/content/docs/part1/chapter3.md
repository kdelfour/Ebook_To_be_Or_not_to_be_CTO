---
title : Se positionner dans l'organisation
---

> **Objectif :** Comprendre les enjeux politiques et organisationnels

Ah, la politique d'entreprise ! Ce moment où vous réalisez que savoir coder ne vous a pas du tout préparé à naviguer dans les eaux troubles des relations interpersonnelles, des jeux de pouvoir et des non-dits organisationnels.

Bienvenue dans la vraie vie d'un CTO : 30% technique, 70% diplomatie.

## Relation avec le CEO, CPO, autres C-levels

En tant que CTO, vous entrez dans le club très fermé des "C-level". Félicitations ! Vous avez maintenant le droit de participer aux réunions où on parle de choses importantes pendant des heures sans rien décider.

Plus sérieusement, votre succès va largement dépendre de votre capacité à collaborer avec vos pairs. Et chacun a ses propres objectifs, son langage, ses priorités.

### Le CEO : votre boss (et parfois votre meilleur ami)

- **Son monde :** Vision, croissance, levées de fonds, investisseurs, board
- **Ses préoccupations :** "Comment on fait pour doubler la boîte cette année ?"
- **Ce qu'il attend de vous :** Que la technique suive la croissance business

**Dans une startup :** Vous êtes probablement potes. Vous avez créé la boîte ensemble, vous vous faites mutuellement confiance. Profitez-en, ça ne durera pas éternellement.

**Dans une scale-up :** La relation se professionnalise. Le CEO a moins de temps, plus de pression. Il compte sur vous pour gérer l'équipe technique sans qu'il ait à s'en préoccuper.

**Dans une corporate :** C'est votre N+1 hiérarchique. Relation plus formelle, reporting plus structuré, mais aussi plus de moyens et de stabilité.

**Comment bien travailler avec votre CEO :**

1. **Parlez business, pas technique**
   Au lieu de : "On a un problème de latence sur nos APIs"
   Dites : "On risque de perdre des clients si on ne règle pas nos problèmes de performance"

2. **Soyez proactif sur les alertes**
   Votre CEO déteste les surprises. Si vous sentez qu'un projet va déraper, prévenez-le avant qu'il l'apprenne par le client.

3. **Proposez des solutions, pas des problèmes**
   Au lieu de : "Notre architecture ne tient plus"
   Dites : "Je propose 3 options pour résoudre nos problèmes de scale, voici les avantages/inconvénients de chacune"

**Exemple concret :** Chez Hiveo, pendant la fusion, mon CEO était sous pression énorme des acquéreurs britanniques. Au lieu de lui expliquer les subtilités techniques de mise à jour du modèle de notre, je lui présentais chaque semaine : "On tient le planning, voici les 2 risques que je surveille."

### Le CPO : votre challengeur favori

- **Son monde :** Utilisateurs, features, roadmap produit, A/B tests
- **Ses préoccupations :** "Comment on fait pour que les utilisateurs adorent notre produit ?"
- **Ce qu'il attend de vous :** Que vous livriez ses features rapidement et sans bug

C'est avec le CPO que vous aurez le plus de challenge. Normal : vous avez des priorités différentes.

**Lui :** "Il faut cette feature pour demain, les clients l'attendent !"
**Vous :** "On ne peut pas la livrer sans refactoriser ce module, sinon tout va péter."

**Lui :** "Pourquoi il faut 3 sprints pour cette petite feature ?"
**Vous :** "Parce que notre dette technique nous ralentit, il faut qu'on prenne le temps de bien faire."

**Comment gérer cette relation :**

1. **Créez un langage commun**
   Mettez en place des métriques que vous comprenez tous les deux : vélocité, temps de cycle, taux de bugs en prod.

2. **Négociez les priorités ensemble**
   Organisez des sessions de priorisation commune. Il présente ses enjeux business, vous présentez vos contraintes techniques.

3. **Soyez transparent sur vos capacités**
   Donnez des estimations réalistes, avec des fourchettes. Et tenez vos engagements.

4. **Faites de la pédagogie technique**
   Expliquez pourquoi certaines choses prennent du temps. Utilisez des analogies : "Ajouter cette feature sur notre architecture actuelle, c'est comme rajouter un étage sur une maison sans fondations."

**Exemple concret :** Chez Hiveo, nous faisions régulièrement face à une forte pression des clients qui attendaient une fonctionnalité majeure, tandis que l’équipe technique devait assurer la livraison dans de bonnes conditions. La mise en place de la méthode ShapeUp, notamment lors des phases de BET, nous a permis de mieux prioriser les demandes et d’identifier les sujets où l’investissement technique générait le plus de retour sur investissement. Cela a grandement facilité la prise de décision et l’alignement entre les équipes produit et tech.

### Le CFO : celui qui compte vos sous

**Son monde :** Budget, coûts, ROI, marges
**Ses préoccupations :** "Combien ça coûte et qu'est-ce que ça rapporte ?"
**Ce qu'il attend de vous :** Que vous restiez dans le budget et que vous justifiez vos dépenses

Beaucoup de CTOs négligent leur relation avec le CFO. Erreur ! C'est lui qui va valider (ou non) vos budgets cloud, vos recrutements, vos investissements en infrastructure.

**Comment bien travailler avec votre CFO :**

1. **Parlez ROI, pas features**
   Au lieu de : "On a besoin de 3 développeurs senior"
   Dites : "Ces 3 recrutements vont nous permettre de livrer 40% plus vite, ce qui représente 200K€ de CA supplémentaire"

2. **Surveillez vos coûts cloud**
   Rien ne rend un CFO plus nerveux qu'une facture AWS qui explose sans prévenir. Mettez en place des alertes, des budgets, du monitoring.

3. **Justifiez vos investissements techniques**
   Chaque dépense doit avoir un impact business mesurable : réduction des coûts, amélioration de la vélocité, réduction des risques.

### Les autres C-levels

**CMO (Marketing) :** Votre allié sur l'attraction des talents et l'image de marque tech. Travaillez ensemble sur votre employer branding.

**CHRO (RH) :** Votre partenaire sur les recrutements, la gestion des carrières, les conflits. Ne négligez pas cette relation, vous allez beaucoup recruter.

**COO (Operations) :** Votre interface sur les processus, la qualité, la satisfaction client. Important dans les boîtes orientées service.

## Gérer les attentes des parties prenantes

En tant que CTO, vous avez des "clients" partout dans l'entreprise. Et chacun a ses attentes, souvent contradictoires.

### Cartographier vos parties prenantes

**Exercice pratique :** Listez toutes les personnes qui attendent quelque chose de vous, puis classez-les selon deux axes :

- **Influence :** Peut-elle impacter votre job / budget / équipe ?
- **Intérêt :** Est-elle directement concernée par vos décisions techniques ?

**Quadrant 1 - Haute influence, haut intérêt :** Vos vrais clients (CEO, CPO, équipe technique)
→ Communication proactive, alignment permanent

**Quadrant 2 - Haute influence, faible intérêt :** Les décideurs (board, investisseurs)
→ Communication synthétique, focus sur les résultats

**Quadrant 3 - Faible influence, haut intérêt :** Les utilisateurs internes (sales, support, marketing)
→ Communication régulière, écoute active

**Quadrant 4 - Faible influence, faible intérêt :** Les observateurs
→ Communication minimale, information générale

### Gérer les demandes contradictoires

**Situation classique :**
- Le CEO veut livrer plus vite
- Le CPO veut plus de features
- Le CFO veut réduire les coûts
- L'équipe technique veut réduire la dette technique

**Votre job :** Trouver un compromis qui satisfait tout le monde (spoiler : c'est impossible, mais il faut essayer).

**Méthode en 4 étapes :**

1. **Écoutez tout le monde**
   Organisez des sessions individuelles pour comprendre les vrais enjeux derrière chaque demande.

2. **Identifiez les contraintes réelles**
   Distinguez les "nice to have" des "must have". Souvent, les gens demandent des moyens alors qu'ils ont juste des objectifs.

3. **Proposez des alternatives**
   "Je ne peux pas faire A ET B ET C. Mais je peux faire A + 50% de B, ou B + 30% de C. Qu'est-ce qui vous semble le mieux ?"

4. **Communiquez la décision et les trade-offs**
   "On a décidé de prioriser A parce que ça a le plus d'impact business. Ça veut dire qu'on reporte B de 2 mois. Est-ce que tout le monde est aligné ?"

### L'art de dire non (poliment)

Un CTO qui dit oui à tout finit par ne plus rien livrer. Apprendre à dire non, c'est un super-pouvoir.

**Les techniques pour dire non sans froisser :**

**1. Le "oui, mais"**
"Oui, c'est une excellente idée. Pour la faire bien, il nous faudrait 3 semaines et 2 développeurs. Sur quoi voulez-vous qu'on arrête de travailler en attendant ?"

**2. Le "pas maintenant"**
"C'est dans nos priorités pour Q2. Pour Q1, on a déjà X, Y et Z. On peut en reparler en février ?"

**3. Le "avec des moyens"**
"C'est faisable si on recrute 2 développeurs supplémentaires. Vous avez le budget ?"

**4. Le "alternative"**
"On ne peut pas faire exactement ça, mais on peut faire ceci qui répond à 80% de votre besoin en divisant le coût par 3."

## Construire sa légitimité

Être CTO sur le papier, c'est facile. Être reconnu comme CTO par l'organisation, c'est plus compliqué.

### Les sources de légitimité

**Légitimité technique :** "Il/elle sait de quoi il/elle parle"
- Vous maîtrisez les enjeux techniques de votre domaine
- L'équipe technique vous fait confiance
- Vous prenez les bonnes décisions d'architecture

**Légitimité managériale :** "Il/elle sait gérer une équipe"
- Votre équipe est motivée et performante
- Vous savez recruter et fidéliser les talents
- Vous gérez bien les conflits et les crises

**Légitimité business :** "Il/elle comprend les enjeux de l'entreprise"
- Vos décisions techniques ont un impact business positif
- Vous parlez le langage du business
- Vous participez aux décisions stratégiques

**Légitimité relationnelle :** "Il/elle sait travailler avec les autres"
- Vous avez de bonnes relations avec vos pairs
- Vous savez négocier et faire des compromis
- Vous êtes perçu comme collaboratif, pas territorial

### Comment construire sa légitimité rapidement

**Semaines 1-4 : L'écoute active**
- Faites le tour de toutes vos parties prenantes
- Posez des questions, prenez des notes
- Identifiez les pain points et les attentes

**Mois 2-3 : Les quick wins**
- Résolvez 2-3 problèmes techniques visibles et impactants
- Mettez en place 1-2 processus qui améliorent la vie de tout le monde
- Communiquez sur vos actions et leurs résultats

**Mois 4-6 : La vision**
- Présentez votre vision technique à l'équipe et au management
- Lancez 1-2 projets structurants à moyen terme
- Recrutez vos premiers talents

### Gérer l'imposture

Le syndrome de l'imposteur, on en a tous. Mais quand vous êtes CTO, il peut vous paralyser.

**Les signes :**
- Vous évitez les sujets techniques que vous ne maîtrisez pas
- Vous sur-compensez en travaillant 60h par semaine
- Vous avez peur qu'on découvre que vous n'êtes "qu'un développeur"
- Vous acceptez tout pour ne pas decevoir

**Les antidotes :**
1. **Assumez votre apprentissage**
   "Je ne connais pas cette techno, mais je vais me renseigner et revenir vers vous."

2. **Entourez-vous de gens plus forts que vous**
   Recrutez des experts dans les domaines que vous ne maîtrisez pas.

3. **Faites de la veille active**
   Restez à jour, mais sans vous mettre la pression d'être expert en tout.

4. **Acceptez d'être vulnérable**
   Vos équipes préfèrent un CTO qui avoue ne pas savoir plutôt qu'un CTO qui fait semblant.

**Mon expérience :** Quand j'ai co-créé iBubble, je suis passé du web au hardware embarqué. J'ai passé du temps à me former intensivement, et j'assumais totalement devant l'équipe : "Je découvre, mais on apprend ensemble."

## Cas pratiques : Situations de conflit typiques

### Cas #1 : Le conflit CTO/CPO sur les priorités

**Situation :** Votre CPO veut absolument livrer une feature promise à un gros client. Votre équipe vous dit que c'est impossible sans casser l'architecture existante.

**Les erreurs classiques :**
- Céder et faire livrer n'importe comment
- Refuser catégoriquement sans proposer d'alternative
- Se battre sur le terrain technique plutôt que business

**La bonne approche :**
1. Chiffrez l'impact de livrer mal : temps de maintenance, risques de bugs, ralentissement futur
2. Proposez des alternatives : version dégradée, livraison en 2 phases, solution temporaire
3. Impliquez le CEO dans l'arbitrage si nécessaire
4. Documentez la décision prise

**Exemple de résolution :**
"Je comprends l'enjeu client. On peut livrer une version basique en 2 semaines, puis la version complète proprement en 6 semaines. Ou alors on prend 4 semaines pour faire quelque chose de solide dès le départ. Quel est l'impact business de chaque option ?"

### Cas #2 : Résistance de l'équipe technique

**Situation :** Vous voulez migrer vers une nouvelle techno/architecture, mais une partie de l'équipe résiste.

**Les raisons de résistance :**
- Peur de l'inconnu
- Confort avec l'existant
- Doute sur vos compétences techniques
- Pas d'envie d'apprendre

**La mauvaise approche :** Imposer par l'autorité hiérarchique

**La bonne approche :**
1. Organisez des sessions de présentation/débat
2. Faites tester la nouvelle solution sur un petit projet
3. Identifiez les early adopters et appuyez-vous sur eux
4. Formez et accompagnez les réticents
5. Acceptez que certains ne suivent pas (et gérez les départs)


### Cas #3 : Pression du board sur les coûts

**Situation :** Le board trouve que votre équipe technique coûte trop cher et ne livre pas assez.

**Ce qu'il ne faut pas faire :**
- Se braquer et défendre votre équipe aveuglément
- Promettre de livrer plus avec moins
- Rejeter la faute sur les autres départements

**Ce qu'il faut faire :**
1. Préparez vos chiffres : coût par développeur, vélocité, ROI des projets
2. Benchmarkez avec le marché
3. Présentez vos contraintes : dette technique, complexité métier, qualité
4. Proposez un plan d'amélioration avec des étapes mesurables

**Exemple de présentation :**
"Notre coût par développeur est dans la moyenne du marché. Notre vélocité a baissé de 20% cette année à cause de la dette technique accumulée. Je propose un plan sur 6 mois pour rembourser cette dette et retrouver notre vélocité initiale."

## Checklist : "Mon positionnement est-il clair ?"

### Relations interpersonnelles

**Avec le CEO :**
- [ ] Je comprends ses priorités business
- [ ] Il me fait confiance sur les sujets techniques
- [ ] On a des 1-on-1 réguliers et productifs
- [ ] Je le préviens avant qu'il apprenne les problèmes par d'autres
- [ ] Il m'inclut dans les décisions stratégiques importantes

**Avec le CPO :**
- [ ] On a un processus de priorisation commun
- [ ] Je comprends ses contraintes produit
- [ ] Il comprend mes contraintes techniques
- [ ] On communique régulièrement sur la roadmap
- [ ] Nos conflits sont constructifs, pas personnels

**Avec l'équipe technique :**
- [ ] Ils me font confiance sur les décisions d'architecture
- [ ] Ils viennent me voir spontanément pour des conseils
- [ ] Je connais leurs aspirations individuelles
- [ ] Ils me perçoivent comme quelqu'un qui les protège
- [ ] L'ambiance d'équipe est bonne

**Avec les autres départements :**
- [ ] Je comprends leurs enjeux métier
- [ ] Ils me perçoivent comme quelqu'un de collaboratif
- [ ] Je réponds à leurs demandes dans des délais raisonnables
- [ ] Mes refus sont bien expliqués et acceptés
- [ ] On travaille ensemble sur des projets transverses

### Légitimité organisationnelle

**Technique :**
- [ ] Mes décisions techniques ont un impact business positif
- [ ] L'architecture évolue dans le bon sens
- [ ] Les incidents critiques diminuent
- [ ] L'équipe monte en compétences
- [ ] La vélocité de développement est stable/croissante

**Managériale :**
- [ ] Mon équipe grandit plus vite que les problèmes
- [ ] Le turnover est faible
- [ ] Les recrutements se passent bien
- [ ] Les conflits sont résolus rapidement
- [ ] L'équipe est autonome sur les sujets opérationnels

**Business :**
- [ ] Je participe aux décisions stratégiques
- [ ] Mes projets techniques ont un ROI mesurable
- [ ] Je respecte mes budgets
- [ ] Je parle le langage du business avec les non-tech
- [ ] Mes estimations sont fiables

### Communication

**Vers le haut :**
- [ ] Je remonte les problèmes avec des solutions
- [ ] Mes reportings sont clairs et synthétiques
- [ ] Je sais dire non quand il faut
- [ ] J'alerte suffisamment tôt sur les risques
- [ ] Je traduis la technique en impact business

**Vers le bas :**
- [ ] Ma vision technique est claire et partagée
- [ ] L'équipe comprend les enjeux business
- [ ] Les décisions sont expliquées et acceptées  
- [ ] Le feedback circule dans les deux sens
- [ ] Les informations importantes sont partagées rapidement

**Transverse :**
- [ ] Je facilite la collaboration entre équipes
- [ ] Mes réunions sont efficaces et utiles
- [ ] Je suis accessible et réactif
- [ ] Mes messages sont clairs et sans ambiguïté
- [ ] Je sais adapter mon niveau de détail selon l'audience

### Scoring

**15-20 ✅ :** Votre positionnement est solide. Vous pouvez vous concentrer sur la stratégie long terme.

**10-14 ✅ :** Vous avez les bases, mais quelques points à améliorer. Identifiez vos 2-3 faiblesses principales.

**5-9 ✅ :** Votre positionnement est fragile. Focalisez-vous sur les relations clés (CEO, équipe).

**0-4 ✅ :** Alerte rouge ! Votre poste est probablement en danger. Action immédiate requise.

## Points clés à retenir

1. **Votre succès dépend autant de vos relations que de vos compétences techniques.** Investissez dans les deux.

2. **Chaque partie prenante a sa logique.** Essayez de la comprendre avant de la critiquer.

3. **Savoir dire non poliment est un super-pouvoir.** Mais il faut proposer des alternatives.

4. **La légitimité se construit par les actes, pas par les titres.** Montrez votre valeur avant de la revendiquer.

5. **Les conflits sont normaux.** Ce qui compte, c'est comment vous les gérez.

6. **Communiquez, communiquez, communiquez.** Et adaptez votre message à votre audience.

Dans le prochain chapitre, on va parler de la construction de votre vision technique. Parce que maintenant que vous savez où vous en êtes dans l'organisation, il faut définir où vous voulez aller !

---

*"Un CTO sans vision, c'est un développeur senior avec une voiture de fonction. Un CTO avec une vision, c'est quelqu'un qui peut changer une entreprise."*
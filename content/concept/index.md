---
title: Concept
comment: false
draft: true
menu:
  main:
    weight: 50
---
**Theory of Change: Quality of democratic decisions deteriorate when lawmakers are
solely influenced by special interest and they improve with increased public scrutiny
and more citizens being involved in the decision making process.**

## Problem Description
Decisions in the European Union seem far removed from peoples’ daily lives and don’t receive the
public scrutiny they deserve.1 This leads to a situation where Members of the European Parliament
(MEPs) are not held to account for their decisions, which in turn leads to a de-prioritization of the
public interest in EU decision making. Furthermore, the EU decision making process is opaque to
many citizens. They neither know their elected representatives nor the ongoing negotiations or whom
to contact when over which channel to make their voices heard.

## Proposed Solution
The tool we develop aims to bring citizens closer to their elected representatives. It empowers users to
contact MEPs efficiently and with a low-entry barrier. The software takes the burden away from users
to understand the EU and which MEPs are best to contact on a particular issue, how best to contact
them and potential cost the user otherwise has to incur.
The tool is developed as a white label solution that can be applied to any EU level decision that has to
be voted in the plenary of the European Parliament. NGOs that campaign around an EU decision can
implement the software to mobilize their constituency efficiently with the goal to influence particular
plenary votes.

## Application and Strategic Implications
The DearMEP software is currently tailored to address the whole European Parliament and to be used
by citizens from all EU countries to contact MEPs from their countries. Therefore, it’s best suited for
plenary votes. Any mass mobilization tool is also reducing complexity as it frames political decisions as
binary choices, e.g. “Are you for or against X?”.
The tool should therefore not be applied during committee stage when negotiations on concrete text
might lead to more meaningful improvements than creating a split in the aisle around an issue. Hence,
on legislative files we recommend the application of the tool around 1st and 2nd reading plenary votes.

## Risk of Backlash
Any meaningful contact attempt from citizens to their elected lawmakers that gets their attention can
be seen as disruption. It highly depends on the understanding of democracy from the lawmaker if they
perceive actual inputs from their citizens as desirable. The fact that EU lawmakers are usually not as
much in the public eye as national lawmakers contributes to this fact. We believe, that a democratic
European Union needs to be accessible and accountable to its citizens. The hesitation around this
issue might be due to a cultural understanding of the role of MEPs which is subject to change. We also
tried to address this issue with the header image of our tool.
1 This can be measured in the distribution of media coverage and citizen engagement between national and EU level decisions.

## Minimum Viable Product (MVP)
The MVP offers the following functionality:
1) The tool has English as the default language but can be fully translated. The tool tries to match the
available translations with the browser language of the user. Users can manually choose a different
language.
2) All MEPs are scraped with their contact information from [parltrack.eu](https://parltrack.eu). For every MEP a sway-ability
score is uploaded how likely they are to vote for (1) or against (0) the issue of the particular campaign.
MEPs with score 0.5 have the highest likelihood to be chosen for contact and MEPs with score 0 or 1
are never picked. The tool focuses on the movable middle on any decision.
3) The country selection defaults to the EU member state of the geolocation of the IP address of the
user. As a result, the user is by default presented with MEPs from the country of their IP address.
4) An MEP is chosen and the picture, name, group, party, country and available contact forms (e-mail,
twitter, facebook, instagram) are shown. Users can contact that particular MEP or request another one
from the selected country. The user can manually change their country at any time, for example in
case they have dual citizenship, are traveling or using a VPN. Users can also select any particular MEP,
for example if they want to continue a previous conversations. MEPs with a sway-ability score of 0 or 1
are marked as unlikely to be convinced.
2
When the phone functionality is not disabled the following functions are also available
5) When the user is not registered in the system they are asked to provide a telephone number and
accept the privacy policy. If the phone number is valid2, an SMS verification code is sent.
2 Only non-premium rate, mobile phone numbers of EU countries are deemed valid.
3
DearMEP: Concept Note| Epicenter.works
6) The user has the option to initiate a call with the particular MEP that has been selected right now.
4
DearMEP: Concept Note| Epicenter.works
7) The user can also schedule a call with MEPs from the selected country at a later time. Weekday(s)
and time for that weekday3 can be chosen. The system then calls the user and puts them in an audio
menu where they can press buttons on their phone to execute particular commands. Those functions
are a) connect now to MEP <name of MEP spoken> b) listen to arguments in preparation of your call. c)
cancel your call subscription.
3 Options are limited to office hours of the European Parliament matched towards the current timezone of the user.
5
DearMEP: Concept Note| Epicenter.works
8) Whenever a call above a certain threshold duration has been executed the system sends the user a
link for a feedback form in which they can provide information about their experience, if they have the
impression that they have convinced the MEP and if they experienced technical problems.
9) The tool can be embedded in any online campaign as web component4 with adaptations to styling
so to match the host website, configurations like disabling of the call tool and other parameters like a
string to attribute statistics to that particular campaign.
10) The tool can be configured to self-learn and adapt the sway-ability score based on the call
feedback received by users. The data of the MEPs and their sway-ability scores can be exported and
imported. Anonymised Call feedback can also be exported. Exports are behind an access control and
it’s assumed that the campaigns that host the same instance of the DearMEP tool are given access.

## Terminology, Hosting, Data Protection and Cost
The DearMEP tool is a white label solution that can be applied to any issue on EU level. Application on
national level or around other decision making bodies is possible, but require additional development.
When the DearMEP Tool is applied for a particular campaign it needs to be centrally hosted and
configured. Texts and audio files have to be adapted for that issue. MEPs of the current legislative term
have to be uploaded with their sway-ability value. We call such a running version of DearMEP an
**“instance”**.
Every instance can be embedded in multiple campaign websites, which might do further configuration
for their particular use case. We call such an embed of an instance a **“campaign”**.
The DearMEP tool processes personal data (phone numbers, IP addresses) and comes with a
template privacy policy. This policy needs to be adapted by whoever hosts the tool, as this entity is
most likely the data controller. Any changes to the functioning of the tool need to be reflected in the
4 https://en.wikipedia.org/wiki/Web_Components
6
privacy policy. We give no guarantee and hold no liability for the instances or implementations of this
tool. The instance that operates the DearMEP tool also needs to connect it to a phone provider and
thereby cover the costs of the phone calls and SMS for users.

## Current Development Stage
Development is scheduled to conclude by early June. June is also scheduled for UI/UX and penetration
testing. We hope to release the MVP in summer.
Development was financed out of the Core of Epicenter.works and the software will be released under
a free license once the CSAR legislation5 is concluded. In our understanding of democracy all avenues
to connect citizens to lawmakers should be equally accessible to everyone.

## Future Development Ideas
Undecided ideas for future development include:

**Enhance e-mail functionality**

A minority of users is willing to have conversations on the phone with decision makers. While this is
the most authentic communication channel, it is also the one with the lowest conversion rate. This is
why we offer a call subscription to multiply contact attempts from this smaller pool of people willing to
pick up the phone.

E-mail seems the second best option to reach politicians, as neither all lawmakers or users are on
matching social media platforms. But E-mails that all come from the same address, have the same
subject or have similarities in their text bodies are filtered as spam by the European Parliament and
will probably never be seen.

Subsequently, as e-mails can’t be sent out centrally by one mail server, but need to come from the
citizens and their personal e-mail addresses directly, we need to handover the composed email to
their webmail or e-mail program. Mailto links fall under the same length limitation of any URL and
mailto configuration in most web browsers might not be properly linked to mail programs or webmail.
Hence, a solution might be to offer copy paste functions to bring the composed e-mail to the right
user interface of the users e-mail program or webmail.

A clever e-mail functionality would circumvent the shortcomings of email composing by helping the
user create a unique e-mail with their own words based on the answers of a questionnaire that needs
to be tailored to the particular campaign (e.g. “Why do you care about this issue?”, “What risks do you
see if this law is adopted?”). It will be tricky to still convey to the MEP the concrete ask (e.g. “please vote
for amendment A on the plenary vote on file B on day C”) without providing a marker by which all
emails coming from the tool can be filtered. Even if a user creates such a unique e-mail for themselves
the question remains how many times that e-mail can be sent to an MEP before its filtered away.
LLM functions like ChatGPT are *not* solutions for us and should be avoided as our purpose is to
connect real citizens to their elected representatives. We try to make it easier for people and
authenticity is the deciding factor to our advantage.
5 See https://oeil.secure.europarl.europa.eu/oeil/popups/ficheprocedure.do?reference=2022/0155(COD)&l=en and future
https://dearmep.eu/
7

**Statistics Dashboard**

Exports are right now available from the backend and created with cron jobs. They can be accessed
either under a .htaccess login protected endpoint or a Nextcloud. A multi-user dashboard that offers
statistics, exports and imports would be advantageous for empowering not-so-digitally-savvy
organisation to use more of the functionality of the tool.

**Pledge Functionality**

In our 2019 attempt to implement such a tool with pledge2019.eu we had a functionality that would
exclude politicians from the contact functionality if they pledged to not vote for a particular law in 2nd
reading. Such a pledge functionality by which an e-mail from the accredited offices of an MEP can
exclude a politician from being contacted by citizens might be desired by some instances/campaigns.

**Disable Call-Functionality fine-granularly**

Debates between member states vary and it might be desirable to have certain contact functionality
disabled for particular groups of MEPs or countries. Technically, this is easy. The question is how to
argue such a two class system that takes functionalities away from certain groups of citizens.

**Tailor towards Committee decisions**

Potentially the tool could also follow the whole legislative trajectory of a dossier moving through
committees towards plenary. Such a functionality would require removing the focus on country and
citizenship as most users won’t have at most a handful of MEPs from their country in any particular
committee.

Such an adapted focus would need to be reflected – at least – in the choosing of MEPs and the call
subscription functionality.

## Pilot use-case for the CSAR dossier
To help bring this tool into the world, Epicenter.works will host the first instance of DearMEP for the
CSAR legislation. We are offering the tool to all campaigns focussing on this issue, cooperate with them
and learn from their experience.
8

